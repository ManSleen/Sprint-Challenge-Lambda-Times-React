import React, { Component } from "react";
import { carouselData } from "../../data";
// Complete this Carousel
let count = 0;
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselPics: [],
      imageIndex: 0
    };
  }
  componentDidMount() {
    this.setState({
      carouselPics: carouselData
    });
  }

  leftClick = () => {
    const lastIndex = this.state.carouselPics.length - 1;
    const { imageIndex } = this.state;
    const resetIndex = imageIndex === 0;
    const index = resetIndex ? lastIndex : imageIndex - 1;
    console.log(this.state.imageIndex);

    this.setState({
      imageIndex: index
    });
  };

  rightClick = () => {
    const lastIndex = this.state.carouselPics.length - 1;
    const { imageIndex } = this.state;
    const resetIndex = imageIndex === lastIndex;
    const index = resetIndex ? 0 : imageIndex + 1;
    console.log(this.state.imageIndex);

    this.setState({
      imageIndex: index
    });
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.carouselPics[this.state.imageIndex]}
        style={{ display: "block" }}
      />
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
