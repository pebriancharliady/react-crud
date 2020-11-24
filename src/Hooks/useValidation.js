import React from "react";

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);

  const isUsername = (e) => {
    setValue(e.target.value);
  };

  const resetVal = () => {
    setValue("");
  };

  return [value, handleChange, resetVal];
};
