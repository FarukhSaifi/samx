import React, { useReducer } from "react";
import DataContext from "./DataContext";
import DataReducer from "./DataReducer";
import db from "./db";
import { GET_ART, SET_LOADING } from "../types";

const DataState = props => {
  const initialState = {
    profile: db?.profile,
    posts: db?.posts,
    artBoard: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  // Clear users
  // const ClearUsers = () => dispatch({ type: CLEAR_USER });

  // Get Repos
  const getArt = artId => {
    setLoading();
    const artObj = state?.posts.filter(t => t?.postId === Number(artId));
    dispatch({ type: GET_ART, payload: artObj[0] });
  };

  // set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  //Alert
  // const setAlert = ({ msg, type }) => {
  //   dispatch({ type: SET_ALERT, payload: { msg, type } });

  //   setTimeout(() => {
  //     dispatch({ type: REMOVE_ALERT });
  //   }, 3000);
  // };

  return (
    <DataContext.Provider
      value={{ profile: state.profile, posts: state.posts, artBoard: state.artBoard, loading: state.loading, getArt }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
