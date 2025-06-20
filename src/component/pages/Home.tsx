import { useEffect, useState } from "react";
import { DashBoards, type dataDashboard } from "../templates/TemplateHome";
import { movieService } from "../../services/movieServies";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDataPoster, setIsDataPoster] = useState<dataDashboard>();
  const [isDataPopuler, setIsDataPopuler] = useState<dataDashboard[]>([]);
  const [isDataNowPlaying, setIsDataNowPlaying] = useState<dataDashboard[]>([]);
  const [isDataTopRate, setIsDataTopRate] = useState<dataDashboard[]>([]);
  const [isDataUpComing, setIsDataUpComing] = useState<dataDashboard[]>([]);
  const page = 1;

  useEffect(() => {
    getDataPopuler();
  }, []);

  const getDataPopuler = async () => {
    try {
      setIsLoading(true);
      const responsePopuler = await movieService.getPopularMovies(page);
      const responseNowPlying = await movieService.getNowPlayingMovies(page);
      const responseTopRate = await movieService.getTopRaterMovies(page);
      const responseUpComing = await movieService.getUpCamingMovies(page);
      setIsDataPopuler(responsePopuler?.data?.results?.slice(0, 10));
      setIsDataNowPlaying(responseNowPlying?.data.results?.slice(0, 10));
      setIsDataTopRate(responseTopRate?.data?.results?.slice(0, 10));
      setIsDataUpComing(responseUpComing?.data?.results?.slice(0, 10));
      setIsDataPoster(responsePopuler?.data?.results[0]);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };
  return (
    <>
      <DashBoards
        isLoading={isLoading}
        dataPoster={isDataPoster}
        dataNowPlaying={isDataNowPlaying}
        dataNowTopRate={isDataTopRate}
        dataNowUpComing={isDataUpComing}
        dataPopuler={isDataPopuler}
      />
    </>
  );
};
