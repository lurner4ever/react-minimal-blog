import React from "react";
import classnames from "classnames";

function Button({ title, visibility }) {
  console.log(visibility);
  const classes = classnames(
    "bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
    // { visible: !visibility },
    // { invisible: !visibility }
  );
  return (
    <>
      <button className={classes}>{title}</button>
    </>
  );
}

export default Button;
