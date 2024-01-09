console.clear();

const url = "https://swapi.dev/api/peoplepppp";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      console.log(data.results[2].eye_color);
    } else {
      console.error("Moin");
    }
  } catch {
    console.log("Caught an error");
  }
}

fetchData();
