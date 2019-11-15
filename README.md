# AngularPushNotifications

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Reset notifications
Go to browser settings and remove subscription.
chrome://settings/content/notifications  (http://127.0.0.1:8080/)

## Development server
Node: 10.16.3

Start development server with one of the commands:
1. Run `npm run start` This will automatically start dev server and open tab in the default browser.

2. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Testing notifications
We need app build with production flag to enable service workers.
1. Run  `npm run build`
2. Run  `http-server dist` (if you don't have http-server run `npm add -g http-server`)
3. Open browser in url given from terminal and test subscription


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
