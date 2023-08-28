import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>ROBOTS</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
