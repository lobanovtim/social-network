import { connect } from "react-redux";
import { addPostActionCreater } from "../../../redux/profile-reducer.js";
import MyPosts from "./MyPosts.js";

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreater());
//   };

//   let onPostChange = (text) => {
//     let action = updateNewPostTextActionCreater(text);
//     props.store.dispatch(action);
//   };

//   return (
//     <MyPosts
//       updateNewPostTextAction={onPostChange}
//       addPost={addPost}
//       posts={state.profilePage.posts}
//       newPostText={state.profilePage.newPostText}
//       />
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreater(newPostText));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
