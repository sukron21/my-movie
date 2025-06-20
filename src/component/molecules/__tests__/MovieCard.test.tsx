import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MovieCard } from "../MovieCards"; // sesuaikan path jika perlu
import { MemoryRouter } from "react-router-dom";

const mockData = {
  id: "123",
  title: "Avengers",
  vote_average: 8.5,
  release_date: "2012-05-04",
  poster_path: "/avengers.jpg",
  overview: "A superhero movie about saving the world.",
  backdrop_path: "/backdrop.jpg",
};

describe("MovieCard", () => {
  it("renders movie title", () => {
    render(
      <MemoryRouter>
        <MovieCard data={mockData} />
      </MemoryRouter>
    );

    expect(screen.getByText("Avengers")).toBeInTheDocument();
  });

  it("renders release year", () => {
    render(
      <MemoryRouter>
        <MovieCard data={mockData} />
      </MemoryRouter>
    );

    expect(screen.getByText("(2012)")).toBeInTheDocument();
  });

  it("renders vote_average divided by 2", () => {
    render(
      <MemoryRouter>
        <MovieCard data={mockData} />
      </MemoryRouter>
    );

    expect(screen.getByText("4.3")).toBeInTheDocument();
  });

  it("passes correct params and bg to CardImage", () => {
    const { container } = render(
      <MemoryRouter>
        <MovieCard data={mockData} />
      </MemoryRouter>
    );

    const cardDiv = container.querySelector("div");
    expect(cardDiv?.style.backgroundImage).toContain("/avengers.jpg");
  });
});
