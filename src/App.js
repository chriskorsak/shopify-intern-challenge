import { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Responses from './components/Responses';

function App() {
  const [savedResponses, setSavedResponses] = useState(
    localStorage.getItem('responses')
      ? JSON.parse(localStorage.getItem('responses'))
      : []
  );

  const saveResponse = newResponse => {
    setSavedResponses([newResponse, ...savedResponses]);
  };

  const deleteResponse = id => {
    if (window.confirm(`Are you sure you want to delete response?`)) {
      setSavedResponses(
        savedResponses.filter(response => response.date !== id)
      );
    }
  };

  useEffect(() => {
    localStorage.setItem('responses', JSON.stringify(savedResponses));
  }, [savedResponses]);

  return (
    <div id="app">
      <Header />
      <Form saveResponse={saveResponse} />
      <h2>Responses:</h2>
      <Responses
        savedResponses={savedResponses}
        deleteResponse={deleteResponse}
      />
    </div>
  );
}

export default App;
