import axios from "axios";

export const thunkExperiment = () => {
  return async (dispatch) => {
    const response = await axios.get("https://reqres.in/api/users");

    dispatch({
      type: "SET_USERS",
      payload: response.data.data,
    });
  };
};
