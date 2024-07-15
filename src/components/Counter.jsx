import React, { useState } from "react";

function Counter() {
  let [num, setnum] = React.useState(0);
  function minusButton() {
    if (num <= 0) {
      window.alert("stop");
    } else {
      setnum(num - 1);
    }
  }

  function plusButton() {
    if (num >= 9) {
      window.alert("stop");
    } else {
      setnum(num + 1);
    }
  }
  return (
    <div className="container">
      <div>
        <button type="button" onClick={minusButton}>
          -
        </button>
      </div>
      <div>
        <span>{num}</span>
      </div>
      <div>
        <button type="button" onClick={plusButton}>
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
