import { useState } from 'react';
import Form from './components/Form';
import Responses from './components/Responses';

function App() {
  const [savedResponses, setSavedResponses] = useState([]);

  const saveResponse = newResponse => {
    setSavedResponses([newResponse, ...savedResponses]);
  };
  console.log(savedResponses);

  return (
    <div id="app">
      <h1>Fun With AI</h1>
      <Form saveResponse={saveResponse} />
      <h2>Responses:</h2>
      <Responses />
    </div>
  );
}

export default App;
