import React, { useState } from "react";

function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="border border-gray-400 bg-gray-50 text-gray-600 text-sm rounded-xl block p-2 dark:text-white"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

function SearchButton({ onClick }) {
  return (
    <button
      className="text-concrete-50 font-extrabold rounded-2xl text-sm w-full sm:w-auto px-5 py-1 text-center  bg-gradient-to-r from-cerise to-amaranth"
      onClick={onClick}
    >
      Search
    </button>
  );
}

function AdminPageSearch({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch(searchValue);
  };

  return (
    <div className="flex gap-2">
      <SearchInput value={searchValue} onChange={setSearchValue} />
      <SearchButton onClick={handleSearch} />
    </div>
  );
}

export default AdminPageSearch;
