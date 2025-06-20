interface IBanner {
  bgDashboard: string;
  children: React.ReactNode;
}

export const ImageBg = ({ bgDashboard, children }: IBanner) => {
  return (
    <div
      className="w-full h-[70vh] flex justify-center  bg-cover bg-center items-center text-white"
      style={{ backgroundImage: `url(${bgDashboard})` }}
    >
      <div className="absolute h-[70vh] inset-0 bg-black opacity-50 z-10"></div>
      {children}
    </div>
  );
};
