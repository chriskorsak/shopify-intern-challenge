import Response from './Response';

const Responses = ({ savedResponses }) => {
  if (savedResponses.length < 1) return <p>No responses yet!</p>;
  return (
    <ul id="responses">
      {savedResponses.map(response => (
        <Response
          prompt={response.prompt}
          response={response.response}
          key={response.date}
        />
      ))}
    </ul>
  );
};

export default Responses;
