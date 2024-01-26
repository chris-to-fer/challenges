import { volumes } from "@/resources/lib/data";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Fellowship() {
  const router = useRouter();
  const { slug } = router.query;
  //better findIndex
  console.log(volumes.find((e) => e.slug === slug)?.slug);
  const bookIndex = volumes.findIndex((e) => e.slug === slug);
  const book = volumes[bookIndex];
  const index = volumes.map((e, i) =>
    e.slug === book?.slug ? volumes.indexOf(e) : -1
  );
  const indexHit = Math.max(...index);
  console.log("hit", indexHit);

  console.log(index);
  return (
    <>
      <Link href="./">← All Volumes</Link>
      <h1> {book?.title}</h1>
      <p>{book?.description}</p>
      <ul>
        {book?.books?.map((e, i) => (
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
        src={`${book.cover}`}
        height={230}
        width={140}
        alt={book?.title}
      />
    </>
  );
}
