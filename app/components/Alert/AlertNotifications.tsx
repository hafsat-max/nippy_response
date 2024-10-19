import React from "react";
import AlertsCards from "./AlertsCards";
import Image from "next/image";
import AlertIcon from "../../../public/icons/alertIcon.svg";
import { AiOutlineClose } from "react-icons/ai";

interface MenuProps {
  closeDrawer?: () => void;
}

const AlertNotifications = ({ closeDrawer }: MenuProps) => {
  return (
    <div className="pb-12">
      <div className="flex justify-between items-center">
        <div className="flex items-center  mt-6 mb-8">
          <Image
            src={AlertIcon}
            alt="alerts"
            width={20}
            height={20}
            className="w-8 h-8 mr-4"
          />
          <p className="text-3xl font-semibold">Alerts</p>
        </div>
        <button
          className=" md:hidden bg-bgBlue w-8 h-8 flex items-center justify-center  rounded-full"
          onClick={closeDrawer}
        >
          <AiOutlineClose className="w-4 h-4 font-black text-black" />
        </button>
      </div>
      <div className="h-[80vh] overflow-y-auto scrollbar-hide pb-8">
        {[1, 2, 3, 4].map((item, idx) => {
          return (
            <div key={idx * 2} className=" my-6">
              <AlertsCards />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AlertNotifications;
