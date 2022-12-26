import { QrImage } from 'qrlibrary';
import { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

function App() {
  const [text, setText] = useState("Hello from react!");
  const debouncedSetText = useCallback(debounce(e => setText(e.target.value), 100), []);

  return (
    <>
      <h1>.NET on wasm in a react component</h1>
      <p>
        Generate a QR from text: 
        <br />
        <input type="text" placeholder="Hello from react!" onChange={debouncedSetText} />
      </p>
      <p>
        <QrImage text={text} />
      </p>
      <p>
        Code at <a href="https://github.com/maraf/dotnet-wasm-react">https://github.com/maraf/dotnet-wasm-react</a>
      </p>
      <p>
        QR code generated using <a href="https://github.com/codebude/QRCoder">https://github.com/codebude/QRCoder</a>
      </p>
    </>
  );
}

export default App;
