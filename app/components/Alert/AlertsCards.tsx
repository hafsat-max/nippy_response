import React from "react";

const AlertsCards = () => {
  return (
    <div>
      <div className=" rounded-lg p-4 bg-bgBlue">
        <h3 className="font-semibold text-lg mb-4">High winds expected</h3>
        <p className="text-textLight font-medium text-md">
          A strong wind advisory is in effect for your area. Please take the
          following precautions
        </p>

        <div className="mt-2 text-textLight font-thin text-xs flex justify-between items-center">
          <p>Oct 9, 2024</p>
          <p>10:15 pm</p>
        </div>
      </div>
    </div>
  );
};

export default AlertsCards;
