import { useState } from "react";
import "./App.css";
import Navbar from "./component/organisms/Navbars";
import bgDashboard from "./assets/hero banner.svg";
import { Rate } from "antd";

function App() {
  const [checked, isChecked] = useState(true);
  return (
    <div className="bg-[#030a1b] h-[100%]">
      <div className="w-full flex justify-center">
        <Navbar checked={checked} isChecked={isChecked} classNames=" fixed" />
        <div
          className="w-full h-[90vh]  bg-cover bg-center text-white"
          style={{ backgroundImage: `url(${bgDashboard})` }}
        >
          <div className="w-2/5 bottom-0 left-0 mt-[62vh] ml-[5vw]">
            <h1 className="text-[40px]">The Witcher (2019)</h1>
            <p className="text-[18px]">
              Geralt of Rivia, a mutated monster-hunter for hire, journeys
              toward his destiny in a turbulent world where people often prove
              more wicked than beasts
            </p>
            <Rate allowHalf defaultValue={2.5} className="custom-rate" />
          </div>
        </div>
      </div>
      <div>test</div>
    </div>
  );
}

export default App;
