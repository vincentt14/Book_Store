import { useState } from "react";

const useInput = (defaultValue: any) => {
  const [value, setValue] = useState(defaultValue);
  const handleValueChange = (e: any) => {
    setValue(e.target.value);
  };
  return [value, handleValueChange];
};

export default useInput;
