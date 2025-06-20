import { useState } from "react";
import "../../App.css";

import Navbar from "../organisms/Navbars";
import Spinner from "../atoms/Spinner";
import { Footer } from "../atoms/footer";
import type { dataDashboard } from "../../helper/interface";
import { imageBaseUrl } from "../../helper/env";
import { ImageBg } from "../atoms/imageBackground";
import { CardImage } from "../atoms/cards";
import dayjs from "dayjs";
import { Rate } from "antd";

interface dashboardDatas {
  dataPoster?: dataDashboard;
  data?: dataDashboard[];
  isLoading: boolean;
  categorys?: string;
  setCurrent: any;
  current: number;
}

export function DetailTemplate({ dataPoster, isLoading }: dashboardDatas) {
  const [checked] = useState(true);
  const bgDashboard = `${imageBaseUrl}${dataPoster?.backdrop_path}`;
  const bgCardMovie = `${imageBaseUrl}${dataPoster?.poster_path}`;
  console.log();

  return (
    <div className="bg-[#030a1b] h-[100%]">
      {isLoading ? (
        <div>
          <Navbar
            checked={checked}
            // isChecked={isChecked}
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
              // isChecked={isChecked}
              classNames="my-4 fixed"
            />
            <ImageBg
              bgDashboard={bgDashboard}
              classNames="!h-[100vh]  pt-10"
              classNameOpacity="!h-[100vh]"
            >
              <div className="flex gap-8 px-6 mt-16  z-20">
                <CardImage
                  bg={bgCardMovie}
                  type="detail"
                  classNames="!w-1/4 !h-[70vh] z-20"
                >
                  <div></div>
                </CardImage>
                <div className="text-white z-20 w-3/4">
                  <h1 className="text-[34px] font-bold">
                    {dataPoster?.title} (
                    {dataPoster?.release_date?.split("-")[0]})
                  </h1>
                  <div className="text-white  z-20">
                    <span className="text-[20px]">
                      {dataPoster?.release_date
                        ? dayjs(dataPoster?.release_date).format("DD/MMMM/YYYY")
                        : ""}{" "}
                      (ID)
                    </span>
                    <span className="text-[20px] px-4">
                      •{" "}
                      {dataPoster?.genres &&
                        dataPoster?.genres.map((item) => item.name).join(", ")}
                    </span>
                    <span className="text-[20px] ">
                      •{" "}
                      {Math.floor(
                        dataPoster?.runtime ? dataPoster?.runtime / 60 : 0
                      )}{" "}
                      jam {dataPoster?.runtime ? dataPoster?.runtime % 60 : 0}{" "}
                      menit
                    </span>
                  </div>
                  <div className="flex items-center mt-3">
                    <Rate
                      allowHalf
                      value={dataPoster ? dataPoster.vote_average / 2 : 0}
                      className="custom-rate"
                    />
                    <p className="text-[14px] px-4">
                      {dataPoster
                        ? (dataPoster.vote_average / 2).toFixed(1)
                        : 0}
                    </p>
                  </div>
                  <p className="text-[24px] text-[#aea5a4] mt-3 italic">
                    {dataPoster?.tagline}
                  </p>
                  <p className="text-[28px] mt-3 font-semibold">Overview</p>
                  <p className="text-[20px] mt-2 ">{dataPoster?.overview}</p>
                </div>
              </div>
            </ImageBg>
          </div>
          <Footer className="!mt-0" />
        </>
      )}
    </div>
  );
}
