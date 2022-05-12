const Header = () => {
  return (
    <header>
      <h1>Fun With AI</h1>
      <p className="explanation">
        Ask a question, translate a phrase, generate a review, generate a sweet
        or mean tweet, and more! This app uses the{' '}
        <a
          href="https://beta.openai.com/examples"
          target="_blank"
          rel="noreferrer"
        >
          OpenAI API
        </a>{' '}
        to generate responses.
      </p>
    </header>
  );
};

export default Header;
