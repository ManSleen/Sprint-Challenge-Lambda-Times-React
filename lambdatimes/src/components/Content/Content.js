import React, { Component } from "react";
import Tabs from "./Tabs";
import Cards from "./Cards";
import Carousel from "../Carousel/Carousel";
import styled, { css } from "styled-components";

import { tabData, cardData } from "../../data";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "all",
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    });
  }

  changeSelected = tab => {
    this.setState(prevState => {
      return {
        selected: tab
      };
    });
  };

  filterCards = () => {
    if (this.state.selected === "all") {
      return this.state.cards;
    } else {
      return this.state.cards.filter(card => card.tab === this.state.selected);
    }
  };

  render() {
    return (
      <ContentContainer>
        <Tabs
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
          tabs={this.state.tabs}
        />
        <Carousel />
        <Cards cards={this.filterCards()} />
      </ContentContainer>
    );
  }
}
