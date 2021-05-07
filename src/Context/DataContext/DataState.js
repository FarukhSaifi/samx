import React, { useReducer } from "react";
import DataContext from "./DataContext";
import DataReducer from "./DataReducer";
import db from "./db";
import { GET_ART, FILTER_POST, SET_LOADING } from "../types";

const DataState = props => {
  const initialState = {
    profile: db?.profile,
    posts: db?.posts,
    categorys: db?.categorys,
    artBoard: null,
    loading: false,
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  // Clear users
  // const ClearUsers = () => dispatch({ type: CLEAR_USER });

  // Get Art Single
  const getArt = artId => {
    setLoading();
    const artObj = state?.posts.filter(t => t?.postId === Number(artId));
    dispatch({ type: GET_ART, payload: artObj[0] });
  };

  // fitler By Catagory
  const filterPost = artCat => {
    if (artCat === "All") {
      dispatch({ type: FILTER_POST, payload: db?.posts });
    } else {
      const filterItems = db?.posts.filter(t => t?.category === artCat);
      console.log(filterItems);
      dispatch({ type: FILTER_POST, payload: filterItems });
    }
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
      value={{
        profile: state.profile,
        posts: state.posts,
        artBoard: state.artBoard,
        loading: state.loading,
        categorys: state.categorys,
        getArt,
        filterPost,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
