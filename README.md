# .NET on WASM in a React component

This sample shows how to use .NET on WASM integrated into a React application. It goes one step further and extract the react component into a reusable package.

- [Blazor Community Standup - Integrate .NET in JavaScript apps](https://www.youtube.com/watch?v=tAh899Gri4E)
- [Blazor + React demo](https://github.com/maraf/blazor-wasm-react)

## Project structure

- **app**: target React application using rollup to do the JavaScript build
- **qrlibrary**: npm library implementing QR generation
  - **dotnet**: .NET implementation of QR generator
  - **react**: rollup bundled React component for showing a QR code image

## Live demo

https://maraf.github.io/dotnet-wasm-react/

## Building source code

### .NET part

- Install .NET 10 SDK (preview7+)
- Run `dotnet publish` in the `qrlibrary/dotnet` folder

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

.NET build (`dotnet build` or Build in VS) doesn't copy all files to the output directory. This happens only for publish. We do it make incremental builds faster. As a result, integrating .NET build output into JavaScript bundlers work properly for publish output. Making it work for build output should be possible by properly mapping imports to individual locations using rollup (or other bundler) custom plugin. We don't provide such plugin at the moment.