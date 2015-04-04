# fd-isVdom

[![Build Status](https://travis-ci.org/fp-dom/fd-isVdom.svg)](https://travis-ci.org/fp-dom/fd-isVdom) [![npm version](https://badge.fury.io/js/fd-isvdom.svg)](http://badge.fury.io/js/fd-isvdom)
> Check if an object is a dom object

## Installation

`npm install fd-isvdom --save`

## Usage

```js
var isVdom = require('fd-isvdom');
var ifElse = require('fj-ifelse');
var hello = h('.greeting', ['Hello Vdom']);

ifElse(
  isVdom(),
  () => console.log('yes'),
  () => console.log('no')
)(hello);
```


## API

### isVdom

Checks if a object is a dom object

`isVdom()`

***Parameters***

| Name          | Type        | Description                |
| ------------- | ----------- | -------------------------- |
| obj           | *           | Object to be checked       |

***Returns***

| Type        | Description                                         |
| ----------- | --------------------------                          |
| function    | A function that checks if the passed value is a virtual dom object |
