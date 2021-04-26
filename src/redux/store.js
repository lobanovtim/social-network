import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, massege: 'I\'am props', likesCount: 122},
                {id: 2, massege: 'I\'am props too', likesCount: 142},
                {id: 2, massege: 'I\'am props too', likesCount: 142},
                {id: 2, massege: 'I\'am props too', likesCount: 143},
            ],
            newPostText: 'blablablabla',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Misha'},
                {id: 4, name: 'Sveta'},
                {id: 5, name: 'Sasha'},
                {id: 5, name: 'Sasha'},
                {id: 5, name: 'Sasha'},
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 1, message: 'Hi-hi'},
                {id: 1, message: 'Yoooo'},
                {id: 1, message: 'Yoooo'},
                {id: 1, message: 'Yoooo'},
                {id: 1, message: 'Yoooo'},
                {id: 1, message: 'Yoooo'},
            ],
            newMessageBody: '',
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Dima'},
                {id: 3, name: 'Misha'},
            ]
        },
    },
    _callSubscriber() {
        console.log('sdcds')
    },
    getState() {
        return this._state;
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPosrText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}



export default store;