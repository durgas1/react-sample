import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";
import { icons } from "react-icons";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      sample: "start",
      count: 1,
    };
    this.changeState = this.changeState.bind(this);
  }
  // componentWillMount() {
  //   alert("are u ready now");
  // }
  changeState() {
    this.setState({
      sample: "play now",
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.sample}</h1>
        <h1>{this.state.count}</h1>
        <h3>
          {" "}
          <FontAwesomeIcon icon="fa fa-child " />
        </h3>

        <h1>{this.props.children}</h1>
        <h1>{this.props.name ? "true" : "false"}</h1>

        <h1>{this.props.func("add")}</h1>
        <h1>{this.props.arr}</h1>
        <h1>
          {this.props.arr}
          {this.props.name}
        </h1>
        <h1> {this.props.string}</h1>

        <button onClick={() => this.changeState()}>Changing State</button>
      </div>
    );
  }
  shouldComponentUpdate() {
    console.log("hi");
    return true;
  }
}
Home.propTypes = {
  arr: PropTypes.array.isRequired,
  number: PropTypes.number,
  func: PropTypes.func,
  string: PropTypes.string,
};
Home.defaultProps = {
  arr: [0, 1, 2],
  number: 244,
  func: function (x) {
    return x;
  },
  string: "durga.s",
};

export default Home;
