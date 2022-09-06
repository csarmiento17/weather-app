import React from "react";

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
    };
  }
  render() {
    return <div className="error-msg">{this.props.message}</div>;
  }
}

export default Error;
