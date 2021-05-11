const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const profileReduser = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 3,
        message: state.newPostText,
        //message -получаю значение напрямую из state
        count: 0,
      };
      state.post.push(newPost);
      /* урок 32 newPost переменная чуть выше*/
      state.newPostText = ""; // стираю текст в textarea
      return state; //после return функция не выполняется это вместо break
    case UPDATE_NEW_POST_TEXT:
      /*функция для побуквенной 
               отрисовки при изменении в ul */
      state.newPostText =
        action.newText; /* урок 34 
    тут запись текста в state*/

      return state;
    default:
      return state;
  }
};
export const addhhPostActionCreator = () => ({ type: ADD_POST });
export const onPostChangeActionCreator = (newtext5) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newtext5,
});
export default profileReduser;
