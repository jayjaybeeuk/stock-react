<p align="center">
    <h3 align="center">A simple React stock listing<br></h3>
</p>

### What we are using

- React 16
- Webpack 3
- React Router 4
- Hot Module Reloading

### Features

- It's really simple so far.
- For simplicity we are avoiding Redux. Just because.

### To run

- You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.
- Fork and clone the project:

```
git clone https://github.com/jayjaybeeuk/stock-react.git
```

- Then install the dependencies:

```
npm install
```

- Run development server:

```
npm start
```

- Or you can run development server with [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard):

```
npm run dev
```

Open the web browser to `http://localhost:8888/`

### To build the production package

```
npm run build
```

### Running build locally

```
npm run serve:build
```

### Nginx Config

Here is an example Nginx config:

### Eslint

There is a `.eslint.yaml` config for eslint ready with React plugin.

To run linting, run:

```
npm run lint
```

To run cypress end to end tests tests:

```
npm run cypress:run
```

To run Ramlizer, Cypress and webpack altogether

```
npm run test:e2e
```

### Notes on importing css styles

- styles having /src/ in their absolute path considered part of the application and exported as local css modules.
- other styles considered global styles used by components and included in the css bundle directly.

### Contribute

Please contribute to the project if you know how to make it better, including this README :)
