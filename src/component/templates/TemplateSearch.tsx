import { useState } from "react";
import "../../App.css";
// import bgDashboard from "./assets/hero banner.svg";
import { Pagination, type PaginationProps } from "antd";
import Navbar from "../organisms/Navbars";
import { MovieList } from "../organisms/MovieList";
import Spinner from "../atoms/Spinner";
import { Footer } from "../atoms/footer";
import { Filters } from "../organisms/Filter";
import { useParams } from "react-router-dom";
import type { dataDashboard } from "../../helper/interface";

interface dashboardDatas {
  dataPoster?: dataDashboard;
  data?: dataDashboard[];
  isLoading: boolean;
  categorys: string;
  setCurrent: (page: number) => void;
  current: number;
  totalPage: number;
}

export function SearchTemplate({
  data,
  isLoading,
  categorys,
  setCurrent,
  current,
  totalPage,
}: dashboardDatas) {
  const [checked] = useState(true);
  const { id } = useParams();
  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page);
  };

  return (
    <div className="bg-[#030a1b] text-white h-[100%] pt-25">
      {isLoading ? (
        <div>
          <Navbar checked={checked} classNames="my-4 fixed " />
          <div className="w-full h-[100vh] flex justify-center items-center">
            <Spinner />
          </div>
        </div>
      ) : (
        <>
          <div className="w-full flex justify-center">
            <Navbar checked={checked} classNames="my-4 fixed" />
          </div>
          <div className=" ml-4 pt-24 pb-6">
            <h1 className="border-b border-white text-[34px]">Search: {id}</h1>
          </div>
          <div className="flex items-stretch ">
            <div className="w-1/4 ml-4 ">
              <Filters />
            </div>
            <div className="w-3/4 mb-5">
              <MovieList category={categorys} data={data} />
              <Pagination
                className="custom-pagination mt-6"
                align="center"
                current={current}
                onChange={onChange}
                total={totalPage}
                pageSize={20}
                showSizeChanger={false}
              />
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
