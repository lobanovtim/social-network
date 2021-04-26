import s from './FriendsList.module.css';
import { NavLink } from 'react-router-dom';


const FreidsList = (props) => {

    const friendsList = props.map( friend => {
        return(
            <li className={s.myFriends__item}>
                <img className={s.myFriends__avatar} width="20" height="20" src="" alt="Friend's avatar"/>
                <NavLink className={s.myFriends__link} to={`/friends/${friend.id}`}>
                    { friend.name }
                </NavLink>
            </li>
        )
    })

    return (
            <div className={s.myFriends}>
                <h3 className={s.myFriends__title}>My friends</h3>
                <ul className={s.myFriends__list}>
                        { friendsList }
                </ul>
            </div>
    )
}

export default FreidsList;