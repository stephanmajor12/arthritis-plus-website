import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';

function Navbar(props) {
  const [showMenu, setShowMenu] = useState(false);
  const authToken = Cookies.get('authToken');
  const { loggedIn, onLogout } = props;

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  return (
    <div>
      {props.loggedIn ? ( // User is logged in
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <NavLink className={"navbar-brand"} exact to="/">
            <img src={require('../updated_logo_white_background.png')} className='img-responsive' style={{marginLeft: '2rem'}} height="60" width="60" />
            </NavLink>
            <button className="navbar-toggler" type="button" onClick={handleMenuClick}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse justify-content-end ${showMenu ? ' show' : ''}`} id="navbarNav">
              <ul className="navbar-nav ml-auto" style={{ marginRight: '20px' }}>
                <li className="nav-item active">
                  <NavLink className={"nav-link"} exact to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={"nav-link"} exact to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={"nav-link"} exact to="/services">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={"nav-link"} exact to="/links">Learn More</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={"nav-link"} exact to="/provider">Provider Portal</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={"nav-link"} exact to="/" onClick={onLogout}>Logout</NavLink>
                </li>
              </ul>
            </div>
          </nav>
      ) : ( // User is not logged in
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <NavLink className={"navbar-brand"} exact to="/">
        <img src={require('../updated_logo_white_background.png')} className='img-responsive' style={{marginLeft: '2rem'}} height="60" width="60" />
        </NavLink>
        <button className="navbar-toggler" type="button" onClick={handleMenuClick}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${showMenu ? ' show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto" style={{ marginRight: '20px' }}>
            <li className="nav-item active">
              <NavLink className={"nav-link"} exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={"nav-link"} exact to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={"nav-link"} exact to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={"nav-link"} exact to="/links">Learn More</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={"nav-link"} exact to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      )}
    </div>
  );
}

export default Navbar;
