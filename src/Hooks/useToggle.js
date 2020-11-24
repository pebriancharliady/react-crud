import { useState } from "react";

export default function useToggleEdit (initialVal = false) {
  const [state, setState] = useState(initialVal);

  const toggleEdit = (inputName) => {
    setState(!state)
  };

  return [state, toggleEdit];
};
