import React from "react";

function About(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.value}</h1>
      <h1>{props.children}</h1>
    </div>
  );
}

export default About;
