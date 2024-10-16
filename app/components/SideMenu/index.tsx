"use client";

import React from "react";
import Image from "next/image";
import { SideBarNavData } from "@/app/utils/sidebarData";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideMenu = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex items-center pl-4 mt-4 mb-6">
        <Image
          src={SideBarNavData[0].icon}
          alt={SideBarNavData[0].title}
          width={20}
          height={20}
          className="w-8 h-8 mr-4 "
        />
        <span className="text-lg font-semibold">{SideBarNavData[0].title}</span>
      </div>
      <ul className="pl-4">
        {SideBarNavData.slice(1).map((item, idx) => {
          return (
            <li key={idx * 2} className={` my-4 `}>
              <Link
                href={item?.link}
                className={`max-w-max flex  items-center gap-x-4 ${
                  pathname === item?.link
                    ? "bg-[#C9D1F1] border-2 border-[#3D509E]"
                    : ""
                }  pr-4  rounded-lg`}
                style={{ width: "100%" }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={20}
                    height={20}
                    className="w-6 h-6 "
                  />
                </div>
                <span className="text-lg ">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideMenu;
