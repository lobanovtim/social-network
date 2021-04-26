import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div>Avatar</div>
            <div>{props.massege}</div>
            <div>({props.likesCount})</div>
        </div>
    )
}

export default Post;