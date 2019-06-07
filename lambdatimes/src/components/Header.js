import React from "react";
import styled from "styled-components";

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

  const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid lightgrey;
    width: 100%;
    height: 120px;
    margin-top: 44px;
    padding-bottom: 15px;
    h1 {
      font-size: 60px;
      font-family: Didot, serif;
      font-weight: bold;
      flex: 8;
      text-align: center;
      color: #000;
    }

    @media (min-width: 1280px) {
      width: 1280px;
    }
  `;

  const DateSpan = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-left: 25px;
    flex: 1;
  `;

  const TempSpan = styled.span`
    align-self: flex-end;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    text-align: right;
    margin-right: 25px;
    flex: 1;
  `;

  return (
    <HeaderWrapper>
      <DateSpan>
        {monthArray[month]} {day}, {year}
      </DateSpan>
      <h1>Lambda Times</h1>
      <TempSpan>98°</TempSpan>
    </HeaderWrapper>
  );
};

export default Header;
