const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Andrey" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Misha" },
    { id: 4, name: "Sveta" },
    { id: 5, name: "Sasha" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hi-hi" },
    { id: 3, message: "Yoooo" },
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    default:
      return state;
  };
};

export const addNewMessageCreater = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });


export default dialogsReducer;
