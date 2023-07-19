import React from "react";
import Firstform from "./components/Firstform";
import { useState, useReducer } from "react";
import SecondForm from "./components/SecondForm";
import Header from "./components/Header";
import arcade_icon from "./assets/images/icon-arcade.svg";
import checkmark from "./assets/images/icon-checkmark.svg";
import icon_pro from "./assets/images/icon-pro.svg";
import advance_icon from "./assets/images/icon-advanced.svg";

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

    case "SELECTED_PLAN":
      return {
        ...state,
      };
    default:
      return state;
  }
}

const Appv3 = () => {
  const [{ pages, activePage, formData, plan }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="border md:flex md:p-4 md:flex-row flex-grow w-full">
        <div className="h-1/4 md:h-full w-full md:w-[30%] drop-shadow-md shadow-md p-8 md:rounded-xl border bg-[url('./assets/images/bg-sidebar-mobile.svg')] md:bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-cover">
          <Header activePage={activePage} pages={pages} />
        </div>

        <div className="body_container flex flex-col px-5 md:px-10 md:w-[70%]">
          {activePage === 1 && (
            <Firstform formData={formData} dispatch={dispatch} />
          )}
          {activePage === 2 && <SecondForm plan={plan} dispatch={dispatch} />}

          {/* <SecondForm /> */}

          {/* <ThirdForm /> */}

          {/* <FourthForm /> */}
        </div>
      </div>
    </div>
  );
};

export default Appv3;
