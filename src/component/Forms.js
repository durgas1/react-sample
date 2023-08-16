import React, { Component } from "react";

export class Forms extends Component {
  constructor(props) {
    super(props);
    this.newform = React.createRef();
    this.submitMethode = this.submitMethode.bind(this);
  }
  submitMethode() {
    alert(
      this.refs.name.value +
        "" +
        this.refs.password.value +
        "" +
        this.refs.number.value +
        "" +
        this.refs.email.value +
        "" +
        this.refs.date.value +
        " " +
        this.refs.city.value +
        "" +
        this.refs.gender.value +
        "" +
        this.refs.month.value
    );
    // console.log(this.refs.password.value);
  }

  getCity(e) {
    alert(e.target.value);
  }
  getGender(e) {
    alert(e.target.value);
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.submitMethode}>
            <label>
              Name:
              <input type="text" ref="name"></input>
            </label>
            <br></br>
            <label>
              password:
              <input type="password" ref="password"></input>
            </label>
            <br></br>
            <label>
              Number:
              <input type="number" ref="number"></input>
            </label>
            <br></br>
            <label>
              Email:
              <input type="email" ref="email"></input>
            </label>
            <br></br>
            <label>
              City:
              <select onChange={this.getCity.bind(this)}>
                <option name="city" value="CHENNAI" ref="city">
                  CHENNAI
                </option>
                <option name="city" value="MUMBAI" ref="city">
                  MUMBAI
                </option>
                <option name="city" value="DELHI" ref="city">
                  DELHI
                </option>
              </select>
            </label>
            <br></br>
            <lable onChange={this.getGender.bind(this)}>
              Gender :
              <input name="gender" type="radio" value="male" ref="gender" />
              MALE
              <input name="gender" type="radio" value="female" ref="gender" />
              FEMALE
            </lable>
            <br></br>
            <lable>
              Date :<input type="date" ref="date"></input>
            </lable>
            <br></br>
            <lable>
              Month:
              <input type="month" ref="month"></input>
            </lable>
            <br></br>
            <input type="submit" value="submit"></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Forms;
