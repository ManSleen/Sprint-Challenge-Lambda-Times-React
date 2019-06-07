import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => {
          return (
            <Tab
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
              tab={tab}
            />
          );
        })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Tabs;
