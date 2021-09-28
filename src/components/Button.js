import '../styles/buttons.css';

function Button(props) {
  return (
    <button className={`btn ${props.colorClass}`}>
      {props.children}
    </button>
  );
}

export default Button;
