# Angular cv

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Static version of the cv with scully

to generate the static version, here are the steps.

run `ng build` to build the project.

run `npx scully` to generate static version, files are generated in dist/static.

run `npx scully serve` to serve the static version.

## Build and Deployement
The build is done through a pipeline defined in .github/workflows/build-and-deploy.yml.
[pipeline](.github/workflows/build-and-deploy.yml).

After building the project and successfully running the tests, the files are deployed to 
GitHub Pages and published at this [link](https://lemrabetanass.github.io/angular-cv/).
