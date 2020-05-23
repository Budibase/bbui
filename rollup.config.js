import svelte from 'rollup-plugin-svelte-hot'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'
import hmr from 'rollup-plugin-hot'
import postcss from 'rollup-plugin-postcss-hot'
import { mdsvex } from 'mdsvex'
import svench from 'svench/rollup'
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
			[addClasses, {
				'*': 'svench-content-md'
			}]
		]
  }),
]

export default {
  input: 'src/index.js',
  // Svench plugin will override output when enabled (and we can't let Rollup
  // see multiple outputs array, or it will start multiple Svench server)
  output: SVENCH
    ? {}
    : [
        { file: pkg.module, format: 'es' },
        { file: pkg.main, format: 'umd', name },
      ],
  plugins: [
		postcss(),

    svench({
      // The root dir that Svench will parse and watch.
      dir: './src',

      // The Svench plugins does some code transform, and so it needs to know of
      // your preprocessors to be able to parse your local Svelte variant.
      preprocess,

      extensions: ['.svench', '.svench.svelte', '.svench.svx'],

      // Example: code splitting with ES modules
      override: {
        // replace your entry with Svench's one
        // using a custom entrypoint to include our global CSS
        input: '.svench/svench.js',
        output: {
          // change output format to ES module
          format: 'es',
          // remove the file from the original config (can't have file & dir)
          file: null,
          // and change to a dir (code splitting outputs multiple files)
          dir: 'public/svench',
        },
      },

      serve: {
        host: '0.0.0.0',
        port: 4242,
        public: 'public',
      },
    }),

    svelte({
      dev: !PRODUCTION,
      css: css => {
        css.write('dist/bundle.css')
      },
      extensions: ['.svelte', '.svench', '.svx'],
      preprocess,
      hot: HOT && {
        optimistic: true,
        noPreserveState: false,
      },
    }),

    resolve(),

    hmr({
      public: 'public',
      inMemory: true,
      compatModuleHot: !HOT, // for terser
    }),
  ],
}
