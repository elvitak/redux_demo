import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ChangeGreeting = () => {
  const [newGreeting, setNewGreeting] = useState();
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        onChange={(event) => setNewGreeting(event.target.value)}
      />
      <button
        onClick={() =>
          dispatch({ type: "CHANGE_GREETING", payload: newGreeting })
        }
      >
        Click me
      </button>
    </>
  );
};

export default ChangeGreeting;
