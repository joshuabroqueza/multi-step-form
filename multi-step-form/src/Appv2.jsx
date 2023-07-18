import React from "react";

const Appv2 = () => {
  return (
    <div className="">
      <div className="static border m-3 h-screen">
        {/* <!-- Static parent --> */}
        <div className="absolute top-1/4 left-0 bg-slate-500">
          <p>Absolute child</p>
        </div>
        <div className="bg-red-200 h-full">
          <div className="h-1/4 w-full border bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover">
            hello
          </div>

          <div className="h-1/2">background</div>
          <div className="h-1/6 bg-sky-500/100 border">button</div>
        </div>
      </div>
    </div>
  );
};

export default Appv2;
