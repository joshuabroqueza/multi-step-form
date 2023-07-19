import React from "react";
import Firstform from "./components/Firstform";
import { useState, useReducer } from "react";
import SecondForm from "./components/SecondForm";
import Header from "./components/Header";

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
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE_PAGE":
      return action.payload;
    default:
      return state;
  }
}

const Appv3 = () => {
  const [{ pages }, dispatch] = useReducer(reducer, initialState);

  const [activePage, setActivePage] = useState(1);

  const handleNextStep = () => {
    setActivePage(activePage + 1);
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="border md:flex md:p-4 md:flex-row flex-grow w-full">
        <div className="h-1/4 md:h-full w-full md:w-[30%] drop-shadow-md shadow-md p-8 md:rounded-xl border bg-[url('./assets/images/bg-sidebar-mobile.svg')] md:bg-[url('./assets/images/bg-sidebar-desktop.svg')] bg-cover">
          <Header activePage={activePage} pages={pages} />
        </div>

        <div className="body_container flex flex-col px-5 md:px-10 md:w-[70%]">
          {activePage === 1 && <Firstform onNextStep={handleNextStep} />}
          {activePage === 2 && <SecondForm />}

          {/* <SecondForm /> */}

          {/* <ThirdForm /> */}

          {/* <FourthForm /> */}
        </div>
      </div>
    </div>
  );
};

export default Appv3;
