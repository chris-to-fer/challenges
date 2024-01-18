export default function Form({ onHandleCreateUser }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements.email.value);
    onHandleCreateUser(
      event.target.elements.name.value,
      event.target.elements.email.value
    );

    document.querySelector("form").reset();
    document.getElementById("name").focus();
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
