/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ComercialShoppingBasket1 = ({ color = "#FDFDFD", className }) => {
  return (
    <svg
      className={`comercial-shopping-basket-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M3.47 4.25H4.47L4.52 4.26C5.90616 4.28689 7.11733 5.20334 7.52 6.53L7.72 7.22H18.15C19.071 7.22419 19.9456 7.62503 20.55 8.32C21.1527 9.01937 21.4194 9.94735 21.28 10.86L20.68 15C20.4802 16.5869 19.1393 17.7825 17.54 17.8H11.66C10.2553 17.7948 9.01824 16.8741 8.61 15.53L6.08 7C5.88626 6.26818 5.227 5.75633 4.47 5.75H3.47C3.05579 5.75 2.72 5.41421 2.72 5C2.72 4.58579 3.05579 4.25 3.47 4.25ZM10.05 15.05C10.2623 15.762 10.917 16.25 11.66 16.25H17.54C18.3677 16.241 19.0686 15.6372 19.2 14.82L19.8 10.67C19.8817 10.1869 19.7485 9.69227 19.4352 9.31558C19.122 8.93889 18.6599 8.71772 18.17 8.71H8.17L10.05 15.05Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        d="M11.43 19C10.8777 19 10.43 19.4477 10.43 20C10.43 20.5523 10.8777 21 11.43 21C11.9823 21 12.43 20.5523 12.43 20C12.43 19.4477 11.9823 19 11.43 19Z"
        fill={color}
      />
      <path
        className="path"
        d="M17.43 19C16.8777 19 16.43 19.4477 16.43 20C16.43 20.5523 16.8777 21 17.43 21C17.9823 21 18.43 20.5523 18.43 20C18.43 19.4477 17.9823 19 17.43 19Z"
        fill={color}
      />
    </svg>
  );
};

ComercialShoppingBasket1.propTypes = {
  color: PropTypes.string,
};
