import React from "react";
import ActionTypes from "../redux/ActionTypes";

export const fetchData = () => ({
  type: ActionTypes.API_PENDING,
});

export const fetchSuccess = (data) => ({
  type: ActionTypes.API_SUCCESS,
  payload: data,
});

export const fetchError = (error) => ({
  type: ActionTypes.API_ERROR,
  payload: error,
});
