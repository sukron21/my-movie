import { useState } from "react";
import "../../App.css";
// import bgDashboard from "./assets/hero banner.svg";
import { Button, Rate } from "antd";
import { ArrowRightOutlined, CaretRightOutlined } from "@ant-design/icons";
import { imageBaseUrl } from "../../helper/env";
import Navbar from "../organisms/Navbars";
import { MovieList } from "../organisms/MovieList";
import Spinner from "../atoms/Spinner";
import { Footer } from "../atoms/footer";

export type dataDashboard = {
  id: string;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
  release_date: string;
  backdrop_path: string;
};

interface dashboardDatas {
  dataPoster?: dataDashboard;
  dataNowPlaying?: dataDashboard[];
  dataNowTopRate?: dataDashboard[];
  dataNowUpComing?: dataDashboard[];
  dataPopuler?: dataDashboard[];
  isLoading: boolean;
}

export function DashBoards({
  dataPoster,
  dataNowPlaying,
  dataNowTopRate,
  dataNowUpComing,
  dataPopuler,
  isLoading,
}: dashboardDatas) {
  const [checked, isChecked] = useState(true);

  const bgDashboard = `${imageBaseUrl}${dataPoster?.backdrop_path}`;
  const year = dataPoster?.release_date?.split("-")[0];

  return (
    <div className="bg-[#030a1b] h-[100%]">
      {isLoading ? (
        <div>
          <Navbar checked={checked} isChecked={isChecked} classNames=" fixed" />
          <div className="w-full h-[100vh] flex justify-center items-center">
            <Spinner />
          </div>
        </div>
      ) : (
        <>
          <div className="w-full flex justify-center">
            <Navbar
              checked={checked}
              isChecked={isChecked}
              classNames=" fixed"
            />
            <div
              className="w-full h-[70vh] flex justify-center  bg-cover bg-center items-center text-white"
              style={{ backgroundImage: `url(${bgDashboard})` }}
            >
              <div className="absolute h-[70vh] inset-0 bg-black opacity-50 z-10"></div>

              <div className="absolute ml-[5vw] z-20 w-3/5 flex flex-col items-center drop-shadow-lg">
                <h1 className="text-[40px]">
                  {dataPoster?.title} ({year})
                </h1>
                <p className="text-[18px]">{dataPoster?.overview}</p>
                <div className="flex items-center">
                  <Rate
                    allowHalf
                    value={dataPoster ? dataPoster.vote_average / 2 : 0}
                    className="custom-rate"
                  />
                  <p className="text-[14px] px-4">
                    {dataPoster ? dataPoster.vote_average / 2 : 0}
                  </p>
                </div>
                <div className="flex gap-4 pt-4">
                  <Button
                    // className="bg-[#3c92fc] text-white border-none"
                    style={{
                      backgroundColor: "#3c92fc",
                      color: "white",
                      border: "none",
                      borderRadius: "20px",
                      height: "35px",
                    }}
                  >
                    <CaretRightOutlined />
                    Watch Movie
                  </Button>
                  <Button
                    // className="bg-[#030a1b] text-white border-none"
                    style={{
                      backgroundColor: "#030a1b",
                      color: "white",
                      borderColor: "#3c92fc",
                      borderRadius: "20px",
                      height: "35px",
                    }}
                  >
                    More Info <ArrowRightOutlined />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <MovieList
              category="Popular Film"
              data={dataPopuler}
              classNames="py-6"
            />
            <MovieList
              category="Now Playing"
              data={dataNowPlaying}
              classNames="py-6"
            />
            <MovieList
              category="Top Rate"
              data={dataNowTopRate}
              classNames="py-6"
            />
            <MovieList
              category="Upcoming"
              data={dataNowUpComing}
              classNames="py-6"
            />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
