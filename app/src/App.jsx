import { QrImage } from 'qrlibrary';
import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

function App() {
  const [text, setText] = useState("Hello from react!");
  const debouncedSetText = useCallback(debounce(setText, 2000), []);

  return (
    <>
      <div>
        Generate a QR from text: 
        <br />
        <input type="text" placeholder="Hello from react!" onChange={e => debouncedSetText(e.target.value)} />
      </div>
      <div>
        <QrImage text={text} relativePath="../../" />
      </div>
    </>
  );
}

export default App;
