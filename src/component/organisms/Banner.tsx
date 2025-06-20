import { ArrowRightOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Button, Rate } from "antd";
import { ImageBg } from "../atoms/imageBackground";
import { imageBaseUrl } from "../../helper/env";
import type { dataDashboard } from "../../helper/interface";

interface dashboardDatas {
  dataPoster?: dataDashboard;
}
export const Banner = ({ dataPoster }: dashboardDatas) => {
  const bgDashboard = `${imageBaseUrl}${dataPoster?.backdrop_path}`;
  const year = dataPoster?.release_date?.split("-")[0];
  return (
    <>
      <ImageBg
        bgDashboard={bgDashboard}
        classNames="flex justify-center items-center"
      >
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
              {dataPoster ? (dataPoster.vote_average / 2).toFixed(1) : 0}
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
        {/* </div> */}
      </ImageBg>
    </>
  );
};
