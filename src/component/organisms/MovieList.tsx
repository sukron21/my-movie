import { ArrowRightOutlined } from "@ant-design/icons";
import { MovieCard } from "../molecules/MovieCards";
import type { dataDashboard } from "../templates/TemplateHome";
import { useNavigate, useParams } from "react-router-dom";

interface movieList {
  category: string;
  data: dataDashboard[] | undefined;
  classNames?: string;
}

const categoryHandler = (id: string) => {
  switch (id) {
    case "Now Playing":
      return "now-playing";
    case "Popular Film":
      return "popular-film";
    case "Top Rate":
      return "top-rate";
    case "Upcoming":
      return "upcoming";
    default:
      return "Kategori Tidak Dikenal";
  }
};

export const MovieList = ({
  data,
  category = "Now Playing",
  classNames,
}: movieList) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <section>
      <div
        className={`flex justify-between items-center text-white px-3 ${classNames}`}
      >
        {!id && (
          <>
            <h3 className="text-white text-2xl font-semibold text-center">
              {category}
            </h3>

            <p
              className="text-white text-lg text-center cursor-pointer"
              onClick={() => navigate(`/category/${categoryHandler(category)}`)}
            >
              Lihat Semua <ArrowRightOutlined />
            </p>
          </>
        )}
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4 px-5">
        {data && data.map((item, i) => <MovieCard data={item} key={i} />)}
      </div>
    </section>
  );
};
