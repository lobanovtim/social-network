import preloader from "../../../assets/images/loading-svgrepo-com.svg";
import s from "./Preloader.module.css";

const Preloader = (props) => {
  return (
    <>
      {
        <img className={s.preloader} src={ preloader } width="30" height="30" alt="Loading spiner"/>
      }
    </>
  );
};

export default Preloader;
