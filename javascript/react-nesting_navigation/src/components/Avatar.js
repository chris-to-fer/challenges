import Image from "./Image";

export default function Avatar({ src, alt, clickText }) {
  function onClickAvatar() {
    return () => console.log(clickText);
  }
  return (
    <button
      type="button"
      onClick={onClickAvatar(clickText)}
      aria-label="toggle profile"
    >
      <Image src={src} alt={alt} />
      {/* <img className="round-image" src={avatar} alt="avatar" /> */}
    </button>
  );
}
