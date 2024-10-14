import React from "react";
import Button from "./Shared/Button";
import Call from "./icons/Call";
import Message from "./icons/Message";
import Speaker from "./icons/Speaker";
import Camera from "./icons/Camera";

const EmergencyContact = () => {
  return (
    <section className="p-6 rounded-lg flex flex-col gap-10 bg-red-light">
      <div className="flex flex-col gap-4">
        <h5 className="text-medium-18 text-secondary">
          Contact Emergency Service
        </h5>
        <Button
          text="Call"
          className="bg-red-normal text-white  text-semibold-16"
          rightIcon={<Call />}
        />
        <Button
          text="Send SOS Alert"
          className="border border-red-normal text-red-normal  text-semibold-16"
          rightIcon={<Message />}
        />
      </div>
      <Button
        text="Auto share voice record"
        className="border border-red-normal text-red-normal  text-semibold-16"
        rightIcon={<Speaker />}
      />
      <Button
        text="Auto share Picture"
        className="border border-red-normal text-red-normal  text-semibold-16"
        rightIcon={<Camera />}
      />
      <Button
        text="Share real-time location / 5mins"
        className="border border-red-normal text-red-normal  text-semibold-16"
      />
    </section>
  );
};

export default EmergencyContact;
