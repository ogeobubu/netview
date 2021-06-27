import axios from "axios";

export const dispatchUser = (response) => {
  return {
    type: "GET_USER",
    payload: {
      user: response.data,
      isAdmin: response.data.user.subscription === "admin" ? true : false,
    },
  };
};

export const fetchUser = async (token) => {
  const response = await axios.get("/api/users", {
    headers: {
      authorization: token,
    },
  });
  return response;
};
