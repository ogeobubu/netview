const initialState = {
  isLogged: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        isLogged: true,
      };

    default:
      return state;
  }
};

module.exports = authReducer;
