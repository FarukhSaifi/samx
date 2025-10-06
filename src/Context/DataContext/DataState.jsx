import siteConfig from "@context/siteConfig.js";
import { FILTER_POST, GET_ART, SET_LOADING } from "@context/types.js";
import React, { useCallback, useMemo, useReducer } from "react";
import DataReducer from "./DataReducer.js";
import db from "./db.js";

// Create the context
const DataContext = React.createContext();

const DataState = props => {
  const initialState = useMemo(
    () => ({
      profile: db?.profile,
      posts: db?.posts,
      categorys: db?.categorys,
      artBoard: null,
      loading: false,
    }),
    []
  );

  const [state, dispatch] = useReducer(DataReducer, initialState);

  // Get Art Single - memoized to prevent unnecessary re-renders
  const getArt = useCallback(
    artId => {
      dispatch({ type: SET_LOADING });
      const artObj = state?.posts.filter(t => t?.postId === Number(artId));
      dispatch({ type: GET_ART, payload: artObj[0] });
    },
    [state?.posts]
  );

  // Filter By Category - memoized to prevent unnecessary re-renders
  const filterPost = useCallback(artCat => {
    if (artCat === "All") {
      dispatch({ type: FILTER_POST, payload: db?.posts });
    } else {
      const filterItems = db?.posts.filter(t => t?.category === artCat);
      dispatch({ type: FILTER_POST, payload: filterItems });
    }
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      profile: state.profile,
      posts: state.posts,
      artBoard: state.artBoard,
      loading: state.loading,
      categorys: state.categorys,
      config: siteConfig,
      getArt,
      filterPost,
    }),
    [state.profile, state.posts, state.artBoard, state.loading, state.categorys, getArt, filterPost]
  );

  return <DataContext.Provider value={contextValue}>{props.children}</DataContext.Provider>;
};

// Export both the context and the provider component
export { DataContext };
export default DataState;
