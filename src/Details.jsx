import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { loading: true };
  // }

  state = { loading: true }; // with proposal class properties, substitutes constructor

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();

    this.setState({ loading: false, ...json.pets[0] });
    /*
      Without spread operator:
      this.setState(Object.assign({ loading: false }, json.pets[0]));
    */
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading ...</h2>;
    }
    const { animal, breed, city, state, description, name, images } =
      this.state;

    // throw new Error("lmao you crashed"); // Simulate an error

    return (
      <div className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2 className="detail-row">
            {animal} | {breed} | {city}, {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />;
    </ErrorBoundary>
  );
};

export default WrappedDetails;
