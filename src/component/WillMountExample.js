import React, { Component } from "react";

class WillMountExample extends Component {
  constructor(props) {
    super(props);
    //default state
    this.state = {
      sample: "fine",
      count: 0,
      play: 1,
    };
    // this.changeState = this.changeState.bind(this);
  }
  componentWillMount() {
    console.log("Before mounting the component");
  }
  componentDidMount() {
    console.log("After Mounting the component");
  }
  componentWillMount() {
    console.log("Before Update");
    console.log(this.state.sample);
  }
  componentDidUpdate(props) {
    console.log("After Update");
    console.log(this.state.sample);
  }
  changeState() {
    this.setState({
      sample: "okay",
      count: 3,
      play: 2,
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.sample}</h1>
        <h1>{this.state.count}</h1>
        <h1>{this.state.play}</h1>
        <button onClick={this.changeState.bind(this)}>Changing State</button>
      </div>
    );
  }
  shouldComponentUpdate(newState) {
    console.log("Component can update");
    return true;
  }
}

export default WillMountExample;
