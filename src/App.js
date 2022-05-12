import { useEffect } from 'react';
import Form from './components/Form';
import Responses from './components/Responses';

function App() {
  useEffect(() => {
    const data = {
      prompt: 'should i take a nap and stop working for a while?',
      temperature: 0.5,
      max_tokens: 32,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    //function for making http post request to api
    const httpPost = async (url, data) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API}`,
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      return responseData;
    };
    //run function
    httpPost(
      'https://api.openai.com/v1/engines/text-curie-001/completions',
      data
    )
      .then(data => console.log(data.choices[0].text))
      .catch(error => console.log(error));
  }, []);

  return (
    <div id="app">
      <h1>Fun With AI</h1>
      <Form />
      <h2>Responses:</h2>
      <Responses />
    </div>
  );
}

export default App;
