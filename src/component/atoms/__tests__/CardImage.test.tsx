import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { CardImage } from "../cards";
import { MemoryRouter } from "react-router-dom";

// 1. Mock useNavigate
const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual: any = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate, // ← pakai mockNavigate di sini
  };
});

// 2. Reset mock sebelum setiap test
beforeEach(() => {
  mockNavigate.mockClear();
});

describe("CardImage", () => {
  it("renders children inside card", () => {
    render(
      <MemoryRouter>
        <CardImage type="list">
          <p>Movie Title</p>
        </CardImage>
      </MemoryRouter>
    );

    expect(screen.getByText("Movie Title")).toBeInTheDocument();
  });

  it("applies background image if bg is provided", () => {
    const { container } = render(
      <MemoryRouter>
        <CardImage type="list" bg="/poster.jpg">
          <div>Test</div>
        </CardImage>
      </MemoryRouter>
    );

    const div = container.firstChild as HTMLElement;
    expect(div.style.backgroundImage).toContain("/poster.jpg");
  });

  it("navigates to detail page on click if type is 'list'", () => {
    render(
      <MemoryRouter>
        <CardImage type="list" params="123">
          <p>Test</p>
        </CardImage>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("Test"));
    expect(mockNavigate).toHaveBeenCalledWith("/detail/123");
  });
});
