import React from "react";
import { useRef } from "react";

const FirstPageForm = () => {
  const name = useRef(null);
  const email = useRef(null);
  const phone_number = useRef(null);

  return (
    <div className="flex flex-col">
      <form className="flex-grow">
        <div className="form_header p-5 m-5 border rounded-2xl bg-white">
          <h1 className="text-2xl font-bold">Personal info</h1>
          <p className="text-slate-400 my-2">
            Please provide your name, email address, and phone number.
          </p>

          <div className="input_container flex flex-col">
            <div className="input_child flex flex-col my-1">
              <label className="text-sm" htmlFor="name">
                Name
              </label>
              <input
                className="border rounded p-3"
                type="text"
                placeholder="e.g. Stephen King"
                ref={name}
              />
            </div>
            <div className="input_child flex flex-col my-1">
              <label className="text-sm" htmlFor="email">
                Email Address
              </label>
              <input
                className="border rounded p-3"
                type="text"
                placeholder="e.g. stephenking@lorem.com"
                ref={email}
              />
            </div>
            <div className="input_child flex flex-col my-1">
              <label className="text-sm" htmlFor="phone_number">
                Phone Number
              </label>
              <input
                className="border rounded p-3"
                type="text"
                placeholder="e.g. +1 234 567 890"
                ref={phone_number}
              />
            </div>
          </div>
        </div>
      </form>
      <div className="h-[20vh] outline bg-yellow-300">
        <div className="button_container p-5 flex justify-end mt-auto">
          <button className="bg-denim px-5 py-2 rounded text-white">
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPageForm;
