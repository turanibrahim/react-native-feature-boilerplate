import createReducer from 'app/lib/createReducer';
import * as types from './types';

const initialState = {
  isLoggedIn: false,
  id: 0,
  username: '',
  password: '',
};

export const authReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](draft, action) {
    draft.username = action.username;
    draft.password = action.password;
    draft.isLoggedIn = true;
  },
  [types.LOGIN_LOADING_ENDED](draft) {
    return { ...draft };
  },
  [types.LOGIN_RESPONSE](draft, action) {
    draft.id = action.response.id;
    draft.isLoggedIn = true;
  },
  [types.LOGIN_FAILED](draft) {
    draft.isLoggedIn = false;
  },
  [types.LOG_OUT](draft) {
    draft.isLoggedIn = false;
  },
});
