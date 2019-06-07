import React from "react";

const Tab = props => {
  // console.log(props.selectedTab);
  // console.log(props.tab);
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={`tab${props.selectedTab === props.tab ? " active-tab" : ""}`}
      onClick={tab => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
