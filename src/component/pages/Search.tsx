import { useEffect, useState } from "react";
import { movieService } from "../../services/movieServies";
import { useParams } from "react-router-dom";
import { SearchTemplate } from "../templates/TemplateSearch";
import type { dataDashboard } from "../../helper/interface";

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

export const Searching = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
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
      const params = id ? id : "";
      const responsePopuler = await movieService.searchMovies(current, params);
      console.log("newParams", newParams != params);
      if (newParams != params) {
        setIsParams(params);
        setCurrent(1);
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
      <SearchTemplate
        isLoading={isLoading}
        data={isData}
        categorys={categoryHandler(id ? id : "")}
        setCurrent={setCurrent}
        current={current}
        totalPage={total}
      />
    </>
  );
};
