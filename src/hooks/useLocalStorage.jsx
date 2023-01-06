import React, { useEffect } from "react";

const PREFIX = "codepen-clone-";

const useLocalStorage = ({ key, initialValue }) => {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(null);
  useEffect(() => {
    const data = localStorage.getItem(key);
    if (data !== null) {
      return setValue(data);
    }
    if (typeof initialValue === "function") {
      returnsetValue(initialValue());
    }
    setValue(initialValue);
  }, []);

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
