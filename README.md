# Noctis

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. 
Alternatively, you can run `ng generate module [module] --route [path to the lazy route] --module [parent module]` to quickly generate a component that bundles with module, and route.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Commands
- ng new noctis --routing --style=scss --verbose

### Create theme
- ng add @angular/material
- npm install --save material-design-icons
- npm install @spectrum-css/vars @spectrum-css/button @spectrum-css/page


### Create core functionalities
- ng generate module @core/core --module=app --flat
- ng generate module @theme/theme --module=app --flat
- ng generate component @theme/theme --flat --module=theme 
- ng generate module pages --route pages --module app.module
- ng generate component @core/components/not-found --module core
- npm install --save @auth0/angular-jwt
- ng generate service @core/services

- ng generate guard @core/helpers/auth --skipTests
- ng generate guard @core/helpers/role --skipTests
- ng generate guard @core/helpers/module-import --skipTests

- ng generate module @core/auth --route auth --module app.module
- ng generate component @core/auth/login --module auth.module
- ng generate service @core/auth/services/login
- ng generate module pages/demos --route pages --module pages.module

- ng generate module pages/[page name] --route [page name] --module pages.module



- find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +

- git mv -f OldFileNameCase newfilenamecase

## Food for thoughts
- https://www.npmjs.com/package/@rxweb/reactive-form-validators
