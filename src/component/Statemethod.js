import React, { Component } from "react";

export class Statemethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      age: "",
    };
  }
  typeMethode(e) {
    this.setState({
      firstname: e.target.value,
    });
  }
  textMethode(e) {
    this.setState({
      lastname: e.target.value,
    });
  }
  numMethode(e) {
    this.setState({
      age: e.target.value,
    });
  }
  overClick(e) {
    console.log(this.state.firstname);
    console.log(this.state.lastname);
    console.log(this.state.age);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.overClick.bind(this)}>
          <label>
            firstname:
            <input type="text" onChange={this.typeMethode.bind(this)}></input>
          </label>

          <label>
            lastname:
            <input type="text" onChange={this.textMethode.bind(this)}></input>
          </label>
          <label>
            age:
            <input type="text" onChange={this.numMethode.bind(this)}></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Statemethod;
