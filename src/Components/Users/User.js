import s from "./Users.module.css";
import userPhoto from "./../../assets/images/userPhoto.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, follow, unfollow, ...props }) => {
  return (
    <div className={s.user__wrapper}>
      <div>
        <NavLink to={`profile/${user.id}`}>
          <img
            className={s.user__img}
            src={user.photos.small != null ? user.photos.small : userPhoto}
            width="60"
            alt="User's avatar"
          />
        </NavLink>
        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              follow(user.id);
            }}
          >
            follow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            UnFollow
          </button>
        )}
      </div>
      <div className={s.user__about}>
        <span>{user.name}</span>
        <br />
        <span>{user.status}</span>
      </div>
    </div>
  );
};
export default User;
