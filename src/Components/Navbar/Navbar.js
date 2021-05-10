import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import FriendsList from "./FriendsList/FriendsList.js";

const Navbar = (props) => {
  return (
    <nav className={s.navigation}>
      <ul className={s.navigation__list}>
        <li className={s.navigation__item}>
          <NavLink activeClassName={s.active} to="/profile">
            Profile
          </NavLink>
        </li>
        <li className={s.navigation__item}>
          <NavLink activeClassName={s.active} to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li className={s.navigation__item}>
          <NavLink activeClassName={s.active} to="/users">
            Users
          </NavLink>
        </li>
        <li className={s.navigation__item}>
          <NavLink activeClassName={s.active} to="/news">
            News
          </NavLink>
        </li>
        <li className={s.navigation__item}>
          <NavLink activeClassName={s.active} to="/music">
            Music
          </NavLink>
        </li>
        <li className={s.navigation__item}>
          <NavLink activeClassName={s.active} to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
      <FriendsList state={props.friends} />
    </nav>
  );
};

export default Navbar;
