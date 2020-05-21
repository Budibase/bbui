# Svench component template

Develop your sharable component (or components lib) with [Svench](https://github.com/rixo/svench) and HMR prewired.

Ideal to try Svench without messing with your project's config ;)

```bash
git clone git@github.com:rixo/svench-component-template.git my-lib
cd my-lib
yarn
yarn svench
```

Open your browser at http://localhost:4242.

**NOTE** For now, it is recommended to clone the template (instead of degit), to be able to merge future updates to the config (since Svench is in early dev...).

You should keep the template's remote as `upstream` and add the address of your own repo as `origin`:

```bash
git remote rename origin upstream
# add yours
git remote add origin ...

# push and track to your repo
git push -u origin master
# -u is not needed on subsequent pushes
git push

# update from upstream
git pull upstream master
```

## Consuming components

(From [official component template](https://github.com/sveltejs/component-template#consuming-components))

Your package.json has a `"svelte"` field pointing to `src/index.js`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`dist/index.mjs`) and a UMD script (`dist/index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.
