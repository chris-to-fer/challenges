import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Image from "./components/Image";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";

export default function App() {
  return (
    <>
      <Header>
        <Logo href="#" src={logo} alt="logo" />

        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar src={avatar} alt="avatar" />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
