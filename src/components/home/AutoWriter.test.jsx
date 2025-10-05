import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import AutoWriter from "./AutoWriter";

describe("AutoWriter", () => {
    it("should render without crashing", () => {
        render(<AutoWriter texts={["Test1", "Test2"]} className="test-class" />);
    });
})