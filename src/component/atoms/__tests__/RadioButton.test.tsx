// Pindahkan ke atas file (import biasa)
import RadioButtonAntd from "../radioButton"; // ini boleh karena tidak mocking useParams
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual: any = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useParams: () => ({ id: "" }), // default id kosong
  };
});

beforeEach(() => {
  mockNavigate.mockClear();
});

describe("RadioButtonAntd", () => {
  const radioData = [
    { value: "action", label: "Action" },
    { value: "drama", label: "Drama" },
  ];

  it("renders radio buttons from data", () => {
    render(
      <MemoryRouter>
        <RadioButtonAntd data={radioData} />
      </MemoryRouter>
    );

    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Drama")).toBeInTheDocument();
  });

  it("changes value and navigates when radio is selected", () => {
    render(
      <MemoryRouter>
        <RadioButtonAntd data={radioData} />
      </MemoryRouter>
    );

    const actionRadio = screen.getByLabelText("Action");
    fireEvent.click(actionRadio);

    expect(mockNavigate).toHaveBeenCalledWith("/category/action");
  });
});
