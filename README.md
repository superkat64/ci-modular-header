# Modular Header
This application exposes a micro frontend header component that can be dynamically imported through Webpack 5's [ModuleFederationPlugin](https://webpack.js.org/plugins/module-federation-plugin/) and rendered in other SPAs at runtime.

### Micro Frontends
Micro-frontend architrcture is a design approach in which a front-end application is decomposed into individual, semi-independent "microapps" working loosely together. In the context of SPAs, they are like a sliced up version of your SPA, it still looks and feels like an SPA to the user, but under the hood it dynamically loads parts of the application based on the user's flow.

### Module Federation Plugin Configuration
The ModuleFederationPlugin allows a build to provide or consume modules with other independent builds at runtime. With some minor updates to the webpack config, it's relatively simple to import the header component from this application into another app.

Update your host application's `webpack.config.js`

```
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require("./package.json").dependencies;
const path = require("path");

module.exports = {
  // Still figuring out why these are necessary but I think it has to do with resolving the typescript files
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new ModuleFederationPlugin({
      name: [application_name],
      library: { type: 'var', name: [application_name] },
      remotes: {
        // Will need to replace localhost:3000 with wherever this application is being hosted
        ci_modular_header: 'ci_modular_header@http://localhost:3000/remoteEntry.js',
      },
      shared: {
        // Specifies which dependencies shouldn't be loaded more than once on the page
        react: { 
          singleton: true,
          eager: true, 
          requiredVersion: deps.react
          }, 
          'react-dom': { 
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom']
        }
      }
    })
  ]
}
```

## Setup
1. `yarn install`
2. `yarn start`

This app was created using the [Custom Ink Single Page Application Template](https://github.com/customink/ci-spa-starter)
