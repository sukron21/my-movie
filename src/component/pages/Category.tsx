import { useEffect, useState } from "react";
import { movieService } from "../../services/movieServies";
import { useParams } from "react-router-dom";
import { CategoryTemplate } from "../templates/TemplateCategory";
import type { dataDashboard } from "../../helper/interface";

const Handlerapi = (categorys: string, page: number) => {
  switch (categorys) {
    case "Now Playing":
      return movieService.getNowPlayingMovies(page);
    case "Popular Film":
      return movieService.getPopularMovies(page);
    case "Top Rate":
      return movieService.getTopRaterMovies(page);
    case "Upcoming":
      return movieService.getUpCamingMovies(page);
    default:
      return movieService.getNowPlayingMovies(page);
  }
};

const categoryHandler = (id: string) => {
  switch (id) {
    case "now-playing":
      return "Now Playing";
    case "popular-film":
      return "Popular Film";
    case "top-rate":
      return "Top Rate";
    case "upcoming":
      return "Upcoming";
    default:
      return "Kategori Tidak Dikenal";
  }
};

export const Category = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isDataPoster, setIsDataPoster] = useState<dataDashboard>();
  const [isData, setIsData] = useState<dataDashboard[]>([]);
  const [current, setCurrent] = useState(1);
  const [total, setIstotal] = useState(0);
  const [newParams, setIsParams] = useState("");

  useEffect(() => {
    getDataData();
  }, [current, id]);

  const getDataData = async () => {
    try {
      setIsLoading(true);
      const params = categoryHandler(id ? id : "");
      let page = current;
      if (newParams != params) {
        page = 1;
      }
      const responsePopuler = await Handlerapi(params, page);
      console.log("responsePopuler", responsePopuler);

      if (newParams != params) {
        // const page = 1;
        setCurrent(page);
        setIsParams(params);
        if (page) {
          const datas = responsePopuler
            ? responsePopuler?.data?.results[0]
            : {};
          setIsDataPoster(datas);
        }
      }
      setIstotal(responsePopuler?.data?.total_results);
      setIsData(responsePopuler?.data?.results);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };
  return (
    <>
      <CategoryTemplate
        isLoading={isLoading}
        dataPoster={isDataPoster}
        data={isData}
        categorys={categoryHandler(id ? id : "")}
        setCurrent={setCurrent}
        current={current}
        totalPage={total}
      />
    </>
  );
};
