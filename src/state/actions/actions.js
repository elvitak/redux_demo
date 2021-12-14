import axios from "axios";

export const thunkExperiment = () => {
  //   return (dispatch) => {
  //     axios.get("https://reqres.in/api/users").then((response) => {
  //       dispatch({
  //         type: "SET_USERS",
  //         payload: response.data.data,
  //       });
  //     });
  return async (dispatch) => {
    const response = await axios.get("https://reqres.in/api/users");

    dispatch({
      type: "SET_USERS",
      payload: response.data.data,
    });
  };
};
