# BoxPlots

[![License: MIT][mit-image]][mit-url] [![NPM Package][npm-image]][npm-url] [![Github Actions][github-actions-image]][github-actions-url]

A small library for computing boxplot objects with various quantiles options

## Install

```sh
npm install --save @sgratzl/boxplots
```

## Usage

```ts
import boxplot from '@sgratzl/boxplots';

const arr = [
  -0.402253, -1.4521869, 0.135228, -1.8620118, -0.5687531, 0.4218371, -1.1165662, 0.5960255, -0.5008038, -0.394178,
  1.3709885,
];
const b = boxplot(arr);
```

see [Samples](https://github.com/sgratzl/boxplots/tree/master/samples) on Github

or at this [![Open in CodePen][codepen]](https://codepen.io/sgratzl/pen/VweGdvO)

## Development Environment

```sh
npm i -g yarn
yarn set version latest
cat .yarnrc_patch.yml >> .yarnrc.yml
yarn
yarn pnpify --sdk vscode
```

### Common commands

```sh
yarn clean
yarn compile
yarn test
yarn lint
yarn fix
yarn build
yarn docs
yarn release
yarn release:pre
```

[mit-image]: https://img.shields.io/badge/License-MIT-yellow.svg
[mit-url]: https://opensource.org/licenses/MIT
[npm-image]: https://badge.fury.io/js/%40sgratzl%2Fboxplots.svg
[npm-url]: https://npmjs.org/package/@sgratzl/boxplots
[github-actions-image]: https://github.com/sgratzl/boxplots/workflows/ci/badge.svg
[github-actions-url]: https://github.com/sgratzl/boxplots/actions
[codepen]: https://img.shields.io/badge/CodePen-open-blue?logo=codepen
[codesandbox]: https://img.shields.io/badge/CodeSandbox-open-blue?logo=codesandbox
