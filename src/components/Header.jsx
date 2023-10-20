import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Header() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <nav
      className="navbar navbar-expand-sm fixed-top navbar-light shadow-sm row p-4 justify-content-start  "
      style={{
        height: '70px',
        backgroundColor: theme.backgroundColor,
         
      }}
    >
      <div className="container-fluid  flex align-content-center justify-content-center">
        <a className="navbar-brand col-sm-3" href="#">
          <img
            src="assets/logo1.png"
            alt="logo"
            style={{
              width: '50px',
              // justifyContent: 'start',
            }}
          />
          <span className=" px-3 fw-bolder fs-3" style={
            {
              color: 'rgb(217,83,79)'
            }
          }>LURID </span>
        </a>

        <div
          className="navbar-nav align-middle align-items-center col-sm-6 "
          style={{ height: '70px' }}
        >
          <div
            className="nav-item col-sm-2  border-success   "
            style={{ height: '70px', lineHeight: '70px',  color: 'black', }}
          >
            <Link to="/" className="text-decoration-none m-2 fs-6   " style={{color: theme.color}}>
              Home
            </Link>
          </div>
          <div
            className="nav-item  col-sm-2   border-success"
            style={{ height: '70px', lineHeight: '70px' }}
          >
            <Link to="/about" className="text-decoration-none p-2 fs-6  " style={{color: theme.color}}>
              About
            </Link>
          </div>
          <div
            className="nav-item  col-sm-2   border-success"
            style={{ height: '70px', lineHeight: '70px' }}
          >
            <Link to="/contact" className="text-decoration-none p-2  fs-6  " style={{color: theme.color}}>
              Contact
            </Link>
          </div>
        </div>
        {/* <div className=''> <AccountCircleOutlinedIcon/></div> */}
        <div className="col-sm-3">
          <div
            className="rounded-circle bg-secondary justify-content-center align-items-center d-flex "
            style={{ width: '40px', height: '40px' }}
            onClick={toggle}
          >
            <LightModeIcon className="text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}
