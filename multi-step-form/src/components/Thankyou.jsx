import React from "react";
import check_icon from "../assets/images/icon-thank-you.svg";

const Thankyou = () => {
  return (
    <div className="flex flex-col items-center justify-center md:h-full">
      <img
        className="h-16 my-4 drop-shadow-md"
        src={check_icon}
        alt="thank_you"
      />
      <h1 className="font-bold text-2xl md:text-3xl my-2">Thank you!</h1>
      <p className="text-center text-semi-grey my-2">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Thankyou;
