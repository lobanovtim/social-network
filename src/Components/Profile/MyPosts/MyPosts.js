import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, requireField } from "../../../utils/validators/validators";
import { FormControl } from "../../Common/FormsControls/FormsControls";
import s from "./MyPosts.module.css";
import Post from "./Post/Post.js";

const maxLength10 =  maxLengthCreator(10)

const MyPosts = (props) => {

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  const postsElements = props.posts.map((post) => (
    <Post massege={post.message} likesCount={post.likesCount} key={post.id} />
  ));
  return (
    <div>
      <h2>My post</h2>
      <AddNewPostReduxForm onSubmit={onAddPost} />
      <div>{postsElements}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={"newPostText"}
        placeholder={"Enter text your post"}
        component={FormControl}
        elType={"textarea"}
        validate={[requireField, maxLength10]}
      />
      <button className={s.add}>
        Add
      </button>
    </form>
  );
};

const AddNewPostReduxForm = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);
export default MyPosts;
