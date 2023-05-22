import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// children is those component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// to update the state value 
export const useStateValue = () => useContext(StateContext);