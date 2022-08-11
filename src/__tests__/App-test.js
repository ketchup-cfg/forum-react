import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("Topics button can be found", async () => {
  render(<App />);

  expect(screen.getByText("Topics")).toBeInTheDocument();
});

test("Topic sidebar is not shown by default", async () => {
  render(<App />);

  expect(screen.queryByText("Create New Topic")).not.toBeInTheDocument();
});
