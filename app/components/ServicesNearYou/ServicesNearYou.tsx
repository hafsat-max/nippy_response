"use client";
import { LocationServicesData } from "@/app/utils/sidebarData";
import Link from "next/link";
import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ServicesNearYou = () => {
  const [countClickLimit, setCountClickLimit] = useState<number>(0);

  const initiateLinkedClicked = () => {
    setCountClickLimit(countClickLimit + 1);
  };

  const handleOpenFullMap = () => {
    window.open(
      "https://www.google.com/maps?q=6.586764793379338,3.3430708105118194",
      "_blank"
    );
  };

  return (
    <div className="mt-14">
      <h3 className="text-xl font-semibold mb-6 mt-6">
        Emergency services near you
      </h3>

      <div className="flex flex-col  gap-y-4 ">
        {LocationServicesData.map((item, idx) => {
          return (
            <div key={idx * 2}>
              <div className="flex justify-between items-center bg-bgBlue px-4 rounded-lg">
                <p className="text-sm md:text-md">{item.title}</p>
                <div className="flex gap-x-2 items-center">
                  <Link
                    href={"tel:" + item.phone}
                    onClick={initiateLinkedClicked}
                    className="w-1/2 flex flex-row items-center justify-center gap-3 py-[14px] bg-hiven-blue hover:bg-hiven-blue/90 rounded-xl"
                  >
                    <FaPhoneAlt className="text-textLight  w-4 h-4" />
                  </Link>
                  <Link
                    href={"tel:" + item.phone}
                    onClick={initiateLinkedClicked}
                    className="w-1/2 flex flex-row items-center justify-center gap-3 py-[14px] bg-hiven-blue hover:bg-hiven-blue/90 rounded-xl"
                  >
                    <FaMapMarkerAlt className="text-textLight  w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4826840290193!2d3.3430708105118194!3d6.586764793379338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92213a1785c1%3A0xfbca096bb8cb53fc!2sUnique%20Shopping%20Mall!5e0!3m2!1sen!2sng!4v1686741477397!5m2!1sen!2sng"
          width="600"
          height="450"
          className="w-full rounded-lg"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex items-end justify-end">
          <button
            className="text-right text-sm underline text-textLight mt-3"
            onClick={handleOpenFullMap}
          >
            View map
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesNearYou;
