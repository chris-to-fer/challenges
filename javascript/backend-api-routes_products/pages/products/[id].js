import { useRouter } from "next/router";
import useSWR from "swr";

import React from "react";

export default function Details() {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  const url = `/api/products/${id}`;
  console.log(url);

  const { data, error, isLoading } = useSWR(url);
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
