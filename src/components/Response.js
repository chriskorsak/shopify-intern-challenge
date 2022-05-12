const Response = ({ prompt, response }) => {
  return (
    <li className="response">
      <div className="category">Prompt:</div>
      <p className="q-and-a">{prompt}</p>
      <div className="category">Response:</div>
      <p className="q-and-a">{response}</p>
    </li>
  );
};

export default Response;
