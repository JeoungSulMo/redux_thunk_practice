import React from "react";
import GithubProfileLoader from "./components/GithubProfileLoader";
import CounterContainer from "./containers/CounterContainer";
import TodoApp from "./containers/TodoApp";

const App: React.FC = () => {
  return (
    <>
      <CounterContainer />
      <TodoApp />
      <GithubProfileLoader />
    </>
  );
};

export default App;
