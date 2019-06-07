import React from "react";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  let d = new Date();
  let month = d.getMonth();
  let day = d.getDate();
  let year = d.getFullYear();
  let monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return (
    <div className="header">
      <span className="date">
        {monthArray[month]} {day}, {year}
      </span>
      <h1>Lambda Times</h1>
      <span className="temp">98°</span>
    </div>
  );
};

export default Header;
