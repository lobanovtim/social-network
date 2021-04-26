import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.js';
import Message from './Message/Message.js';
import React from 'react';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    const dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}></DialogItem>)
    const messagesElements = state.messages.map(message => <Message message={message.message} key={message.id}/>)
    const newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.addNewMessage()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog__items}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <div className={s.entryFeild__wrapper}>
                <textarea className={s.entryFeild}
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                />
                <button onClick={ onSendMessageClick } className={s.add}>Add</button>
            </div>
        </div>
    )
}

export default Dialogs