import useSWR from "swr";
import { SWRConfig } from "swr";

// const fetcher = async (url) => {
//   const res = await fetch(url);

//   // If the status code is not in the range 200-299,
//   // we still try to parse and throw it.
//   if (!res.ok) {
//     const error = new Error("An error occurred while fetching the data.");
//     // Attach extra info to the error object.
//     error.info = await res.json();
//     error.status = res.status;
//     throw error;
//   }

//   return res.json();
// };

export default function ProductsList() {
  const { data, error, isLoading } = useSWR(`/api/products/`);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;
  if (data) {
    console.log("data ", data);
  }
  if (!data) return null;
  return (
    <>
      <ul>
        {data.map((e) => (
          <li key={e.id}>
            Name:{e.name}
            <br></br>Category:{e.category}
            <br></br>Price:{e.price}
            {e.currency}
            <br></br>About:{e.description}
          </li>
        ))}
      </ul>
    </>
  );
}
