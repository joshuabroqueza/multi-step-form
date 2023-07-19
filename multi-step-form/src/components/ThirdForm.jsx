import React from "react";

const ThirdForm = ({ dispatch, addOns }) => {
  const handleAddOnSelection = (addOnId) => {
    dispatch({
      type: "SELECTED_ADD_ON",
      payload: addOnId,
    });
  };

  const handleNextPage = () => {
    dispatch({
      type: "NEXT_TO_FOURTH_FORM",
    });
  };
  return (
    <div>
      <div className="form_header w-full p-5 my-5 md:p-0 md:m-0 border md:border-none shadow-lg md:shadow-none drop-shadow md:drop-shadow-none rounded-2xl md:rounded-none bg-white md:h-[80vh] md:w-full ">
        <h1 className="text-2xl md:text-4xl my-5 font-bold text-denim">
          Pick add-ons
        </h1>
        <p className="text-slate-400 md:text-lg my-2">
          Add-ons help enhance your gaming experience.
        </p>

        <div className="addons_container w-full">
          {addOns.map((addOn) => (
            <div key={addOn.id} className="addons_child">
              <div className="flex flex-row justify-between items-center px-5 py-5 my-4 border active:border-semi-purple shadow-md rounded-xl">
                <div className="flex flex-row items-center justify-center">
                  <div className="mr-5">
                    <input
                      className="h-5 w-5  accent-semi-purple cursor-pointer"
                      type="checkbox"
                      checked={addOn.selectedAddOn}
                      onChange={() => handleAddOnSelection(addOn.id)}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-denim">
                      {addOn.name}
                    </h3>
                    <p className="text-slate-400">{addOn.description}</p>
                  </div>
                </div>
                <div className="px-3">
                  <p className="text-semi-purple">+${addOn.fee}/mo</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="button_container md:my-10 my-24 h-[10%] flex justify-between items-center px-5">
        <button
          onClick={() =>
            dispatch({
              type: "BACK_TO_SECOND_FORM",
            })
          }
          className="bg-white w-1/3 text-denim font-semibold py-2 px-4 rounded md:text-lg shadow-sm drop-shadow-md hover:shadow-xl active:scale-90 transition duration-150"
        >
          Go Back
        </button>
        <button
          onClick={() => handleNextPage()}
          className="bg-denim w-1/3 text-white py-2 px-2 rounded md:text-lg shadow-sm drop-shadow-md hover:shadow-xl active:scale-90 transition duration-150"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default ThirdForm;
