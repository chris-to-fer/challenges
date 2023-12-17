console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--

  for (let i = 1; i <= 5; i++) {
    const image = document.createElement("img");
    if (filledStars >= i) {
      image.src = "assets/star-filled.svg";
      // starContainer.append(image);
    } else {
      image.src = "assets/star-empty.svg";
    }
    image.addEventListener("click", () => {
      renderStars(i);
    });
    starContainer.append(image);
  }
}
//--^-- your code here --^--

renderStars();
