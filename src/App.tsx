import React from "react";
import GithubProfileLoader from "./components/GithubProfileLoader";
import FitdaLoginTokenLoader from "./components/FitdaLoginTokenLoader";
import CounterContainer from "./containers/CounterContainer";
import TodoApp from "./containers/TodoApp";

const App: React.FC = () => {
  return (
    <>
      <CounterContainer />
      <TodoApp />
      <GithubProfileLoader />
      <FitdaLoginTokenLoader />
    </>
  );
};

export default App;
