import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "./../../../assets/images/userPhoto.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div className={s.main__content}>
      <img
        src={profile.photos.large != null ? profile.photos.small : userPhoto}
        width="100"
        alt="User icon"
      />
      <p>{profile.fullName != null ? profile.fullName : "no nickname"}</p>
      {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

export default ProfileInfo;
