import s from "./Users.module.css";
import userPhoto from "./../../assets/images/userPhoto.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  //   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= 11; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={s.paginationList}>
        {pages.map((p, i) => {
          return (
            <span
              className={
                props.currentPage === p ? s.selectedPage : s.paginationList_item
              }
              onClick={(e) => props.onPageChanged(p)}
              key={i}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div className={s.user__wrapper} key={u.id}>
          <div>
            <NavLink to={`profile/${u.id}`}>
              <img
                className={s.user__img}
                src={u.photos.small != null ? u.photos.small : userPhoto}
                width="60"
                alt="User's avatar"
              />
            </NavLink>
            {u.followed ? (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                follow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some((id) => id === u.id)}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                UnFollow
              </button>
            )}
          </div>
          <div>
            <span>{u.name}</span>
            <br />
            <span>{u.status}</span>
          </div>
          <div>
            <span>{"u.location.country"}</span>
            <br />
            <span>{"u.location.city"}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
