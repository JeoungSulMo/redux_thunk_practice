import React, { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { getUserTokenThunk } from "../modules/fitda";

function FitdaLoginTokenLoader() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.loginToken.userToken
  );
  const dispatch = useDispatch();

  const onSubmitUserInf = () => {
    dispatch(getUserTokenThunk(email, password));
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePW = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <input onChange={onChangeEmail} value={email} placeholder="email" />
      <input onChange={onChangePW} value={password} placeholder="password" />
      <button onClick={onSubmitUserInf}>조회</button>

      {loading && <p style={{ textAlign: "center" }}>로딩중..</p>}
      {error && <p style={{ textAlign: "center" }}>에러 발생!</p>}
      {data && <div>hi {data.token}</div>}
    </>
  );
}

export default FitdaLoginTokenLoader;
