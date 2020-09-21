import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { TokenAction } from "./types";
import { getUserToken } from "../../api/fitdaLogin";
import { getUserTokenAsync } from "./actions";

export function getUserTokenThunk(
  email: string,
  password: string
): ThunkAction<void, RootState, null, TokenAction> {
  return async (dispatch) => {
    const { request, success, failure } = getUserTokenAsync;
    dispatch(request());
    try {
      const LoginToken = await getUserToken(email, password);
      dispatch(success(LoginToken));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}
