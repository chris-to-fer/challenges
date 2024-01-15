import "./styles.css";

export default function App() {
  return <Greeting name="Marcell" />;
}
function Greeting({ name }) {
  if (name === "Marcell") {
    return <h1>Hello Coach !</h1>;
  }
  return <h1>Hello {name} !</h1>;
}

/*
### Create a Component with props






Update your `Greeting` component to show "Hello, Coach!" if the `name` prop is equal to one of your coaches.

*/
