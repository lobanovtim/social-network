import profileReducer, { addPostActionCreater, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, massege: "I'am props", likesCount: 122 },
    { id: 2, massege: "I'am props too", likesCount: 142 },
    { id: 3, massege: "I'am props too", likesCount: 142 },
    { id: 4, massege: "I'am props too", likesCount: 143 },
  ]
};

test('length of posts should be incremented', () => {
  let action = addPostActionCreater("New post");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(5);
});

test('length of posts should be correct', () => {
  let action = addPostActionCreater("New post");
  let newState = profileReducer(state, action);
  expect(newState.posts[4].message).toBe("New post");
});

test('afer deleting length of posts should be decrement', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

test('afer deleting length should not be decrement if id is incorrect', () => {
  let action = deletePost(100);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});
