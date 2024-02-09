import { useRouter } from "next/router";
import useSWR from "swr";

import React from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function Details() {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  const url = `/api/products/${id}`;
  console.log(url);
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) {
    return null;
  }
  console.log("data", data);
  return (
    <ul>
      <li>
        Name:{data.name}
        <br></br>Category:{data.category}
        <br></br>Price:{data.price}
        {data.currency}
        <br></br>About:{data.description}
      </li>
    </ul>
  );
}
