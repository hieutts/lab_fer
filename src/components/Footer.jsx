import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Footer() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return  (
    <footer className="  d-flex align-items-center justify-content-center p-2" style={{bottom: '0px', 
    backgroundColor: theme.backgroundColor, color:theme.color}}>
        Copyright by Lurid website
    </footer>
  )
}
