# .NET on WASM in a react component

This sample shows how to use .NET on WASM integrated into a react application. It goes one step further and extract the react component into a reusable package.

## Project structure

- **app**: target react application using `react-scripts`
- **qrlibrary**: npm library implementing QR generation
  - **dotnet**: .NET implementation of QR generator
  - **react**: webpack bundled react component for showing a QR code image

## Live demo

https://maraf.github.io/dotnet-wasm-react/

## Building source code

### .NET part

- Install .NET 7 SDK
- Run `npm run build:dotnet:debug` in the `qrlibrary/react` folder

If you want to produce an optimized AOT compilation, you need WASM workload for .NET SDK. 
This way the live demo is produced.

- Install wasm-tools workload `dotnet workload install wasm-tools`
- Run `npm run build:dotnet` in the `qrlibrary/react` folder

### React library

In the `qrlibrary/react` folder
- Run `npm install`
- Run `npm run build`

### App

In the `app` folder
- Run `npm install`
- Run `npm run build`

### Under the hood

Building the .NET part, a folder with assets is produced in the `react/dist/dotnet`. The react library than dynamically loads the `dotnet.js` and starts the runtime (which loads the rest of the assets). The structure and file names are defined in the `mono-config.json` which `dotnet.js` uses. 

It is not ideal situation for bundlers like webpack and so to make the solution work, a `postinstall` script is defined in the react library to copy the `react/dist/dotnet` to the application public folder `app/public/qr`. 

This script runs only when the library is installed. If you want to make change to the .NET code and see the changes in the application, you have to reinstall the qrlibrary in the application.

In the `app` folder
- Run `npm uninstall qrlibrary`
- Run `npm install qrlibrary@file:../qrlibrary/react`

This ensures that new version of .NET binaries are copied to the `app/public/qr`. There is an open issue on the NPM repository to support assets, but at the time, there isn't a better way I know of (I welcome any suggestions).
