import * as react from "react";
import { useEffect } from "react";

export const useInput = (name, defaultValue) => {




  const [value, setValue] = react.useState(defaultValue);

  const onChangeText = (text) => setValue(text);

  useEffect(() => {
  setValue(defaultValue ? defaultValue : '')
  }, [defaultValue])

  return { value, onChangeText, name };
};
