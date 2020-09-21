import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { UserToken } from "../../api/fitdaLogin";

export type TokenAction = ActionType<typeof actions>;

export type TokenState = {
  userToken: {
    loading: boolean;
    error: Error | null;
    data: UserToken | null;
  };
};
