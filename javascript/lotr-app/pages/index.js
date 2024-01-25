import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Find here a link to the LOTR stuff:</h1>
      <h2>
        <Link href="/volumes" alt="lotr links">
          All 3 Titles
        </Link>
      </h2>
    </>
  );
}
