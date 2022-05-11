import Button from './Button';

const Form = () => {
  return (
    <form>
      <label for="prompt">Enter Prompt:</label>
      <textarea name="prompt" id="prompt" cols="30" rows="10"></textarea>
      <Button type="submit" disabled={false}>
        Send
      </Button>
    </form>
  );
};

export default Form;
