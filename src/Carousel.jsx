import { Component } from "react";

export class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    // using "handle" in naming is good practice, visually cue that this function is an event handler
    this.setState({
      active: +event.target.dataset.index, // "+" unary plus, converts string to number, javascript thing...
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" data-testid="hero" />
        <div className="carousel-smaller">
          {images.map((photo, idx) => (
            //elements that are clickable should be wrapped in button or <a> tag or are otherwise inaccesible
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              key={photo}
              src={photo}
              data-index={idx}
              className={idx === active ? "active" : ""}
              alt="animal thumbnail"
              data-testid={`thumbnail-${idx}`}
            />
          ))}
        </div>
      </div>
    );
  }
}
