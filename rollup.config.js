import * as path from 'path'
import svelte from 'rollup-plugin-svelte-hot'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'
import hmr from 'rollup-plugin-hot'
import postcss from 'rollup-plugin-postcss-hot'
import { mdsvex } from 'mdsvex'
import { plugin as svench } from 'svench/rollup'
import addClasses from 'rehype-add-classes'

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase())

const WATCH = !!process.env.ROLLUP_WATCH
const SVENCH = !!process.env.SVENCH
const HOT = WATCH
const PRODUCTION = !WATCH

const preprocess = [
  mdsvex({
    extension: '.svx',
    rehypePlugins: [
      [
        addClasses,
        {
          '*': 'svench-content svench-content-md',
        },
      ],
    ],
  }),
]

const configs = {
  svench: {
    input: '.svench/svench.js',
    output: {
      format: 'es',
      dir: 'public/svench',
    },
    plugins: [
      postcss({
        hot: HOT,
        extract: path.resolve('public/svench/theme.css'),
        sourceMap: true,
      }),

      svench({
        // The root dir that Svench will parse and watch.
        dir: 'src',

        // The Svench plugins does some code transform, and so it needs to know of
        // your preprocessors to be able to parse your local Svelte variant.
        preprocess,

        extensions: ['.svench', '.svench.svelte', '.svench.svx'],

        serve: WATCH && {
          host: '0.0.0.0',
          port: 4242,
          public: 'public',
        },
      }),

      svelte({
        dev: !PRODUCTION,
        css: css => {
          css.write('public/svench/svench.css')
        },
        extensions: ['.svelte', '.svench', '.svx'],
        preprocess,
        hot: HOT && {
          optimistic: true,
          noPreserveState: false,
        },
      }),

      resolve(),

      HOT &&
        hmr({
          public: 'public',
          inMemory: true,
        }),
    ],
  },

  lib: {
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
  },
}

export default configs[SVENCH ? 'svench' : 'lib']
