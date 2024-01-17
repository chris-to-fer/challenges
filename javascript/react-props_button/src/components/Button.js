export default function Button({ color, disabled, text, onClick, size, name }) {
  return (
    <div>
      <button
        style={{ backgroundColor: color, fontSize: size }}
        disabled={disabled}
        onClick={onClick(name)}
      >
        {text}
      </button>
    </div>
  );
}
