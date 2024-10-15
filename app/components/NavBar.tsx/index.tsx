"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/assets/nippyLogo.svg";
import ProfileImg from "../../../public/icons/profileImgIcon.svg";
import HomeIcon from "../../../public/icons/homeIcon.svg";

import Link from "next/link";
import { SearchBar } from "../form/SearchBar";

const Navbar = () => {
  const [wordEntered, setWordEntered] = useState("");

  const handleSearch = (searchKeyword: string) => {
    const trimmedKeyword = searchKeyword.trim();

    // if (!trimmedKeyword) {
    //   toast.error("Please enter a search keyword");
    //   return;
    // }
    if (wordEntered) {
      console.log(wordEntered);
    }

    setWordEntered(trimmedKeyword);
  };

  return (
    <div className="w-full ">
      <div className=" flex justify-between !items-center ">
        <div className="w-full md:w-1/4 pl-4 flex items-center justify-left">
          <Link href="/">
            <Image
              src={Logo}
              alt="Nippy Logo"
              width={128}
              height={36}
              className="w-36 md:w-48 h-auto  "
            />
          </Link>
        </div>

        <div className="hidden md:block w-full md:w-2/4 ">
          <div className="md:flex items-center justify-center">
            <div className=" flex items-center">
              <div className="bg-bgBlue w-12 h-12 mr-4 flex items-center justify-center">
                <Image
                  src={HomeIcon}
                  alt="Nippy Logo"
                  width={128}
                  height={36}
                  className="w-6  h-6"
                />
              </div>
              <div className="min-w-[200px] lg:w-[474px]">
                <SearchBar
                  setWordEntered={setWordEntered}
                  onSearch={handleSearch}
                  placeholder="Search for emergency contact"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/4  flex items-end justify-end pr-4">
          <Image
            src={ProfileImg}
            alt="Profile pic"
            width={40}
            height={36}
            className="w-8 h-8 "
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
