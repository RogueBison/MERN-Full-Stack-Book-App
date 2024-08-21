export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return { user: null };
    case "LOADED":
      return { ...state, loading: false };
    default:
      return state;
  }
};
