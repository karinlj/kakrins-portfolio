import { render } from "@testing-library/react";
import SocialIcons from "./SocialIcons";

describe("SocialIcons component", () => {
  //getByTestId
  it("Render SocialIcons", () => {
    const { getByTestId } = render(<SocialIcons />);
    const comp = getByTestId("socialMedia");
    expect(comp).toBeTruthy();
  });

  it("Render span", () => {
    const { getByTestId } = render(<SocialIcons footerLocation={true} />);
    const element = getByTestId("textSpan");
    expect(element).toBeTruthy();
  });

  //queryByTestId
  it("Not render span", () => {
    const { queryByTestId } = render(<SocialIcons footerLocation={false} />);
    const element = queryByTestId("textSpan");
    expect(element).toBeFalsy();
  });
});
