import React from "react";

const Button = ({ styles, text, onClick }) => (

  <button onClick={onClick} type="button" className={`py-3 px-6 font-poppins font-medium text-[12px] text-dimWhite bg-black-gradient rounded-[10px] outline-none ${styles}`}>
    {text ? text : "Get Started"}
  </button>
);

export default Button;
