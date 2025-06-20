import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Searching } from "../Search"; // path disesuaikan
import { vi } from "vitest";

vi.mock("../../../services/movieServies", () => ({
  movieService: {
    searchMovies: vi.fn().mockResolvedValue({
      data: {
        results: [{ id: 1, title: "Mock Movie" }],
        total_results: 1,
      },
    }),
  },
}));

test("renders movies from search service", async () => {
  render(
    <MemoryRouter initialEntries={["/search/popular-film"]}>
      <Routes>
        <Route path="/search/:id" element={<Searching />} />
      </Routes>
    </MemoryRouter>
  );

  // Cek loading dulu
  expect(screen.getByTestId("loading")).toBeInTheDocument();

  // Tunggu hasil muncul
  await waitFor(() => {
    expect(screen.getByText("Mock Movie")).toBeInTheDocument();
  });
});
