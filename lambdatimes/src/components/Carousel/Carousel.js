import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
let count = 0;
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselPics: []
    };
  }
  componentDidMount() {
    this.setState({
      carouselPics: carouselData
    });
  }

  leftClick = () => {};

  rightClick = () => {
    count++;
    console.log(count);
    this.selectedImage();
  };

  selectedImage = () => {
    console.log(this.state.carouselPics[count]);
    return (
      <img src={this.state.carouselPics[count]} style={{ display: "block" }} />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        <div>{this.selectedImage()}</div>
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}
