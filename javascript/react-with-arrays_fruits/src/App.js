import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍎 Apple",
      color: "red",
    },
    {
      id: 1339,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 1340,
      name: "🍋 lemon",
      color: "yellow",
    },
    {
      id: 1341,
      name: "🥥 Coconut",
      color: "brown",
    },
  ];

  return (
    <div className="app">
      {fruits.map((e) => (
        <Card name={e.name} key={e.id} color={e.color} />
      ))}
    </div>
  );
}
