import RadioButtonAntd from "../atoms/radioButton";

export const Filters = () => {
  const keyFilter = [
    { value: "now-playing", label: "Now Playing" },
    { value: "popular-film", label: "Popular Film" },
    { value: "top-rate", label: "Top Rate" },
    { value: "upcoming", label: "Upcoming" },
  ];
  return (
    <div className="block h-1/2 border border-blue-500">
      <h2 className="pl-4 text-white font-semibold text-[34px]">Filter</h2>
      <div className=" pl-8">
        <p className="text-white text-[24px]">Category</p>
        <RadioButtonAntd data={keyFilter} />
      </div>
    </div>
  );
};
