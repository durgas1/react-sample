import React, { useEffect, useState } from "react";

function Functioncomponent() {
  const [method, setMethod] = useState(0);
  const [test, setTest] = useState("");

  useEffect(() => {
    console.log(test);
  });

  return (
    <div>
      <div>
        <input
          type="text"
          value={test}
          onChange={(e) => {
            setTest(e.target.value);
          }}
        ></input>
        <h1>{method}</h1>
        <button
          onClick={() => {
            setMethod(method + 1);
          }}
        >
          on
        </button>
      </div>
    </div>
  );
}

export default Functioncomponent;
