import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "./../../../assets/images/userPhoto.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, ...props}) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={s.main__content}>
      <img
        src={profile.photos.large != null ? profile.photos.small : userPhoto}
        width="100"
        alt="User icon"
      />
      <p>{profile.fullName != null ? profile.fullName : "no nickname"}</p>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

export default ProfileInfo;
