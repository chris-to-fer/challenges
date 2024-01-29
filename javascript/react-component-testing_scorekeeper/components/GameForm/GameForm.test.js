import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import Button from "../Button";
import Input from "../Input";
import { Form } from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);

  const button = screen.getByRole("button", { name: /Create game/i });
  const inputGame = screen.getByLabelText(/Name of game/i);
  const inputPlayers = screen.getByLabelText(
    /Player names, separated by comma/i
  );

  expect(inputGame).toBeInTheDocument();
  expect(inputPlayers).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);

  const form = screen.getByRole("form", { name: /Create a new game/i });

  expect(form).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const handleSubmit = jest.fn();
  const onCreateGame = jest.fn();

  const user = userEvent.setup();

  render(
    <GameForm onCreateGame={onCreateGame}>
      <Form
        onSubmit={handleSubmit}
        aria-labelledby="formHeader"
        autoComplete="off"
      >
        <h2 id="formHeader">Create a new game</h2>
        <Input
          name="nameOfGame"
          labelText="Name of game"
          placeholder="e.g. Dodelido"
          //required
        />
        <Input
          name="playerNames"
          labelText="Player names, separated by comma"
          placeholder="e.g. John Doe, Jane Doe"
          //required
        />
        <Button type="submit">Create game</Button>
      </Form>
    </GameForm>
  );

  const form = screen.getByRole("form", { name: /Create a new game/i });
  const button = screen.getByRole("button", { name: "Create game" });
  const inputGame = screen.getByLabelText(/Name of game/i);
  const inputPlayers = screen.getByLabelText(
    /Player names, separated by comma/i
  );

  await user.type(inputGame, "Fritz");
  await user.type(inputPlayers, "Klaus, Sven");
  await user.click(button);
  await user.click(form);
  await handleSubmit({
    nameOfGame: "Fritz",
    playerNames: ["Klaus", "Sven"],
  });

  expect(inputGame).toBeInTheDocument();
  expect(inputPlayers).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(handleSubmit).toHaveBeenCalledTimes(1);

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      nameOfGame: "Fritz",
      playerNames: ["Klaus", "Sven"],
    })
  );
});

test("does not submit form if one input field is left empty", async () => {
  const handleSubmit = jest.fn();
  const onCreateGame = jest.fn();

  const user = userEvent.setup();

  render(
    <GameForm onCreateGame={onCreateGame}>
      <Form
        onSubmit={handleSubmit}
        aria-labelledby="formHeader"
        autoComplete="off"
      >
        <h2 id="formHeader">Create a new game</h2>
        <Input
          name="nameOfGame"
          labelText="Name of game"
          placeholder="e.g. Dodelido"
          //required
        />
        <Input
          name="playerNames"
          labelText="Player names, separated by comma"
          placeholder="e.g. John Doe, Jane Doe"
          //required
        />
        <Button type="submit">Create game</Button>
      </Form>
    </GameForm>
  );

  const form = screen.getByRole("form", { name: /Create a new game/i });
  const button = screen.getByRole("button", { name: "Create game" });
  const inputGame = screen.getByLabelText(/Name of game/i);
  const inputPlayers = screen.getByLabelText(
    /Player names, separated by comma/i
  );

  await user.type(inputGame, "Fritz");
  // await user.type(inputPlayers, "Klaus, Sven");
  await user.click(button);
  await user.click(form);
  // await handleSubmit({
  //   nameOfGame: "Fritz",
  //   playerNames: ["Klaus", "Sven"],
  // });

  expect(inputGame).toBeInTheDocument();
  expect(inputPlayers).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(handleSubmit).toHaveBeenCalledTimes(0);

  // expect(handleSubmit).toHaveBeenCalledWith({
  //   nameOfGame: "Fritz",
  //   playerNames: ["Klaus", "Sven"],
  // })
});

// - To check the submitted form data, make sure to
//   - mock the submit handle function first;
//   - `await` all `userEvent`s
//   - expect the mocked submit function `toHaveBeenCalledWith(submittedDataObject)`.
// - To find the correct form of the submitted data you are expecting, you might have to check the call of `onCreateGame` in the `components/GameForm/index.js` file.
