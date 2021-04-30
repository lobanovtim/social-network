import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem.js";
import Message from "./Message/Message.js";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { Redirect } from "react-router";
import { FormControl } from "../Common/FormsControls/FormsControls";
import {
  maxLengthCreator,
  requireField,
} from "../../utils/validators/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  const dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}></DialogItem>
  ));
  const messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let addNewMessage = (values) => {
    props.addNewMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialog__items}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <AddMessageReduxForm onSubmit={addNewMessage} />
    </div>
  );
};

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.entryFeild__wrapper}>
      <Field
        className={s.entryFeild}
        component={FormControl}
        validate={[requireField, maxLength100]}
        name={"newMessageBody"}
        elType={"textarea"}
        placeholder={"Enter your message"}
      />
      <button className={s.add}>Add</button>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
