import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "./../../../assets/images/userPhoto.png";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  
//   let showContacts = () => {
//         let contacts = props.profile.contacts;
//         let socialNetworkName = Object.keys(contacts);
//         return <div>{
//       socialNetworkName.forEach((item) => {
//           return<div>
//           <p>{`${item}`}</p>
//           <p>{`${contacts[item]}`} </p>
//         </div>
//     })}
//     </div> 
//     }

  return (
    <div className={s.main__content}>
      <img
        src={
          props.profile.photos.large != null
            ? props.profile.photos.small
            : userPhoto
        }
        width="100"
        alt="User icon"
      />
      {/* <p>{props.profile.aboutMe != null ?  props.profile.aboutMe : 'no status yet' }</p> */}
      <p>{props.profile.fullName != null ? props.profile.fullName : 'no nickname'}</p>
      {/* <>{showContacts()}</> */}
      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
  );
};

export default ProfileInfo;
