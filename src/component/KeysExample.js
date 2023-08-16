import React, { useState } from "react";

function KeysExample() {
  const [list, setList] = useState([
    { id: 1, framework: "Vs Code" },
    { id: 2, framework: "Spring boot" },
    { id: 3, framework: "Brackets" },
  ]);

  const removeList = (index) => {
    const newList = list.filter((value) => value.id != index);
    setList(newList);
  };

  return (
    <div>
      <ol>
        {list.map((frame) => {
          return (
            <>
              <li key={frame.id}>{frame.framework}</li>
              <button onClick={() => removeList(frame.id)}>Delete</button>
            </>
          );
        })}
      </ol>

      {/* {list.map((frame) => {
        return (
          <ol>
            <li>{frame.framework}</li>
            <button onClick={() => remove(frame.id)}>click </button>
          </ol>
        );
      })} */}
    </div>
  );
}

export default KeysExample;
