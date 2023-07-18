import React from "react";
import FirstPageForm from "./components/FirstPageForm";

const Appv2 = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="border md:flex md:flex-row flex-grow relative">
        {/* <!-- Static parent --> */}
        <div className="h-1/4 w-full border bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover">
          {/* <div className="form_section relative"></div> */}
        </div>

        <div className="body_container flex flex-col h-3/4">
          <div className="background_container flex-grow bg-[#eff5ff]">
            <div className="form_container absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* number of page */}
              <div className="number_container flex flex-row justify-center items-center my-4">
                <div className="border rounded-full px-3 py-1 mx-1 my-3 text-white">
                  1
                </div>
                <div className="border rounded-full px-3 py-1 mx-1 my-3 text-white">
                  2
                </div>
                <div className="border rounded-full px-3 py-1 mx-1 my-3 text-white">
                  3
                </div>
                <div className="border rounded-full px-3 py-1 mx-1 my-3 text-white">
                  4
                </div>
              </div>

              {/* START OF FORM */}
              <form>
                <div className="form_header w-80  p-5 m-5 border shadow-lg rounded-2xl bg-white">
                  <h1 className="text-2xl font-bold text-denim">
                    Personal info
                  </h1>
                  <p className="text-slate-400 my-2">
                    Please provide your name, email address, and phone number.
                  </p>

                  <div className="input_container flex flex-col">
                    <div className="input_child flex flex-col my-1">
                      <label className="text-sm text-denim" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="border rounded p-3"
                        type="text"
                        placeholder="e.g. Stephen King"
                      />
                    </div>
                    <div className="input_child flex flex-col my-1">
                      <label className="text-sm text-denim" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        className="border rounded p-3"
                        type="text"
                        placeholder="e.g. stephenking@lorem.com"
                      />
                    </div>
                    <div className="input_child flex flex-col my-1">
                      <label
                        className="text-sm text-denim"
                        htmlFor="phone_number"
                      >
                        Phone Number
                      </label>
                      <input
                        className="border rounded p-3"
                        type="text"
                        placeholder="e.g. +1 234 567 890"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="button_container h-[10%] bg-white border flex justify-end items-center p-3 absolute bottom-0 left-0 right-0">
            <button className="bg-denim w-1/3 text-white py-2 px-4 rounded">
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appv2;
