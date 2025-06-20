export type dataDashboard = {
  id: string;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  release_date: string;
  backdrop_path: string;
  genres?: {
    id?: number;
    name?: string;
  }[];
  runtime?: number;
  tagline?: string;
};
