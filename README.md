# .NET on WASM in a react component

This sample shows how to use .NET on WASM integrated into a react application. It goes one step further and extract the react component into a reusable package.

## Project structure

- **app**: target react application using rollup to do the JavaScript build
- **qrlibrary**: npm library implementing QR generation
  - **dotnet**: .NET implementation of QR generator
  - **react**: rollup bundled react component for showing a QR code image

## Live demo

https://maraf.github.io/dotnet-wasm-react/

## Building source code

### .NET part

- Install .NET 10 SDK (preview7+)
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

In .NET 10 we have added a way to produce JavaScript bundler friendly build output. In JavaScript world, file dependencies (like other JS files or images) are resolved using import statements.
In browser world, only JavaScript files can be imported using import statements. Because of this, we introduced an MSBuild property `WasmBundlerFriendlyBootConfig=true` to switch between browser-runnable output 
and JavaScript bundler-friendly build output. Switching this on allows JavaScript bundlers to consume output of .NET build (publish).
