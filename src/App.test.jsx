import { describe, it } from "vitest";
import App from "./App";
import { render } from "@testing-library/react";

describe("App rendering", () => {
  it("renders correctly", () => {
    render(<App />);
  });
});
