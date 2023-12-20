console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((element) => {
  return element.id === "2";
});
console.log(onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((element) => {
  return element.tags.length === 3;
});
console.log(allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter((element) => {
  return !element.isBookmarked;
});
console.log(allCardsThatAreNotBookmarked);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((e) => {
  return e.isBookmarked && (e.tags.includes("js") || e.tags.includes("html"));
});

console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
