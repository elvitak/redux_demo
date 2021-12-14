import React, { useState } from "react";

const App = () => {
  const [greeting] = useState("Hello Mars");
  return <div>{greeting}</div>;
};

export default App;
