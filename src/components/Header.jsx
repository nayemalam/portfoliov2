// import { ThemeContext } from "../App";
import { LogoIcon, MoonIcon, SunIcon } from "./assets/icons";
import React from 'react'

const Header = () => {
//   const { isDark, setIsDark } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="container">
        <div className="logo-wrapper">
          <div className="logo">
            {/* <LogoIcon /> */}
            <span>JS Snipets</span>
          </div>
          {/* <button onClick={() => setIsDark(!isDark)} className="icon">{isDark ? <MoonIcon /> : <SunIcon />}</button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;