# Svench component template

Develop your sharable component(s) -- or lib -- with [Svench](https://github.com/rixo/svench) and HMR prewired.

Ideal to try Svench without messing with your project's config ;)

## Demo

This template is deployed at https://svench-component-template.now.sh/.

## Install

**NOTE** For now, it is recommended to clone the template (instead of degit), to be able to merge future updates to the config (since Svench is in early dev...).

```bash
git clone git@github.com:rixo/svench-component-template.git my-lib
cd my-lib
yarn
yarn svench
```

Open your browser at http://localhost:4242.

Edit a `.svench` file in `./src`.

### Merging changes from the template

Svench is currently under very active development. Integration with the build config / project setup is the subject of intensive research, so expects its API to change a lot.

In order to keep up with the changes, I advice that you keep the template's repo as a remote of your project. This way you'll be able to merge upstream changes. Ah! And maybe don't mess with the config too much in your project or the merge may be... hairy!

Run these commands (e.g. after install) to keep the template's remote as `upstream` and add the address of your own repo as `origin`:

```bash
git remote rename origin upstream
# add yours
git remote add origin YOUR_GIT_REPO

# push and track to your repo
git push -u origin master

# -u is not needed on subsequent pushes
git push
git pull
```

Pull from `upstream` when you want to merge latest changes from the template:

```bash
# update from upstream
git pull upstream master

# -> this is the point where you might have to resolve a merge conflict or two...

# upstream dependencies might have changed, so reinstall
yarn
```

## Usage

### Scripts

#### build

Build your component(s) in `dist`.

#### dev

Watch and build your component(s) in `dist`.

#### svench

Launch Svench app at http://localhost:4242, with watch.

#### build:svench

Build your workbench in `public`.

## Styling

Custom styling and theming is very much under development in Svench. This template implements some ideas to tackle the question of styling user content like markdown pages without leaking CSS into the views (i.e. the components behind demonstrated).

We add the `rehype-add-classes` to Mdsvex to add the `svench-content-md` to _every_ Mdsvex-rendered elements. This way we can achieve Svelte-like CSS scoping for our markdown content.

Note: we can't rely on a generic class on containers, because every container element Svench can control also contains the views. This means that any inheritable CSS property (e.g. `color`, `font-size`...) set on the container would be inherited in the view. Also, coupling your target selector (e.g. `h1`) with the very specific class we add (`svench-content-md`) should prevent any selector collision with your actual components in the views.

```css
h1.svench-content-md {
  font-size: 2em;
}
```

This templates also includes a PostCSS plugin and a custom svench entrypoint, in `.svench/svench.js`. This lets you add custom styles for your workbench in `.svench/svench.css`. You can also add a preprocessor like Sass or Less if you want. Refer to the instructions in [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss#with-sassstylusless).

Note: don't try too hard to add a padding to your markdown pages... This is more a question of layout more than styling, and would need extra support for Svench itself... That is currently a work in progress!

## Consuming components

This template follows instructions from the official template, regarding publishing of Svelte components. Notably, it has a `svelte` field in `package.json` that points to the components' source code.

Refer to the [official component template](https://github.com/sveltejs/component-template#consuming-components) for more information.
