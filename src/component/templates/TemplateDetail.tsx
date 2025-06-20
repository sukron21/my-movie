import { useState } from "react";
import "../../App.css";

import Navbar from "../organisms/Navbars";
import Spinner from "../atoms/Spinner";
import { Footer } from "../atoms/footer";
import type { dataDashboard } from "../../helper/interface";
import { imageBaseUrl } from "../../helper/env";
import { ImageBg } from "../atoms/imageBackground";

interface dashboardDatas {
  dataPoster?: dataDashboard;
  data?: dataDashboard[];
  isLoading: boolean;
  categorys?: string;
  setCurrent: any;
  current: number;
}

export function DetailTemplate({ dataPoster, isLoading }: dashboardDatas) {
  const [checked, isChecked] = useState(true);
  const bgDashboard = `${imageBaseUrl}${dataPoster?.backdrop_path}`;

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
            <ImageBg bgDashboard={bgDashboard}>test</ImageBg>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
