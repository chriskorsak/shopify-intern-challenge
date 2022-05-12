import Button from './Button';
import { useState } from 'react';

const Form = ({ handleNewPrompt }) => {
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [prompt, setPrompt] = useState('');
  const [message, setMessage] = useState('');

  const handleTextChange = input => {
    //form validation
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
    //create new prompt object
    const newPrompt = {
      prompt: prompt,
      date: Date.now(),
    };
    handleNewPrompt(newPrompt);
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
      <Button type="submit" disabled={btnDisabled}>
        Send
      </Button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Form;
