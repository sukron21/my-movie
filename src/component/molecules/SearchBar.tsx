// molecules/SearchBar.jsx

import { Inputs } from "../atoms/Inputs";

interface Searching {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
}

const SearchBar = ({ value, onChange, onSearch }: Searching) => {
  return (
    <div className="flex gap-2">
      <Inputs value={value} onChange={onChange} placeholder="Search..." />
      <button className="bg-blue-500" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
