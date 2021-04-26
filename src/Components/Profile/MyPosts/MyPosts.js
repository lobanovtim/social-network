import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.js';
// import { addPostActionCreater, updateNewPostTextActionCreater} from './../../../redux/profile-reducer.js'

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostTextAction(text);
    };
    const postsElements = props.posts.map(post => <Post massege={post.message} likesCount={post.likesCount} key={post.id}/>);
    return (
        <div>
            <textarea ref={newPostElement} onChange={ onPostChange } value={ props.newPostText } />
            <button onClick={ addPost } className={s.add}>Add</button>
                { postsElements }
        </div>
    )
}
export default MyPosts;