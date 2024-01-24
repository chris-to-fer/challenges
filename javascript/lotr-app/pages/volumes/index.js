import Link from "next/link";
import React from "react";
import { introduction } from "@/resources/lib/data";
import { volumes } from "@/resources/lib/data";
console.log(volumes.map((e) => e.title));

export default function index() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map((e, i) => (
          <li key={i}>
            <Link href={`/volumes/${e.slug.toLowerCase()}`}>{e.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
