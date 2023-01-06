import React, { useEffect, useState } from "react";

const PREFIX = "codepen-clone-";

const useLocalStorage = (key, initialValue) => {
  console.log("key", key);
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(null);
  useEffect(() => {
    const data = localStorage.getItem(prefixedKey);
    if (data !== null) {
      return setValue(JSON.parse(data));
    }
    if (typeof initialValue === "function") {
      return setValue(initialValue());
    }
    setValue(initialValue);
  }, []);

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
