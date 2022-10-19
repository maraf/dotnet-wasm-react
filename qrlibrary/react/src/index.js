import React, { useEffect, useState } from 'react'

export const QrImage = ({ text, relativePath }) => {
  const [imageSrc, setImageSrc] = useState(undefined);
  useEffect(() => {
    async function generateAsync() {
      if (text) {
        // Path in the target application public directory
        // Use a default provided by webpack, bundled javascript is in public/static/js
        // and our .NET code is copied to public/qr
        const mainJsPath = (relativePath ? relativePath : '../../') + 'qr/main.js';
        const { generate } = await import(/* webpackIgnore: true */mainJsPath);

        var image = await generate(text, 10);
        setImageSrc("data:image/bmp;base64, " + image);
      } else {
        setImageSrc(null);
      }
    }

    generateAsync();
  }, [text]);

  if (imageSrc) {
    return (<img src={imageSrc} />);
  }

  if (imageSrc === null) {
    return;
  }

  return (
    <i>Loading...</i>
  );
}
