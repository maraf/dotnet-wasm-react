import React, { useEffect, useState } from 'react'
// import { generate } from '@dotnet/main'

export const QrImage = ({ text }) => {
  const [imageSrc, setImageSrc] = useState(undefined);
  useEffect(() => {
    async function generateAsync() {
      const mainJsPath = '/qr/main.js';
      const { generate } = await import(/* webpackIgnore: true */mainJsPath);

      var image = await generate(text, 10);
      setImageSrc("data:image/bmp;base64, " + image);
    }

    generateAsync();
  }, [text]);

  if (imageSrc) {
    return (<img src={imageSrc} />);
  }

  return (
    <i>Loading...</i>
  );
}
