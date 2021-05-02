import { SEARCH_USERS, GET_ART, CLEAR_USER, GET_REPOS, SET_LOADING } from "../types";

const DataReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };

    case GET_ART:
      return { ...state, artBoard: action.payload, loading: false };

    case GET_REPOS:
      return { ...state, repos: action.payload, loading: false };

    case CLEAR_USER:
      return { ...state, users: [], loading: false };

    case SET_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};

export default DataReducer;
