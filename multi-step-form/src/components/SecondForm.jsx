import React from "react";
import arcade_icon from "../assets/images/icon-arcade.svg";
import checkmark from "../assets/images/icon-checkmark.svg";
import iconpro from "../assets/images/icon-pro.svg";
import { useState } from "react";

const SecondForm = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };
  return (
    <div>
      <div className="form_header w-full p-5 my-5 md:p-0 md:m-0 border md:border-none shadow-lg md:shadow-none drop-shadow md:drop-shadow-none rounded-2xl md:rounded-none bg-white md:h-[80vh] md:w-full ">
        <h1 className="text-2xl md:text-4xl my-5 font-bold text-denim">
          Select your plan
        </h1>
        <p className="text-slate-400 md:text-lg my-2">
          You have the option of monthly or yearly billing.
        </p>

        <div className="subscription_container w-full">
          <div className="subscription_child">
            <div className="flex flex-row items-center px-5 py-5 my-4 border rounded-xl">
              <img src={arcade_icon} alt="arcade_icon" className="mr-3" />
              <div>
                <h3 className="text-xl font-bold">Arcade</h3>
                <p className="text-slate-400">$9/mo</p>
              </div>
            </div>
          </div>
          <div className="subscription_child">
            <div className="flex flex-row items-center px-5 py-5 my-4 border rounded-xl">
              <img src={arcade_icon} alt="arcade_icon" className="mr-3" />
              <div>
                <h3 className="text-xl font-bold">Arcade</h3>
                <p className="text-slate-400">$9/mo</p>
              </div>
            </div>
          </div>
          <div className="subscription_child">
            <div className="flex flex-row items-center px-5 py-5 my-4 border rounded-xl">
              <img src={arcade_icon} alt="arcade_icon" className="mr-3" />
              <div>
                <h3 className="text-xl font-bold">Arcade</h3>
                <p className="text-slate-400">$9/mo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full  p-5 bg-[#f8f8fa] rounded-xl">
          <span
            className={
              isMonthly
                ? "mr-2 text-lg text-denim font-semibold"
                : "mr-2 text-lg text-slate-400 font-semibold"
            }
          >
            Monthly
          </span>
          <label htmlFor="toggle" className="relative mx-3">
            <input
              id="toggle"
              type="checkbox"
              checked={isMonthly}
              onChange={handleToggle}
              className="hidden"
            />
            <div className="slider bg-gray-400 rounded-full w-12 h-6 transition-all"></div>
            <div
              className={`dot absolute left-1 top-1 ${
                isMonthly ? "translate-x-0" : "translate-x-6"
              } bg-white w-4 h-4 rounded-full transition-transform`}
            ></div>
          </label>
          <span
            className={
              isMonthly
                ? "mr-2 text-lg text-slate-400  font-semibold"
                : "mr-2 text-lg text-denim font-semibold"
            }
          >
            Yearly
          </span>
        </div>
      </div>

      <div className="button_container md:my-10 my-24 h-[10%] flex justify-between items-center px-5">
        <button className="bg-white w-1/3 text-black py-2 px-4 rounded md:text-lg shadow-md drop-shadow-md">
          Go Back
        </button>
        <button className="bg-denim w-1/3 text-white py-2 px-2 rounded md:text-lg shadow-md drop-shadow-md">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SecondForm;
