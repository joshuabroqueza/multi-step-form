import React from "react";

const Firstform = ({ onNextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNextStep();
    console.log("im click");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form_header w-full p-5 my-5 md:p-0 md:m-0 border md:border-none shadow-lg md:shadow-none drop-shadow md:drop-shadow-none rounded-2xl md:rounded-none bg-white md:h-[80vh] md:w-full ">
        <h1 className="text-2xl md:text-4xl my-5 font-bold text-denim">
          Personal info
        </h1>
        <p className="text-slate-400 md:text-lg my-2">
          Please provide your name, email address, and phone number.
        </p>

        <div className="input_container flex flex-col">
          <div className="input_child flex flex-col my-1">
            <label
              className="text-sm md:text-xl md:my-2 text-denim"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border rounded p-3 md:p-5 md:placeholder:text-lg"
              type="text"
              placeholder="e.g. Stephen King"
            />
          </div>
          <div className="input_child flex flex-col my-1">
            <label
              className="text-sm md:text-xl md:my-2 text-denim"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="border rounded p-3 md:p-5 md:placeholder:text-lg"
              type="text"
              placeholder="e.g. stephenking@lorem.com"
            />
          </div>
          <div className="input_child flex flex-col my-1">
            <label
              className="text-sm md:text-xl md:my-2 text-denim"
              htmlFor="phone_number"
            >
              Phone Number
            </label>
            <input
              className="border rounded p-3 md:p-5 md:placeholder:text-lg"
              type="text"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </div>
      </div>

      <div className="button_container md:my-10 my-24 h-[10%] flex justify-end items-center px-5">
        <button className="bg-denim w-1/3 text-white py-2 px-4 rounded md:text-lg shadow-md drop-shadow-md">
          Next Step
        </button>
      </div>
    </form>
  );
};

export default Firstform;
