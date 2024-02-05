import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug ", slug);

  const volumeIndex = volumes.findIndex((e) => e.slug === slug);

  const volume = volumes[volumeIndex];

  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;
  console.log("title ", title);
  return (
    <>
      <Head>
        <title>{volume.title}</title>
      </Head>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books?.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
