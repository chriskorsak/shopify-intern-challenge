import Button from './Button';
import { useState } from 'react';
import fetchData from '../services/fetchData';

const Form = ({ saveResponse }) => {
  // button disabled state
  const [btnDisabled, setBtnDisabled] = useState(true);
  // error message state
  const [message, setMessage] = useState('');
  // user input from the text area box
  const [prompt, setPrompt] = useState('');

  // form validation
  const handleTextChange = input => {
    if (input === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (input.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Please type at least 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setPrompt(input);
  };

  const handleSubmit = e => {
    e.preventDefault();

    // data/settings for api
    const data = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    //send data to api for response
    fetchData(data)
      .then(data => {
        const response = data.choices[0].text;
        // save response to state
        const newResponse = {
          prompt: prompt,
          response: response,
          date: Date.now(),
        };
        saveResponse(newResponse);
      })
      .catch(error => console.log(error));

    // clear out textarea box, disable submit
    setPrompt('');
    setBtnDisabled(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="prompt">Enter Prompt:</label>
      <textarea
        name="prompt"
        id="prompt"
        onChange={({ target }) => handleTextChange(target.value)}
        value={prompt}
      ></textarea>
      <div className="flex">
        <Button type="submit" disabled={btnDisabled}>
          Send
        </Button>
        {message && <p className="error-message">{message}</p>}
      </div>
    </form>
  );
};

export default Form;
