import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { thunkExperiment } from "../actions/actions";

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
      <button onClick={() => dispatch(thunkExperiment())}>Show users</button>
    </>
  );
};

export default ChangeGreeting;
