import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function Character() {
  const router = useRouter();
  const id = router.query.id;
  console.log("id", id);
  const url = `https://swapi.dev/api/people/${id}`;

  const { data, error, isLoading, isValidating } = useSWR(url, fetcher);
  //if (isLoading) return <div>Loading ... </div>;
  //if (error) return <div />;
  if (!data) return <h2>Loading...</h2>;
  console.log("error swr", error);
  return (
    <>
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
