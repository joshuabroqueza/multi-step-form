import React from "react";

const Header = ({ pages, activePage }) => {
  console.log(activePage);
  return (
    <div className="number_container flex flex-row md:flex-col md:justify-evenly items-center my-10 w-full  md:h-3/4 ">
      {pages.map((page) => (
        <div
          key={page.id}
          className="step_child flex flex-row justify-center md:justify-start items-center my-3 w-full"
        >
          <div
            className={
              activePage === page.id
                ? "bg-white border-2 drop-shadow-md shadow-md rounded-full w-12 h-12 md:mr-3 text-denim flex items-center justify-center md:text-lg"
                : "border-2 drop-shadow-md shadow-md rounded-full w-12 h-12 md:mr-3 text-white flex items-center justify-center md:text-lg"
            }
          >
            {page.id}
          </div>
          <div className="text_content hidden md:inline-block">
            <p className="text-slate-400 md:text-sm lg:text-xl">
              STEP {page.id}
            </p>
            <h3 className="text-white font-bold md:text-sm lg:text-2xl">
              {page.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
