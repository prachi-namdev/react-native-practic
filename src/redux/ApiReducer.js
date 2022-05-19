import React from "react";
import ActionTypes, {} from "./ActionTypes";

const initialState = {
  loading: false,
  error: "",
  data: "",
};
const ApiReducer = (state=initialState, action) => {
    switch(action.type){
        case ActionTypes.API_SUCCESS:
            return{
                ...state,
                data: action.payload,
                loading:false
            };
        case ActionTypes.API_PENDING:
            return{
                ...state,
                loading:true
            };
        case ActionTypes.API_ERROR:
            return{
                ...state,
                error:action.payload,
                loading:false
            };

        default:
                return state;    
        }    
        
    
    
};

export default ApiReducer;
