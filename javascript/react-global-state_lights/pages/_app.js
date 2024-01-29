import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const startLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [light, setLight] = useState(startLights);
  console.log("light", light);

  function handleToggle(id) {
    setLight(light.map((e) => (e.id === id ? { ...e, isOn: !e.isOn } : e)));
  }
  function allOn() {
    setLight(
      light.map((e) => {
        return { ...e, isOn: true };
      })
    );
  }
  function allOff() {
    setLight(light.map((e) => ({ ...e, isOn: false })));
  }

  const lightsOn = light.filter((e) => e.isOn === true).length;
  let isDimmed = false;
  lightsOn < 1 ? (isDimmed = "true") : (isDimmed = "false");

  return (
    <Layout lightsOn={lightsOn} isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lightsOn={lightsOn}
        light={light}
        handleToggle={handleToggle}
        allOn={allOn}
        allOff={allOff}
      />
    </Layout>
  );
}
