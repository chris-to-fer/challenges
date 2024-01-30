import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const id = router.query.id;
  console.log(router);
  const url = `https://swapi.dev/api/people/${id}`;

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
  const { data, error, isLoading, isValidating } = useSWR(url, fetcher);

  if (!isLoading) {
    console.log(data.name);
    console.log(error);
  }
  if (!isLoading) {
    return (
      <>
        <div>{isLoading ? "loading..." : ""}</div>
        <Layout>
          <Card
            id={id}
            name={data.name}
            height={data.height}
            eyeColor={data.eye_color}
            birthYear={data.birth_year}
          />
        </Layout>
      </>
    );
  }
}
