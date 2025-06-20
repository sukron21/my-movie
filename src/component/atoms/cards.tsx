import { useNavigate } from "react-router-dom";

interface IcardAntd {
  content: any;
  bg?: string;
  type: string;
  params: string;
}
export const CardAntd = ({ content, bg, type, params }: IcardAntd) => {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    if (type == "list") {
      navigate(`/detail/${id}`);
    }
  };
  return (
    <div
      className="w-full h-72 bg-cover bg-center rounded-lg relative cursor-pointer"
      style={{
        backgroundImage: bg
          ? `url(https://image.tmdb.org/t/p/w500${bg})`
          : "none",
        backgroundColor: bg ? "transparent" : "#333",
      }}
      onClick={() => handleClick(params)}
    >
      {content}
    </div>
  );
};
