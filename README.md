# .NET on WASM in a react component

This sample shows how to use .NET on WASM integrated into a react application. It goes one step further and extract the react component into a reusable package.

## Project structure

- **app**: target react application using `react-scripts`
- **qrlibrary**: npm library implementing QR generation
  - **dotnet**: .NET implementation of QR generator
  - **react**: webpack bundled ract component for showing a QR code image
