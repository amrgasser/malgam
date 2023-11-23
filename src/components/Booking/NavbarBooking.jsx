import { useState } from "react";

import { close, logo, menu } from "../../assets";
import CarRentalIcon from '@mui/icons-material/CarRental';
import PaymentIcon from '@mui/icons-material/Payment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const sx = {
  height: '3rem',
  width: '3rem',
}
const Navbar = ({ step }) => {
  const returnTheme = (n) => {
    const theme = { ...sx }
    if (n == step) {
      theme.color = 'teal'
      return theme
    } else if (n > step) {
      theme.color = 'gray'
      return theme
    }
    theme.color = 'green'
    return theme

  }
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[80px] invert-75" />
      <ul className="flex flex-row">
        <li className="pr-10">
          <CarRentalIcon sx={returnTheme(0)} />
        </li>
        <li className="pr-10">
          <PaymentIcon sx={returnTheme(1)} />
        </li>
        <li>
          <CheckCircleIcon sx={returnTheme(2)} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
