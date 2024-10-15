"use client";

import Image from "next/image";
import React from "react";
import SearchIcon from "../../../public/icons/searchIcon.svg";

interface SearchBarProps {
  setWordEntered: (val: string) => void;
  placeholder: string;
  onSearch: (val: string) => void;
}
export const SearchBar = ({
  setWordEntered,
  placeholder,
  onSearch,
}: SearchBarProps) => {
  const [searchKeyword, setSearchKeyword] = React.useState("");

  const handleSearch = () => {
    if (searchKeyword.trim()) {
      setWordEntered(searchKeyword.trim());
      onSearch(searchKeyword.trim());
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full ">
      <input
        type="text"
        placeholder={placeholder}
        value={searchKeyword}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="w-full pl-4 py-3 !pr-10 border border-bgBlue bg-bgBlue !rounded-[8px]"
      />
      <Image
        src={SearchIcon}
        alt="Search"
        width={20}
        height={20}
        className="absolute top-3.5 right-3 cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};
