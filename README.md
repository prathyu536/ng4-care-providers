# NgCareProviders [![Build Status](https://travis-ci.org/Mohammed9531/ng4-care-providers.svg?branch=master)](https://travis-ci.org/Mohammed9531/ng4-care-providers)

## Development server

#### Step 1
Start your mongodb by running the command below:

```bash
$ mongod
```
#### Step 2
Start the development server by running the command below. This will start 2 servers concurrently, client-side code on `4200` & server-side on `3000` port. Port `4200` listens to the backend server through the proxy configuration.

```bash
$ npm run dev
```
#### Step 3
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Production server
Start the production server by running the command below. This will build the project followed by starting the production server.

```bash
$ npm run prod
```
## Build

```bash
$ npm run build
```
This will generate a production code in the `dist` directory.

## Running unit tests

```bash
$ npm run test-ng
```

## Running end-to-end tests

```bash
$ npm run e2e
```

## Further help
Contact the `dev team` or the `collaborators`.
