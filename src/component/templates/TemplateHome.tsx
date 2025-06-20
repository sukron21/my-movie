import { useState } from "react";
import "../../App.css";
import Navbar from "../organisms/Navbars";
import { MovieList } from "../organisms/MovieList";
import Spinner from "../atoms/Spinner";
import { Footer } from "../atoms/footer";
import type { dataDashboard } from "../../helper/interface";
import { Banner } from "../organisms/Banner";

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

  return (
    <div className="bg-[#030a1b] h-[100%]">
      {isLoading ? (
        <div>
          <Navbar
            checked={checked}
            isChecked={isChecked}
            classNames="my-4 fixed"
          />
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
              classNames="my-4 fixed"
            />
            <Banner dataPoster={dataPoster} />
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
