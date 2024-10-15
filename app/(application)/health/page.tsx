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

        {/* map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4826840290193!2d3.3430708105118194!3d6.586764793379338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92213a1785c1%3A0xfbca096bb8cb53fc!2sUnique%20Shopping%20Mall!5e0!3m2!1sen!2sng!4v1686741477397!5m2!1sen!2sng"
          width="600"
          height="450"
          className="w-full rounded-lg"
          style={{ border: "0" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* emergency  */}
        <EmergencyContact />
      </div>
    </section>
  );
};

export default FireDepartment;
