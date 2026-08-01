import { NavLink } from 'react-router';

const getNavLinkClass = ({ isActive }) => (isActive ? 'active' : undefined);

const NavBar = () => {
  return (
    <nav className="nav">
      <NavLink className={getNavLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClass} to="/mailboxes">
        Mailboxes
      </NavLink>
      <NavLink className={getNavLinkClass} to="/new-mailbox">
        New Mailbox
      </NavLink>
    </nav>
  );
};

export default NavBar;
