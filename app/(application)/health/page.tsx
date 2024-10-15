import EmergencyContact from "@/app/components/EmergencyContact";
import Image from "next/image";
import React from "react";
import fire from "@/public/assets/health-service.png";

const FireDepartment = () => {
  return (
    <section className=" py-10 flex flex-col gap-10">
      <div className="flex flex-col gap-3 px-14">
        <h3 className="text-secondary text-semibold-18">Good morning,</h3>
        <p className="text-semibold-32 text-secondary">
          Find the Nearest Hospital or Heathcare Facility.........
        </p>
      </div>

      <div className="flex flex-col gap-8 p-8 ">
        {/* police */}
        <Image
          src={fire}
          width={722}
          height={400}
          alt="police image"
          className="w-full"
        />

        {/* emergency  */}
        <EmergencyContact />
      </div>
    </section>
  );
};

export default FireDepartment;
