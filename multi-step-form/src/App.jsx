import React, { useReducer } from "react";
import FirstPageForm from "./components/FirstPageForm";

function reducer(state, action) {
  switch (action.type) {
    case "SET_ACTIVE_PAGE":
      return action.payload;
    default:
      return state;
  }
}

function App() {
  const pages = [
    { name: "firstpage" },
    { name: "secondpage" },
    { name: "thirdpage" },
    { name: "fourthpage" },
  ];

  const [activePage, dispatch] = useReducer(reducer, pages[0]);

  // Function to set the active page on component mount
  React.useEffect(() => {
    dispatch({ type: "SET_ACTIVE_PAGE", payload: pages[0] });
  }, []);

  return (
    <div className="bg-[#EFF5FF] h-screen">
      <div className="bg-[url('./assets/images/bg-sidebar-mobile.svg')] h-36 flex flex-row justify-center items-center bg-cover">
        {pages.map((page, index) => (
          <div
            className="border rounded-full px-3 py-1 mx-1 my-3 text-white"
            key={index}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <div className="flex-grow">
        <FirstPageForm />
      </div>
    </div>
  );
}

export default App;
