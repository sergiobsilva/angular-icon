# angular-icon

[![Build Status](https://travis-ci.org/vitaliy-bobrov/angular-icon.svg?branch=master)](https://travis-ci.org/vitaliy-bobrov/angular-icon)
[![npm version](https://badge.fury.io/js/angular-icon.svg)](https://badge.fury.io/js/angular-icon)
[![npm](https://img.shields.io/npm/dt/angular-icon.svg)](https://github.com/vitaliy-bobrov/angular-icon)

Simple SVG icon component for Angular 2+ to use SVG icons from SVG sprite.
Now only inlined SVG sprites supported. SVG srpites from separate source unsopported by IE browsers.
SVG icons implements a11y features using `img` aria-role and `aria-label`.
All icons used `currentColor` value for SVG `fill` property.

Some helpful information regarding SVG sprives creation and usage - [CSS-Tricks article](https://css-tricks.com/svg-sprites-use-better-icon-fonts/).

## Instalation

* npm
`npm install --save angular-icon`

* yarn
`yarn add angular-icon`

## Usage

Import `IconModule` to your Angular app module or any other submodule where it will be used:
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { IconModule } from 'angular-icon'; // Import module with svg icon component declaration.

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IconModule // Add imported module to your app imports.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

After this component is ready to use in your templates:

```html
<svg-icon name="my-search-icon"
          size="24"
          alt="Search something"></svg-icon>
```

This will be transformed in following HTML markup:

```html
<svg-icon role="img" class="svg-icon" name="my-search-icon" size="24" aria-label="Search something" >
  <svg width="24" height="24">
    <use fill="currentColor" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#ico"></use>
  </svg>
</svg-icon>
```

## Available properties

### name

**Type**: String

Icon name that should be equal to icon `id` inside svg sprite.

### alt

**Type**: String

Icon alternative text used for `aria-label` property that used by screen readers (a11y).

### size

**Type**: number

Sets size in pixels for both SVG `width` and `height` properties. Makes icon square.

### svgWidth

**Type**: number

Sets size in pixels for SVG `width` property.

### svgHeight

**Type**: number

Sets size in pixels for SVG `height` property.

## TODO:
- [ ] Implement icons namespacing
- [ ] Implement remote SVG sprite support
- [ ] Add SVG icons fetching and inlining for non-supported browsers
- [ ] Implement service to register icons, icon sets
- [ ] Implement SVG sprite inlining only for AOT compilation mode
