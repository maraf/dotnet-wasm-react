import { QrImage } from 'qrlibrary';
import { useState } from 'react';

function App() {
  const [text, setText] = useState("Hello from react!");

  return (
    <>
      <div>
        Generate a QR from text: 
        <br />
        <input type="text" placeholder="Hello from react!" onChange={e => setText(e.target.value)} />
      </div>
      <div>
        <QrImage text={text} />
      </div>
    </>
  );
}

export default App;
