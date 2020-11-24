import React, { useState } from "react";

export default (url) => {
  const [value, setValue] = useState(initialVal);

  const setVal = (val) => {
    setValue(val);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const resetVal = () => {
    setValue("");
  };

  return [value, handleChange, setVal, resetVal];
};
