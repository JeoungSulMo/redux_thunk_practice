import { createAsyncAction } from "typesafe-actions";
import { UserToken } from "../../api/fitdaLogin";
import { AxiosError } from "axios";

export const GET_USER_TOKEN = "fitdaLogin/GET_USER_TOKEN";
export const GET_USER_TOKEN_SUCCESS = "fitdaLogin/GET_USER_TOKEN_SUCCESS";
export const GET_USER_TOKEN_ERROR = "fitdaLogin/GET_USER_TOKEN_ERROR";

export const getUserTokenAsync = createAsyncAction(
  GET_USER_TOKEN,
  GET_USER_TOKEN_SUCCESS,
  GET_USER_TOKEN_ERROR
)<undefined, UserToken, AxiosError>();
