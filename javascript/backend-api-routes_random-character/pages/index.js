import useSWR from "swr";
const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return null;
  console.log(data);
  return (
    <>
      <h1>Name: {data.firstName}</h1>
      <h2>Lastname:{data.lastName}</h2>
      <h1>Twitter: {data.twitter}</h1>
      <h2>Geo:{data.geo}</h2>
    </>
  );
}
