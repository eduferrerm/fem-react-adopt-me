import { Component } from "react";
import { Navigate, Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true, redirect: false };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          There was an error.
          <br />
          <Link to="/">Click here</Link> to go back to the homepage
          <br />
          or wait 5 seconds and we&apos;ll do it for you =(.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
