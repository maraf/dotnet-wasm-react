import React, { useEffect, useState } from 'react'

export const QrImage = ({ text, basePath }) => {
  const [imageSrc, setImageSrc] = useState(undefined);
  useEffect(() => {
    async function generateAsync() {
      if (text) {
        // Path in the target application public directory
        const mainJsPath = (basePath ? basePath : '') + '/qr/main.js';
        const { generate } = await import(/* webpackIgnore: true */mainJsPath);

        var image = await generate(text, 10, { basePath });
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
