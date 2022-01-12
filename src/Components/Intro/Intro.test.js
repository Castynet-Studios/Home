import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Intro from "./Intro";

test("renders learn react link", () => {
  render(<Intro />);
  const Wrapper = screen.getByTestId("wrapper");
  const Nav = screen.getByTestId("nav");

  expect(Wrapper).toBeInTheDocument();
  expect(Wrapper).toBeVisible();

  expect(Nav).toBeInTheDocument();
  expect(Nav).toBeVisible();
});
