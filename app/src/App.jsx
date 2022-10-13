import { QrImage } from 'qrlibrary';
import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import pkg from '../package.json';

function App() {
  const [text, setText] = useState("Hello from react!");
  const debouncedSetText = useCallback(() => debounce(setText, 2000)(), []);

  const basePath = pkg.homepage 
    ? new URL(pkg.homepage).pathname
    : undefined;

  return (
    <>
      <div>
        Generate a QR from text: 
        <br />
        <input type="text" placeholder="Hello from react!" onChange={e => debouncedSetText(e.target.value)} />
      </div>
      <div>
        <QrImage text={text} basePath={basePath} />
      </div>
    </>
  );
}

export default App;
