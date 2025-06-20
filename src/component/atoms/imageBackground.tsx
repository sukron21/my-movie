interface IBanner {
  bgDashboard?: string;
  children: React.ReactNode;
  classNames?: string;
  classNameOpacity?: string;
}

export const ImageBg = ({
  bgDashboard,
  children,
  classNames,
  classNameOpacity,
}: IBanner) => {
  return (
    <div
      className={`w-full h-[70vh] bg-cover bg-center text-white ${classNames}`}
      style={{ backgroundImage: `url(${bgDashboard})` }}
    >
      <div
        className={`absolute h-[70vh] inset-0 bg-black opacity-50 z-10 ${classNameOpacity}`}
      ></div>
      {children}
    </div>
  );
};
