import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const CardWrapper = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const HeadlineWrapper = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const AuthorWrapper = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
  span {
    padding-left: 10px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

const ImageContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
  img {
    width: 40px;
  }
`;

const Card = props => {
  return (
    <CardWrapper>
      <HeadlineWrapper>{props.card.headline}</HeadlineWrapper>
      <AuthorWrapper>
        <ImageContainer>
          <img alt="" src={props.card.img} />
        </ImageContainer>
        <span>By {props.card.author}</span>
      </AuthorWrapper>
    </CardWrapper>
  );
};

Card.propTypes = {
  cards: PropTypes.shape({
    card: PropTypes.shape({
      author: PropTypes.string.isRequired,
      headline: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      tab: PropTypes.string.isRequired
    })
  })
};

export default Card;
