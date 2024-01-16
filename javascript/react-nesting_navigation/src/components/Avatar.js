import Image from "./Image";

export default function Avatar({ src, alt }) {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image src={src} alt={alt} />
      {/* <img className="round-image" src={avatar} alt="avatar" /> */}
    </button>
  );
}
