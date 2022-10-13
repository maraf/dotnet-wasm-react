// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

import { dotnet } from './dotnet.js'

let exportsPromise = null;

async function createRuntimeAndGetExports(options) {
    const { getAssemblyExports, getConfig } = await dotnet
        .withModuleConfig({
            locateFile: (path, prefix) => {
                let basePath = '/qr/';
                if (options && options.basePath)
                    basePath = options.basePath + basePath;

                return basePath + path;
            }
        })
        .create();

    const config = getConfig();
    return await getAssemblyExports(config.mainAssemblyName);
}

export async function generate(text, pixelsPerBlock, options) {
    if (!exportsPromise) {
        exportsPromise = createRuntimeAndGetExports(options);
    }

    const exports = await exportsPromise;
    return exports.QR.Generate(text, pixelsPerBlock);
}