import { CaretRightOutlined } from "@ant-design/icons";
import { Input } from "antd";

interface Nav {
  classNames?: string;
  checked?: boolean;
  isChecked?: any;
}
const Navbar = ({ classNames }: Nav) => {
  //   const [checked, isChecked] = useState(true);
  return (
    <nav
      className={`w-[90vw] text-white flex justify-between bg-[#1A1919] bg-opacity-20 border border-blue-500 rounded mx-4 my-4 py-2 px-2 ${classNames}`}
    >
      {/* <Logo /> */}
      <div className="flex justify-center items-center cursor-pointer">
        <CaretRightOutlined className="text-[30px]" />
        <span className="font-semibold">MyMovie</span>
      </div>
      <div className="flex items-center gap-6">
        <span className="font-semibold">Home</span>
        <span className="font-semibold">Now Playing</span>
        <span className="font-semibold">Popular</span>
        <span className="font-semibold">Top Rated</span>
        <span className="font-semibold">Upcoming</span>
      </div>
      <div className="flex items-center gap-4">
        <Input.Search
          placeholder="Search your movie"
          variant="filled"
          className=" w-[250px] placeholder-white bg-white border border-black-500  rounded"
          //   enterButton={<SearchOutlined style={{ color: "white" }} />}
        />
        {/* <Switch
          className="border border-black-500"
          defaultChecked={checked}
          checked={checked}
          onClick={() => isChecked(!checked)}
          checkedChildren={<MoonOutlined />}
          unCheckedChildren={<SunOutlined style={{ color: "yellow" }} />}
          style={{
            backgroundColor: checked ? "black" : "#E5E7EB ",
          }}
        /> */}
      </div>
      {/* ← Include search logic di sini */}
      {/* <NavLinks /> */}
    </nav>
  );
};

export default Navbar;
