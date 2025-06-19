// components/organisms/SearchSection.jsx
import { useState } from 'react';
import SearchBar from '../molecules/SearchBar';

// type SearchResult = {
//   id: number
//   name: string
// }

const SearchSection = () => {
  const [query, setQuery] = useState('');
//   const [results, setResults] = useState<SearchResult[]>([])

  const handleSearch = async () => {
    // contoh fetch data dari API
    // const response = await fetch(`/api/search?q=${query}`);
    //  const data: SearchResult[] = await response.json()
    // setResults(data);
  };

  return (
    // <div className="relative">
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
    //   {/* {results.length > 0 && (
    //     <ul className="absolute bg-white shadow p-2 mt-1">
    //       {results.map((item, index) => (
    //         <li key={index} className="py-1">{item.name}</li>
    //       ))}
    //     </ul>
    //   )} */}
    // {/* </div> */}
  );
};

export default SearchSection;
