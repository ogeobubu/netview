const initialState = {
  isLogged: false,
  isAdmin: false,
  user: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        isLogged: true,
        user: action.payload.user,
        isAdmin: action.payload.isAdmin,
      };
    default:
      return state;
  }
};

export default userReducer;
