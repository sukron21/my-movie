import { StarFilled } from "@ant-design/icons";
import type { dataDashboard } from "../../helper/interface";
import { CardImage } from "../atoms/cards";

interface cardMovies {
  data: dataDashboard;
}
export function MovieCard({ data }: cardMovies) {
  return (
    <CardImage
      bg={data?.poster_path}
      type="list"
      params={`${data.id}-${data.title}`}
    >
      <div className="w-1/3 h-[30px] bg-[#1A1919] bg-opacity-50 flex justify-center items-center px-2 py-2">
        <StarFilled className="text-yellow-600" />
        <p className="text-white pl-2">
          {data ? (data?.vote_average / 2).toFixed(1) : 0}
        </p>
      </div>
      <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-3">
        <h2 className="text-white text-xl font-bold text-center">
          {data?.title}
        </h2>
        <p className="text-white text-md font-bold text-center">
          ({data?.release_date?.split("-")[0]})
        </p>
      </div>
    </CardImage>
  );
}
