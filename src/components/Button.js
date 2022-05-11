const Button = ({ children, type, disabled }) => {
  return (
    <button disabled={disabled} type={type} className={'btn'}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
};

export default Button;
