import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ImageBg } from "../imageBackground"; // Ganti path sesuai strukturmu

describe("ImageBg component", () => {
  it("renders children correctly", () => {
    render(
      <ImageBg>
        <p>Dashboard Title</p>
      </ImageBg>
    );
    expect(screen.getByText("Dashboard Title")).toBeInTheDocument();
  });

  it("applies backgroundImage from bgDashboard prop", () => {
    const { container } = render(
      <ImageBg bgDashboard="/img/banner.jpg">
        <p>Test</p>
      </ImageBg>
    );
    const wrapperDiv = container.firstChild as HTMLElement;
    expect(wrapperDiv.style.backgroundImage).toContain("/img/banner.jpg");
  });

  it("applies classNames to outer wrapper", () => {
    const { container } = render(
      <ImageBg classNames="bg-red-500">
        <p>Test</p>
      </ImageBg>
    );
    const wrapperDiv = container.firstChild as HTMLElement;
    expect(wrapperDiv.className).toContain("bg-red-500");
  });

  it("applies classNameOpacity to overlay div", () => {
    const { getByTestId } = render(
      <ImageBg classNameOpacity="!opacity-80">
        <p>Test</p>
      </ImageBg>
    );

    const overlayDiv = getByTestId("overlay");
    expect(overlayDiv?.className).toContain("!opacity-80");
  });
});
