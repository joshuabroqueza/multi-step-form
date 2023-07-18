import React from "react";
import Firstform from "./components/Firstform";
import { useState } from "react";
import SecondForm from "./components/SecondForm";

const Appv3 = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="border md:flex md:p-4 md:flex-row flex-grow w-full">
        {/* <!-- Static parent --> */}
        <div className="h-1/4 md:h-full w-full md:w-[30%] drop-shadow-md shadow-md p-8 md:rounded-xl border bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover">
          <div className="number_container flex flex-row md:flex-col md:justify-evenly items-center my-10 w-full  md:h-3/4 ">
            <div className="step_child flex flex-row justify-center items-center my-3 w-full">
              <div className="border-2 drop-shadow-md shadow-md rounded-full w-12 h-12 md:mr-5 text-white flex items-center justify-center md:text-xl">
                1
              </div>
              <div className="text_content hidden md:inline-block">
                <p className="text-slate-400 md:text-lg lg:text-xl">STEP 1</p>
                <h3 className="text-white font-bold md:text-xl lg:text-2xl">
                  YOUR INFO
                </h3>
              </div>
            </div>

            <div className="step_child flex flex-row justify-center items-center my-3 w-full">
              <div className="border-2 drop-shadow-md shadow-md rounded-full w-12 h-12 md:mr-5 text-white flex items-center justify-center md:text-xl">
                1
              </div>
              <div className="text_content hidden md:inline-block">
                <p className="text-slate-400 md:text-lg lg:text-xl">STEP 1</p>
                <h3 className="text-white font-bold md:text-xl lg:text-2xl">
                  YOUR INFO
                </h3>
              </div>
            </div>

            <div className="step_child flex flex-row justify-center items-center my-3 w-full">
              <div className="border-2 drop-shadow-md shadow-md rounded-full w-12 h-12 md:mr-5 text-white flex items-center justify-center md:text-xl">
                1
              </div>
              <div className="text_content hidden md:inline-block">
                <p className="text-slate-400 md:text-lg lg:text-xl">STEP 1</p>
                <h3 className="text-white font-bold md:text-xl lg:text-2xl">
                  YOUR INFO
                </h3>
              </div>
            </div>

            <div className="step_child flex flex-row justify-center items-center my-3 w-full">
              <div className="border-2 drop-shadow-md shadow-md rounded-full w-12 h-12 md:mr-5 text-white flex items-center justify-center md:text-xl">
                1
              </div>
              <div className="text_content hidden md:inline-block">
                <p className="text-slate-400 md:text-lg lg:text-xl">STEP 1</p>
                <h3 className="text-white font-bold md:text-xl lg:text-2xl">
                  YOUR INFO
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* PASTE START HERE */}
        <div className="body_container flex flex-col px-5 md:px-10 md:w-[70%]">
          {/* <Firstform /> */}

          <SecondForm />
        </div>
      </div>
    </div>
  );
};

export default Appv3;
