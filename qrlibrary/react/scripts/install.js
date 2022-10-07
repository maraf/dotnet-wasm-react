const fs = require('fs-extra')

console.log(`Install env in '${process.env.npm_lifecycle_event}'`)
for (const key in process.env) {
    if (Object.hasOwnProperty.call(process.env, key)) {
        const v = process.env[key];
        console.log(`${key} = '${v}'`);
    }
}

if (process.env.npm_lifecycle_event !== 'install') {
    return;
}

var userPath = process.env.INIT_CWD
console.log(`Copy .NET assets to '${userPath}'`);

fs.copySync('./dist/dotnet', userPath + '/public/qr')