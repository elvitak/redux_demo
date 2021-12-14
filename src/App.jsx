import React from "react";
import ChangeGreeting from "./state/components/ChangeGreeting";
import DisplayGreeting from "./state/components/DisplayGreeting";

const App = () => {
  return (
    <>
      <DisplayGreeting />
      <ChangeGreeting />
    </>
  );
};

export default App;
