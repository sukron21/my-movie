import { useEffect, useState } from "react";
import { movieService } from "../../services/movieServies";
import { useParams } from "react-router-dom";
import { DetailTemplate } from "../templates/TemplateDetail";
import type { dataDashboard } from "../../helper/interface";

export const Details = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isDataPoster, setIsDataPoster] = useState<dataDashboard>();
  const [isData, setIsData] = useState<dataDashboard[]>([]);
  const [current, setCurrent] = useState(1);
  //   const [newParams, setIsParams] = useState("");

  useEffect(() => {
    getDataData();
  }, [current, id]);

  const getDataData = async () => {
    try {
      setIsLoading(true);
      const params = id ? parseInt(id.split("-")[0]) : 0;

      const responsePopuler = await movieService.getMovieById(params);
      console.log("responsePopuler", responsePopuler);
      const datas = responsePopuler ? responsePopuler?.data : {};
      setIsDataPoster(datas);
      setIsData(responsePopuler?.data);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };
  return (
    <>
      <DetailTemplate
        isLoading={isLoading}
        dataPoster={isDataPoster}
        data={isData}
        // categorys={categoryHandler(id ? id : "")}
        setCurrent={setCurrent}
        current={current}
      />
    </>
  );
};
