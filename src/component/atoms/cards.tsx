import { useNavigate } from "react-router-dom";

interface IcardAntd {
  children: React.ReactNode;
  bg?: string;
  type: string;
  params?: string;
  classNames?: string;
}
export const CardImage = ({
  children,
  bg,
  type,
  params,
  classNames,
}: IcardAntd) => {
  const navigate = useNavigate();
  const handleClick = (id: string | undefined) => {
    if (type == "list") {
      navigate(`/detail/${id}`);
    }
  };
  return (
    <div
      className={`w-full h-72 bg-cover bg-center rounded-lg relative cursor-pointer ${classNames}`}
      style={{
        backgroundImage: bg
          ? `url(https://image.tmdb.org/t/p/w500${bg})`
          : "none",
        backgroundColor: bg ? "transparent" : "#333",
      }}
      onClick={() => handleClick(params)}
    >
      {children}
    </div>
  );
};
