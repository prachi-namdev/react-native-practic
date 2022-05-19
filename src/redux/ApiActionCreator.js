import axios from "axios";
import React from "react";
import { fetchData, fetchSuccess, fetchError } from "./ApiAction";

const ApiActionCreator = (url) => (dispatch) => {
  dispatch(fetchData());

  return new Promise(() => {
    axios
      .get(url)
      .then((Response) => {
        dispatch(fetchSuccess(Response.data));
      })
      .catch((Error) => {
        dispatch(fetchError(Error));
        console.log(Error);
      });
  });
};

export default ApiActionCreator;
