import { createReducer } from "typesafe-actions";
import { TokenState, TokenAction } from "./types";
import {
  GET_USER_TOKEN,
  GET_USER_TOKEN_SUCCESS,
  GET_USER_TOKEN_ERROR,
} from "./actions";

const initialState: TokenState = {
  userToken: {
    loading: false,
    error: null,
    data: null,
  },
};

const token = createReducer<TokenState, TokenAction>(initialState, {
  [GET_USER_TOKEN]: (state) => ({
    ...state,
    userToken: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_USER_TOKEN_SUCCESS]: (state, action) => ({
    ...state,
    userToken: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_USER_TOKEN_ERROR]: (state, action) => ({
    ...state,
    userToken: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default token;
