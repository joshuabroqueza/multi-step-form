import React from "react";

const FourthForm = () => {
  return (
    <div>
      <div className="form_header w-full p-5 my-5 md:p-0 md:m-0 border md:border-none shadow-lg md:shadow-none drop-shadow md:drop-shadow-none rounded-2xl md:rounded-none bg-white md:h-[80vh] md:w-full ">
        <div className="pre-confirmation">
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
                  <button className="text-semi-purple underline">Change</button>
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
              <h3 className="text-slate-400 md:text-lg">Total (per year)</h3>
              <p className="text-semi-purple font-bold text-lg md:text-xl">
                $120/yr
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="button_container md:my-10 my-24 h-[10%] flex justify-between items-center px-5">
        <button className="bg-white w-1/3 text-slate-400 py-2 px-4 rounded md:text-lg shadow-md drop-shadow-md">
          Go Back
        </button>
        <button className="bg-denim w-1/3 text-white py-2 px-2 rounded md:text-lg shadow-md drop-shadow-md">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FourthForm;
