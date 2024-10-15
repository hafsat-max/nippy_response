import React from "react";
import AlertsCards from "./AlertsCards";
import Image from "next/image";
import AlertIcon from "../../../public/icons/alertIcon.svg";

const AlertNotifications = () => {
  return (
    <div>
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

      {[1, 2, 3, 4].map((item, idx) => {
        return (
          <div key={idx * 2} className=" my-6">
            <AlertsCards />
          </div>
        );
      })}
    </div>
  );
};

export default AlertNotifications;
