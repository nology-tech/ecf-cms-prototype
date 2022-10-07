import { render, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import HeaderProfile from "./HeaderProfile";
import { ReactComponent as Profile } from "../../assets/profile-picture.svg";

it("Should render the HeaderProfile", () => {
  const { container } = customRender(<HeaderProfile profileImg={Profile} />);
  expect(container).toMatchSnapshot();
});

it("Should render the svg in the Header Profile", () => {
  render(<HeaderProfile profileImg={Profile} />);
  const svg = screen.getByAltText("user avatar");
  !expect(svg).toBeInTheDocument();
});

it("Should display the Name and Role in the HeaderProfile", () => {
  render(
    <HeaderProfile name="Brett Zieme" role="Admin" profileImg={Profile} />
  );
  const name = screen.getByText("Brett Zieme");
  const role = screen.getByText("Admin");

  expect(name).toBeInTheDocument();
  expect(role).toBeInTheDocument();
});

it("Should not display the alt text if the image is present", () => {
  render(<HeaderProfile profileImg={Profile} />);
  const svgAltText = screen.queryByText("user avatar");
  expect(svgAltText).toBeFalsy();
});
