import { useState } from "react";

export default (initialVal) => {
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
