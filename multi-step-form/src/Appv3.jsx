import React from "react";
import Firstform from "./components/Firstform";
import { useState } from "react";
import SecondForm from "./components/SecondForm";

const Appv3 = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="border md:flex md:p-4 md:flex-row flex-grow w-full">
        {/* <!-- Static parent --> */}
        <div
          className="h-1/4 md:h-full w-full md:w-[30%] drop-shadow-md shadow-md p-8 md:rounded-xl border bg-[url('./assets/images/bg-sidebar-mobile.svg')] md:bg-[url('./assets/images/bg-sidebar-desktop.svg')]
        
        bg-cover"
        >
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

          {/* <SecondForm /> */}

          {/* <ThirdForm /> */}

          {/* <FourthForm /> */}

          <div>
            <div className="form_header w-full p-5 my-5 md:p-0 md:m-0 border md:border-none shadow-lg md:shadow-none drop-shadow md:drop-shadow-none rounded-2xl md:rounded-none bg-white md:h-[80vh] md:w-full ">
              <h1 className="text-2xl md:text-4xl my-5 font-bold text-denim">
                Finishing up
              </h1>
              <p className="text-slate-400 md:text-lg my-2">
                Double-check everything looks OK before confirming.
              </p>

              <div className="finishing_container w-full md:mt-16">
                <div className="finishing_child flex flex-col border p-3 rounded-lg bg-[#f8f9ff] ">
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="">
                      <h3 className="text-xl font-bold text-denim">
                        Arcade (Monthly)
                      </h3>
                      <button className="text-semi-purple underline">
                        Change
                      </button>
                    </div>
                    <div>
                      <p className="text-denim font-bold text-lg">$9/mo</p>
                    </div>
                  </div>
                  <br className="text-black outline outline-black bg-black" />
                  <div className="flex flex-row justify-between my-1">
                    <h3 className="text-slate-400">Online Storage</h3>
                    <p className="text-denim">+$10/yr</p>
                  </div>
                  <div className="flex flex-row justify-between my-1">
                    <h3 className="text-slate-400">Larger storage</h3>
                    <p className="text-denim">+$20/yr</p>
                  </div>
                </div>

                <div className="flex flex-row justify-between my-6 px-2">
                  <h3 className="text-slate-400 md:text-lg">
                    Total (per year)
                  </h3>
                  <p className="text-semi-purple font-bold text-lg md:text-xl">
                    $120/yr
                  </p>
                </div>
              </div>
            </div>

            <div className="button_container md:my-10 my-24 h-[10%] flex justify-between items-center px-5">
              <button className="bg-white w-1/3 text-slate-400 py-2 px-4 rounded md:text-lg shadow-md drop-shadow-md">
                Go Back
              </button>
              <button className="bg-denim w-1/3 text-white py-2 px-4 rounded md:text-lg shadow-md drop-shadow-md">
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appv3;
