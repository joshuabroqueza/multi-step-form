import React from "react";
import Firstform from "./components/Firstform";
import { useState, useReducer } from "react";

import Header from "./components/Header";
import arcade_icon from "./assets/images/icon-arcade.svg";
import checkmark from "./assets/images/icon-checkmark.svg";
import icon_pro from "./assets/images/icon-pro.svg";
import advance_icon from "./assets/images/icon-advanced.svg";
import SecondForm from "./components/SecondForm";
import ThirdForm from "./components/ThirdForm";
import FourthForm from "./components/FourthForm";
import Thankyou from "./components/Thankyou";

const initialState = {
  pages: [
    {
      id: 1,
      name: "YOUR INFO",
      active: true,
    },
    {
      id: 2,
      name: "SELECT PLAN",
      active: false,
    },
    {
      id: 3,
      name: "ADD-ONS",
      active: false,
    },
    {
      id: 4,
      name: "SUMMARY",
      active: false,
    },
  ],
  formData: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  activePage: 1,
  plan: [
    {
      id: 1,
      name: "Arcade",
      fee: 9,
      icon: arcade_icon,
      selectedPlan: false,
    },
    {
      id: 2,
      name: "Advance",
      fee: 12,
      icon: advance_icon,
      selectedPlan: false,
    },
    {
      id: 3,
      name: "Pro",
      fee: 15,
      icon: icon_pro,
      selectedPlan: false,
    },
  ],
  addOns: [
    {
      id: 1,
      name: "Online Service",
      description: "Access to multiplayer games",
      fee: 1,
      selectedAddOn: false,
    },
    {
      id: 2,
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      fee: 2,
      selectedAddOn: false,
    },
    {
      id: 3,
      name: "Customizable profiles",
      description: "Custom theme on your profile",
      fee: 2,
      selectedAddOn: false,
    },
  ],
  isMonthly: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE_PAGE":
      return action.payload;
    case "FIRST_FORM_SUBMIT":
      console.log(action.payload);
      return {
        ...state,
        formData: action.payload,
        activePage: 2,
      };
    case "BACK_TO_FIRST_FORM":
      return {
        ...state,
        activePage: 1,
      };

    case "TOGGLE_MONTHLY":
      return {
        ...state,
        isMonthly: action.payload,
      };

    case "BACK_TO_THIRD_FORM":
      return {
        ...state,
        activePage: 3,
      };

    case "NEXT_TO_THIRD_FORM":
      return {
        ...state,
        activePage: 3,
      };

    case "NEXT_TO_FOURTH_FORM":
      return {
        ...state,
        activePage: 4,
      };

    case "NEXT_TO_THANKYOU_PAGE":
      return {
        ...state,
        activePage: 5,
      };

    case "BACK_TO_SECOND_FORM":
      console.log(state.addOns);
      return {
        ...state,
        activePage: 2,
      };

    case "SELECTED_ADD_ON":
      const selectedAddOn = state.addOns.find(
        (addOn) => addOn.id === action.payload
      );

      //Now we want to get the current value of the selectedAddOn, and set it to the opposite
      //We will use the spread operator to get the current value of the selectedAddOn
      //We will then set the selectedAddOn property of the selectedAddOn to the opposite of the current value

      const updated__AddOn = {
        ...selectedAddOn,
        selectedAddOn: !selectedAddOn.selectedAddOn,
      };

      const updatedAddOn = state.addOns.map((addOn) =>
        addOn.id === updated__AddOn.id ? updated__AddOn : addOn
      );

      return {
        ...state,
        addOns: updatedAddOn,
      };

    case "SELECTED_PLAN":
      //The action payload will return an ID of the selected plan
      //We will use this ID to find the selected plan in the plan array
      //We will then set the selectedPlan property of the selected plan to true and the rest to false

      const selectedPlan = state.plan.find(
        (plan) => plan.id === action.payload
      );
      selectedPlan.selectedPlan = true;

      //We will now update the plan array with false selectedPlan property
      //We will use the map method to loop through the plan array
      //We will then set the selectedPlan property of each plan to false

      const updatedPlan = state.plan.map((plan) =>
        plan.id === selectedPlan.id
          ? selectedPlan
          : { ...plan, selectedPlan: false }
      );

      return {
        ...state,
        plan: updatedPlan,
      };
    default:
      return state;
  }
}

const App = () => {
  const [
    { pages, activePage, formData, plan, addOns, isMonthly },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="border md:flex md:p-4 md:flex-row flex-grow w-full">
        <div className="h-1/4 md:h-full w-full md:w-[30%] drop-shadow-md shadow-md p-8 md:rounded-xl bg-[url('./assets/images/bg-sidebar-mobile.svg')] md:bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-cover">
          <Header activePage={activePage} pages={pages} />
        </div>

        <div className="body_container flex flex-col px-5 md:px-10 md:w-[70%]">
          {activePage === 1 && (
            <Firstform formData={formData} dispatch={dispatch} />
          )}
          {activePage === 2 && (
            <SecondForm plan={plan} isMonthly={isMonthly} dispatch={dispatch} />
          )}

          {activePage === 3 && (
            <ThirdForm addOns={addOns} dispatch={dispatch} />
          )}

          {activePage === 4 && (
            <FourthForm
              addOns={addOns}
              plan={plan}
              isMonthly={isMonthly}
              dispatch={dispatch}
            />
          )}

          {activePage === 5 && <Thankyou />}
        </div>
      </div>
    </div>
  );
};

export default App;
