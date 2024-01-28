import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  const handleChange = jest.fn();
  render(
    <Input
      labelText="name of game"
      id="Fritz"
      name="Fritz"
      placeholder="Hi"
      type="text"
      value="testvalue"
      onChange={handleChange}
      required
    />
  );

  const input = screen.getByLabelText(/name of game/i);

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("placeholder", "Hi");
  expect(input).toHaveAttribute("name", "Fritz");
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("value", "testvalue");
  expect(input).toHaveAttribute("id", "Fritz");
  expect(input).toHaveAttribute("required");
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();
  const user = userEvent.setup();
  render(
    <Input
      labelText="name of game"
      id="Fritz"
      name="Fritz"
      placeholder="Hi"
      type="text"
      value="testvalue"
      onChange={handleChange}
      required
    />
  );
  const input = screen.getByLabelText(/name of game/i);

  await user.type(input, "cdf");

  expect(handleChange).toHaveBeenCalledTimes(3);
});
