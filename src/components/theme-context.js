import React, { useState, useEffect } from "react";

const ThemeContext = React.createContext(3);

function ThemeProvider({ children }) {
  let [theme, setTheme] = useState(3);
  console.log(theme);

  useEffect(() => {
    document.body.className = `scheme${theme}`;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export { ThemeContext };

export const colors = {
  prim: {
    1: "#263238",
    2: "#e0e0e0",
    3: "#212121",
    4: "#e8eaf6",
  },

  "prim-l": {
    1: "#4f5b62",
    2: "#ffffff",
    3: "#484848",
    4: "#ffffff",
  },

  "prim-d": {
    1: "#000a12",
    2: "#aeaeae",
    3: "#000000",
    4: "#b6b8c3",
  },

  sec: {
    1: "#80cbc4",
    2: "#ff8f00",
    3: "#9575cd",
    4: "#607d8b",
  },

  "sec-l": {
    1: "#b2fef7",
    2: "#ffc046",
    3: "#c7a4ff",
    4: "#8eacbb",
  },

  "sec-d": {
    1: "#4f9a94",
    2: "#c56000",
    3: "#65499c",
    4: "#34515e",
  },

  text: {
    1: "#fff",
    2: "#000",
    3: "#fff",
    4: "#000a12",
  },

  "text-sec": {
    1: "#e0e0e0",
    2: "#000",
    3: "#e0e0e0",
    4: "#000a12",
  },

  link: {
    1: "#80cbc4",
    2: "#0d47a1",
    3: "#9575cd",
    4: "#34515e",
  },
};
