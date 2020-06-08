# Budibase bbui

A package that handles all common components across the Budibase organisation.

The project uses [Svench](https://github.com/rixo/svench). It is somewhat akin to Storybook but a lot less bloated and much easier to setup. It also supports HMR for quick development.

## Install

1. Clone
2. `yarn`
3. `yarn svench`

## Example workflow to create a component

1. Create a file: `Headline.svelte`
2. Create a Svench file: `Headline.svench`
3. Build component and add variants to the Svench file.
4. Once done, re-export the file in `src/index.js`.
5. Publish, update the package in the main project and profit. 

## Currently available components

* Input
* TextArea
* Button

Links:
* Homepage Link (HomeLink)

## TODO

* [ ] Figure out a good documentation situation
* [ ] Add testing suite (E2E using Playwright?)


## Setting up

* Run `npm init` (or `yarn init`)
* Replace this README with your own
 of the `prepublishOnly` hook in package.json.
