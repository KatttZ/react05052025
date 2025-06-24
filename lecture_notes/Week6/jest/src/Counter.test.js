import Counter from "./Counter";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Counter Component", () => {
  //   it("counter displays correct initial count", () => {
  //     const { getByTestId } = render(<Counter initialCount={0} />);
  //     const countValue = Number(getByTestId("count").textContent);
  //     expect(countValue).toEqual(0);
  //   }); trigger linter alert, Avoid destructuring queries from render

  it("counter displays correct initial count", () => {
    render(<Counter initialCount={0} />);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("counter should increment by 1", () => {
    render(<Counter initialCount={0} />);
    const incrementBtn = screen.getByRole("button", { name: "Increment" });
    fireEvent.click(incrementBtn);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });

  it("counter should decrement by 1", () => {
    render(<Counter initialCount={0} />);
    const decrementBtn = screen.getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementBtn);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(-1);
  });

  it("counter should reset to 0", () => {
    render(<Counter initialCount={50} />);
    const restartBtn = screen.getByRole("button", { name: "Restart" });
    fireEvent.click(restartBtn);
    const countValue = Number(screen.getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  
  it("count should invert signs if the switch signs button is clicked", () => {
    render(<Counter initialCount={50} />);
    const switchBtn = screen.getByRole("button", { name: "Switch Signs" });
    expect(Number(screen.getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(switchBtn);
    expect(Number(screen.getByTestId("count").textContent)).toEqual(-50);
  });
});
