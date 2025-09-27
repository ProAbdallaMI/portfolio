import { describe, it } from "vitest";
import App from "./App";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("App rendering", () => {
  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
  });
});
