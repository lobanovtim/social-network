import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main className={s.main__content}>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        saveProfile={props.saveProfile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer store={props.store} />
    </main>
  );
};

export default Profile;
