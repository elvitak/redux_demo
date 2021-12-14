import React from "react";
import { useSelector } from "react-redux";

const DisplayGreeting = () => {
  const { greeting } = useSelector((state) => state);
  return <div>{greeting}</div>;
};

export default DisplayGreeting;
