import { createStore, combineReducers } from "redux";
import types from "./types";
let initialState = {
  input: { login: "", password: "", eMail: "" },
};
let appReducer = (state = initialState, action) => {
  let stateCopy = { ...state, input: { ...state.input } };
  switch (action.type) {
    case types.CHANGE_INPUT_FORM:
      stateCopy.input[action.inputType] = action.value;
      return stateCopy;
    case types.CREATE_USER:
      let { login, password, eMail } = action.payload;
      if (login.length > 5 && password.length > 5 && eMail.length > 5) {
        stateCopy.usersData.push(action.payload);
        console.log(`Юзер создан`);
      } else console.log("Ошибка, юзер не создан");
      for (let key in stateCopy.input) {
        stateCopy.input[key] = "";
      }
      return stateCopy;
    default:
      return stateCopy;
  }
};
let store = createStore(combineReducers({ appReducer }));

export let changeInputFormActionCreator = (inputType, value) => ({
  type: types.CHANGE_INPUT_FORM,
  inputType,
  value,
});
export let createUserActionCreator = (login, password, eMail) => ({
  type: types.CREATE_USER,
  payload: { login, password, eMail },
});
export default store;

window.store = store;
