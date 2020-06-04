import * as path from 'path'
import * as fs from 'fs'
import svelte from 'rollup-plugin-svelte-hot'
import resolve from '@rollup/plugin-node-resolve'
import hmr from 'rollup-plugin-hot'
import del from 'rollup-plugin-delete'
import postcss from 'rollup-plugin-postcss-hot'
import { plugin as Svench } from 'svench/rollup'
import addClasses from 'rehype-add-classes'

import pkg from './package.json'

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase())

const WATCH = !!process.env.ROLLUP_WATCH
const SVENCH = !!process.env.SVENCH
const HOT = WATCH
const PRODUCTION = !WATCH

// let $
const svench = Svench({
  // The root dir that Svench will parse and watch.
  dir: 'src',

  extensions: ['.svench', '.svench.svelte', '.svench.svx'],

  serve: WATCH && {
    host: 'localhost',
    port: 4242,
    public: 'public',
    nollup: 'localhost:42421',
  },
})

// NOTE configs are in function form to avoid instantiating plugins of the
// config that is not used for nothing (in particular, the HMR plugin launches
// a dev server on startup, this is not desired when just building for prod)
const configs = {
  svench: () => ({
    input: '.svench/svench.js',
    output: {
      format: 'es',
      dir: 'public/svench',
    },
    plugins: [
      // NOTE cleaning old builds is required to avoid serving stale static
      // files from a previous build instead of in-memory files from the dev/hmr
      // server
      del({
        targets: 'public/svench/*',
        runOnce: true,
      }),

      postcss({
        hot: HOT,
        extract: path.resolve('public/svench/theme.css'),
        sourceMap: true,
      }),

      svench,

      svelte({
        dev: !PRODUCTION,
        css: css => {
          css.write('public/svench/svench.css')
        },
        extensions: ['.svelte', '.svench', '.svx'],
        // Svench's "combined" preprocessor wraps both Mdsvex preprocessors
        // (configured for Svench), and its own preprocessor (for static
        // analysis -- eg extract source from views)
        preprocess: svench.$.preprocess,
        hot: HOT && {
          optimistic: true,
          noPreserveState: false,
        },
      }),

      resolve({ browser: true }),

      HOT &&
        hmr({
          public: 'public',
          inMemory: true,
          compatModuleHot: !HOT, // for terser
        }),
    ],

    watch: {
      clearScreen: false,
      // buildDelay is needed to ensure Svench's code (routes) generator will
      // pick file changes before Rollup and prevent a double build (if Rollup
      // first sees a change to src/Foo.svench, then to Svench's routes.js)
      buildDelay: 100,
    },
  }),

  lib: () => ({
    input: 'src/index.js',
    output: [
      { file: pkg.module, format: 'es' },
      { file: pkg.main, format: 'umd', name },
    ],
    plugins: [
      postcss(),

      svelte({
        dev: !PRODUCTION,
        css: css => {
          css.write('dist/bundle.css')
        },
        extensions: ['.svelte'],
      }),

      resolve(),
    ],
  }),
}

export default configs[SVENCH ? 'svench' : 'lib']()
