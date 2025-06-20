import { CaretRightOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useNavigate } from "react-router-dom";

interface Nav {
  classNames?: string;
  checked?: boolean;
}
const Navbar = ({ classNames }: Nav) => {
  const navigate = useNavigate();
  const handleSearch = (value: string) => {
    navigate(`/search/${value}`);
  };
  return (
    <nav
      className={`w-[90vw] z-50 text-white flex justify-between bg-[#1A1919] bg-opacity-20 border border-blue-500 rounded mx-4 py-2 px-2 ${classNames}`}
    >
      {/* <Logo /> */}
      <div
        className="flex justify-center items-center cursor-pointer"
        onClick={() => navigate(`/`)}
      >
        <CaretRightOutlined className="text-[30px]" />
        <span className="font-semibold">MyMovie</span>
      </div>

      <div className="flex items-center gap-4">
        <Input.Search
          placeholder="Search your movie"
          variant="filled"
          className=" w-[250px] placeholder-white bg-white border border-black-500  rounded"
          enterButton={<SearchOutlined style={{ color: "blue" }} />}
          onSearch={handleSearch}
        />
      </div>
    </nav>
  );
};

export default Navbar;
