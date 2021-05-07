import { GET_ART, CLEAR_USER, FILTER_POST, SET_LOADING } from "../types";

const DataReducer = (state, action) => {
  switch (action.type) {
    case GET_ART:
      return { ...state, artBoard: action.payload, loading: false };

    case FILTER_POST:
      return { ...state, posts: action.payload, loading: false };

    case CLEAR_USER:
      return { ...state, users: [], loading: false };

    case SET_LOADING:
      return { ...state, loading: true };

    default:
      return state;
  }
};

export default DataReducer;
