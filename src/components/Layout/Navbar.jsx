import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleShowMbileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div>
      <nav className="navbar is-link" role="navigation" aria-label="main navigation">
        <div className="container is-max-desktop">
          <div className="navbar-brand">
            <Link to={'/'} className="navbar-item is-size-4 is-family-monospace">
              Rick and Morty
            </Link>
            <a
              onClick={toggleShowMbileNav}
              role="button"
              className={showMobileNav ? 'navbar-burger is-active' : 'navbar-burger'}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className={showMobileNav ? 'navbar-menu py-0 is-active' : 'navbar-menu'}>
            <div className="navbar-end">
              <NavLink to="/" onClick={toggleShowMbileNav} className="navbar-item">
                Characters
              </NavLink>

              <NavLink to="/episodes" onClick={toggleShowMbileNav} className="navbar-item">
                Episodes
              </NavLink>

              <NavLink to="/locations" onClick={toggleShowMbileNav} className="navbar-item">
                Locations
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
