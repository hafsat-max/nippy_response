"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/assets/nippyLogo.svg";
import ProfileImg from "../../../public/icons/profileImgIcon.svg";
import HomeIcon from "../../../public/icons/homeIcon.svg";

import Link from "next/link";
import { SearchBar } from "../form/SearchBar";
import { MobileNavData } from "@/app/utils/sidebarData";
import AlertNotifications from "../Alert/AlertNotifications";
import SideMenu from "../SideMenu";

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

export const MobileNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);
  const showAlert = () => setIsAlertVisible(true);
  const closeAlertDrawer = () => setIsAlertVisible(false);
  return (
    <div className="block md:hidden">
      <div
        // className="bg-white w-full"
        className="bg-white w-full fixed z-20 left-0 right-0 bottom-1 gap-2 p-4 flex justify-between"
        style={{
          // background: "rgba(0, 0, 0, .3)",
          // width: "max-content",
          display: "block",
          padding: "0.7rem 1.7rem",
          position: "fixed",
          zIndex: "2",
          left: 0,
          right: 0,
          // transform: "translateX(-50%)",
          bottom: "1rem",
          gap: ".8rem",
          borderRadius: "3rem",
          backdropFilter: "blur(1px)",
        }}
      >
        <div
          className="flex w-full justify-between"
          style={{ display: "flex" }}
        >
          {MobileNavData.map((item, idx) => {
            return (
              <div key={idx * 2} className="flex flex-col items-center">
                {/* Handle special cases for "Services" and "Alert" */}
                {item.title === "Services" ? (
                  <button
                    onClick={toggleDrawer}
                    className="flex flex-col items-center"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <p className="text-xs mt-2">{item.title}</p>
                  </button>
                ) : item.title === "Alert" ? (
                  <button
                    onClick={showAlert}
                    className="flex flex-col items-center"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <p className="text-xs mt-2">{item.title}</p>
                  </button>
                ) : (
                  <Link href={item.link} className="flex flex-col items-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <p className="text-xs mt-2">{item.title}</p>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full bg-white z-30 transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } w-3/4 sm:w-2/4`}
        style={{ transition: "transform 0.3s ease-in-out" }}
      >
        <SideMenu closeDrawer={closeDrawer} />
      </div>
      {isAlertVisible && (
        <div
          className="fixed top-4 right-0 bg-white text-black p-4 z-40 w-3/4 sm:w-1/4 "
          style={{ transition: "transform 0.3s ease-in-out" }}
        >
          <div className="">
            <AlertNotifications closeDrawer={closeAlertDrawer} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
