import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

import Head from "next/head";

export default function Volumes() {
  const router = useRouter();
  console.log(router);

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const folder = router.pathname.replace(/[^a-zA-Z0-9]/g, "");

  return (
    <>
      <Head>
        <title>{folder}</title>
      </Head>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((e) => {
          return (
            <li key={e.slug}>
              <Link href={`${router.pathname}/${e.slug}`}>{e.title}</Link>
            </li>
          );
        })}
      </ul>
      <section key="random">
        <button
          onClick={() =>
            router.push(`${router.pathname}/${getRandomElement(volumes).slug}`)
          }
        >
          Random Title
        </button>
      </section>
    </>
  );
}
