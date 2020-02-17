import React, {useState, useEffect} from 'react';

const ThemeContext = React.createContext(3);

function ThemeProvier({children}) {
  let [theme, setTheme] = useState(3);

  useEffect(() => {
    document.body.className = `scheme${theme}`;
  }, [theme]);

  return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>
}


export default ThemeProvier;

export {
  ThemeContext
};