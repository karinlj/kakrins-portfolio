import { render, screen } from "@testing-library/react";
import ToggleBtn from "./ToggleBtn";

describe("ToggleBtn component", () => {
  it("Render component", () => {
    // const { getByTestId } = render(<ToggleBtn toggleMenu mobileOpen={true} />);
    // const comp = getByTestId("toggleBtn");
    // expect(comp).toBeTruthy();
    render(<ToggleBtn toggleMenu mobileOpen={true} />);
    screen.getByRole("");
  });
});
