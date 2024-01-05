import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value;

  const foundCountry = null;
  //countries.find((c) => c.name.startsWith(searchString));

  const foundCountries = countries.filter((c) =>
    c.name.startsWith(searchString)
  );

  console.log(foundCountry);

  if (foundCountry) {
    const countryElement = Country(foundCountry);
    container.append(countryElement);
  }

  if (foundCountries) {
    foundCountries.forEach((e) => {
      const countryElement = Country(e);
      container.append(countryElement);
    });
  }
});
