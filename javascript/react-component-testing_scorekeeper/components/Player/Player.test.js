import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  const decreasePlayerScore = jest.fn();
  const increasePlayerScore = jest.fn();
  render(
    <Player
      name="Fritz"
      score="5"
      onDecreasePlayerScore={decreasePlayerScore}
      onIncreasePlayerScore={increasePlayerScore}
    />
  );
  const buttons = screen.getAllByRole("button", {
    name: / score/i,
  });
  const player = screen.getByText(/fritz/i);
  expect(buttons).toHaveLength(2);
  expect(player).toBeInTheDocument();
});

test("calls callbacks when increasing or decreasing score", async () => {
  const decreasePlayerScore = jest.fn();
  const increasePlayerScore = jest.fn();
  const user = userEvent.setup();

  render(
    <Player
      name="Fritz"
      score="5"
      onDecreasePlayerScore={decreasePlayerScore}
      onIncreasePlayerScore={increasePlayerScore}
    />
  );
  const buttonI = screen.getByRole("button", {
    name: /increase score/i,
  });
  const buttonD = screen.getByRole("button", {
    name: /decrease score/i,
  });

  await user.click(buttonI);
  await user.click(buttonD);
  await user.click(buttonD);
  expect(decreasePlayerScore).toHaveBeenCalledTimes(2);
  expect(increasePlayerScore).toHaveBeenCalledTimes(1);
});
