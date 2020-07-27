# Noctis

- Core module: handles singletons
- Theme module: handles UI
- Page module: handles the rest of the features in the app

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4211/`. The app will automatically reload if you change any of the source files.

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
- npm install @spectrum-css/vars @spectrum-css/button @spectrum-css/page (OPTIONAL)
- npm install bootstrap (OPTIONAL)
- npm install flexiblegrid (OPTIONAL)
- ng add @ngneat/transloco
- npm install ng-http-loader --save / yarn add ng-http-loader (STUDYING)

### Create core functionalities
- ng generate module @core/core --module=app --flat
- ng generate module @theme/theme --module=app --flat
- ng generate component @theme/theme --flat --module=theme 
- ng generate module pages --route pages --module app.module
- ng generate component @theme/components/layout --module theme
- ng generate component @theme/components/not-found --inlineTemplate --inlineStyle --flat --module theme
- ng generate component @theme/components/transferendum --inlineTemplate --inlineStyle --flat --module theme
- ng generate component @theme/components/sidebar --skipTest --module theme
- npm install --save @auth0/angular-jwt
- ng generate service @core/services/authentication
- ng generate service @core/services/splash-screen
- ng generate service @theme/theme
- ng generate service @theme/ui-style-toggle

- ng generate guard @core/helpers/auth --skipTests
- ng generate guard @core/helpers/role --skipTests
- ng generate guard @core/helpers/module-import --skipTests

- ng generate module @core/auth --route auth --module app.module
- ng generate component @core/auth/login --module auth.module
- ng generate service @core/services/login
- ng generate service @core/services/transferendum
- ng generate module pages/demos --route pages --module pages.module
- ng generate module pages/settings --route settings --module pages.module
- ng generate component pages/settings/user --module settings.module
- ng generate component pages/settings/app --module settings.module

- ng generate module pages/[page name] --route [page name] --module pages.module



- find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +

- git mv -f OldFileNameCase newfilenamecase

## Food for thoughts
- https://www.npmjs.com/package/@rxweb/reactive-form-validators
- https://blog.techbridge.cc/2018/10/13/pwa-in-action/
- https://stackoverflow.com/questions/51887581/angular-routing-not-working-on-netlify-on-page-refresh
- https://stackoverflow.com/questions/53413612/ngx-translate-with-shared-lazy-loading-modules
- https://medium.com/better-programming/fantastic-translations-and-where-to-find-them-421ee46f59db
- https://medium.com/@TuiZ/how-to-split-your-i18n-file-per-lazy-loaded-module-with-ngx-translate-3caef57a738f
- https://stackoverflow.com/questions/58354348/windows-10-npx-create-react-app-myapp-command-does-not-work-because-of-whit
