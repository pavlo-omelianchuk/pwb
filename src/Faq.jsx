import React, { useState } from "react";

export const FaqComponent = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return <button onClick={handleToggle}>{!toggle ? "Not Toggled" : "Toggled"}</button>;
};
