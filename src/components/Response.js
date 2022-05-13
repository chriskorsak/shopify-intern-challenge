import { FaTimes } from 'react-icons/fa';

const Response = ({ prompt, response, date, deleteResponse }) => {
  return (
    <li className="response">
      <div className="category">Prompt:</div>
      <p className="q-and-a">{prompt}</p>
      <button className="btn-delete" onClick={() => deleteResponse(date)}>
        <FaTimes />
      </button>
      <div className="category">Response:</div>
      <p className="q-and-a">{response}</p>
    </li>
  );
};

export default Response;
