import s from "./Paginator.module.css";

let Paginator = ({ currentPage, onPageChanged, totalUsersCount, pageSize }) => {
  //   let pagesCount = Math.ceil(totalUsersCount / pageSize);

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
                currentPage === p ? s.selectedPage : s.paginationList_item
              }
              onClick={(e) => onPageChanged(p)}
              key={i}
            >
              {p}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Paginator;
