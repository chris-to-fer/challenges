console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newPost = document.createElement("section");
newPost.classList.add("post");
document.body.append(newPost);

const text = document.createElement("p");
text.classList.add("post__content");
newPost.append(text);
text.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const foot = document.createElement("footer");
foot.classList.add("post__footer");
newPost.append(foot);

const user = document.createElement("span");
user.classList.add("post__username");
foot.append(user);
user.innerHTML = "@whatever";

const likeB = document.createElement("button");
likeB.classList.add("post__button");
foot.append(likeB);
likeB.innerHTML = "♥ Like";

likeB.addEventListener("click", handleLikeButtonClick);
