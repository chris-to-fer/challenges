import { volumes } from "@/resources/lib/data";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Towers() {
  const book = volumes.find((e) => e.slug === "the-two-towers");
  const index = volumes.map((e, i) =>
    e.slug === "the-two-towers" ? volumes.indexOf(e) : -1
  );
  const indexHit = Math.max(...index);
  console.log("hit", indexHit);

  console.log(index);
  return (
    <>
      <Link href="./">← All Volumes</Link>
      <h1> {book.title}</h1>
      <p>{book.description}</p>
      <ul>
        {book.books.map((e, i) => (
          <li key={i}>
            {e.ordinal} - {e.title}
          </li>
        ))}
      </ul>
      {indexHit > 0 ? (
        <Link href={`/volumes/${volumes[indexHit - 1].slug}`}>Previous</Link>
      ) : (
        ""
      )}
      ---
      {indexHit > -1 ? (
        <Link href={`/volumes/${volumes[indexHit + 1].slug}`}>Next</Link>
      ) : (
        ""
      )}
      <br></br>
      <Image
        // src="/resources/public/images/the-return-of-the-king"
        src={`/${book.slug}.png`}
        height={230}
        width={140}
        alt={book.title}
      />
    </>
  );
}
