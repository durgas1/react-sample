import React, { Component } from "react";

function ListExample() {
  const menus = ["Home", "Contact", "About us", "Blog"];
  const name = ["durga", "anu", "meera"];

  const nameList = name.map((e) => {
    return <li>{e}</li>;
  });
  const displayMenu = menus.map((menuItems) => {
    return <li>{menuItems}</li>;
  });
  return (
    <div>
      <ul>{nameList}</ul>
      <h1>List Example</h1>
      <ul>{displayMenu}</ul>
      <h1>Manually Defined List</h1>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About Us</li>
        <li>Blog</li>
      </ul>
    </div>
  );
}

export default ListExample;
