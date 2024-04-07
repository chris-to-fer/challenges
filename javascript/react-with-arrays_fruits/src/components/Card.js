import "./Card.css";

export default function Card({ name, color }) {
  return (
    // <p className="card" style={{ backgroundColor: `${color}` }}>
    <p className={`card card--${color}`}>{name}</p>
  );
}
