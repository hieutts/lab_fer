import { createContext, useEffect, useState } from "react";

const themes = {
  dark: {
    
    backgroundColor: 'rgb(51,51,51)',
    color: 'white   ',
    backgroundColorItem: 'rgba(90, 80, 80, 0.7)',
    backgroundColorOut: 'black',
  },
  light: {
    backgroundColor: 'white', 
    backgroundColorOut: 'rgb(248,249,250)', 
    color: 'black',
  },
};
const initialState = {
  dark: false,
  theme: themes.light,
  toggle: () => {},
};
const ThemeContext = createContext(initialState)
function ThemeProvider({children}) {
    const [dark, setDark] = useState(false);

    useEffect(()=> {
        const isDark = localStorage.getItem('dark')==='true'
        setDark(isDark);
    }, [dark]);

    const toggle = () => {
        const isDark = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark);
    }

    const theme = dark ? themes.dark : themes.light
    return (  
        <ThemeContext.Provider value={{theme, dark, toggle}}>
            {children}
        </ThemeContext.Provider>
    );
}

export  {ThemeProvider, ThemeContext}; 