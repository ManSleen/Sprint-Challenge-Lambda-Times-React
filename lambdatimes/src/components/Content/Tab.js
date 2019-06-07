import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Tab = props => {
  return (
    <div
      className={`tab${props.selectedTab === props.tab ? " active-tab" : ""}`}
      onClick={tab => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired
};

export default Tab;
