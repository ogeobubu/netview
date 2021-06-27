import {
  SignUpSection,
  SignUpContainer,
  SignUpTitle,
  SignUpForm,
  FormControl,
  Button,
  RememberHelp,
  Remember,
  Help,
  FacebookAuth,
  NewNetview,
  SignUpNow,
} from "./styles";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { Facebook } from "@material-ui/icons";
import Notification from "../../../utils/Notification/Notification";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { dispatchUser } from "../../../redux/actions/userAction";

const SignUp = () => {
  const dispatch = useDispatch();
  const [signin, setSignIn] = useState(true);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const removeAlert = (show = false, message = "", type = "") => {
    setAlert({ show, message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signin) {
      try {
        const user = {
          email,
          password,
        };

        if (!email || !password) {
          return setAlert({
            show: true,
            message: "All inputs are required!",
            type: "error",
          });
        } else {
          setLoading(true);
          const response = await axios.post("/api/auth/login", user);
          console.log(response.data);
          setLoading(false);
          dispatch({ type: "LOGIN" });
          dispatch(dispatchUser(response));
          setAlert({
            show: true,
            message: "You have successfully logged in!",
            type: "success",
          });
        }
      } catch (error) {
        setLoading(true);
        setAlert({
          show: true,
          message: error.response.data.message,
          type: "error",
        });
        setLoading(false);
      }
    } else {
      function validateEmail(email) {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
      try {
        if (!firstName || !lastName || !username || !email || !password) {
          setAlert({
            show: true,
            message: "All fields required!",
            type: "error",
          });
        } else if (!validateEmail(email)) {
          setAlert({
            show: true,
            message: "Email is invalid!",
            type: "error",
          });
        } else if (password !== confirmPassword) {
          setAlert({
            show: true,
            message: "Passwords do not match",
            type: "error",
          });
        } else {
          const user = {
            firstName,
            lastName,
            username,
            email,
            password,
          };
          setLoading(true);
          const response = await axios.post("/api/auth/create", user);
          console.log(response.data);
          setLoading(false);
          // setAlert({
          //   show: true,
          //   message: "You have successfully created an account!",
          //   type: "success",
          // });
          setSignIn(!signin);
        }
      } catch (error) {
        setLoading(true);
        setAlert({
          show: true,
          message: error.response.data.message,
          type: "error",
        });
        setLoading(false);
      }
    }
  };
  return (
    <>
      <SignUpSection>
        {alert.show && <Notification {...alert} removeAlert={removeAlert} />}
        <SignUpContainer>
          {signin ? (
            <SignUpTitle>Sign In</SignUpTitle>
          ) : (
            <SignUpTitle>Sign Up</SignUpTitle>
          )}

          <SignUpForm onSubmit={handleSubmit}>
            {signin ? (
              <>
                <FormControl>
                  <input
                    style={{
                      background: "none",
                      width: "100%",
                      padding: "0 1rem",
                      outline: "none",
                      appearance: "none",
                      border: "none",
                    }}
                    type="text"
                    placeholder="Email or phone number"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <input
                    type="password"
                    style={{
                      background: "none",
                      width: "100%",
                      padding: "0 1rem",
                      outline: "none",
                      appearance: "none",
                      border: "none",
                    }}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>

                <Button disabled={loading ? true : false} type="submit">
                  {loading ? <CircularProgress /> : "Sign In"}
                </Button>

                <RememberHelp>
                  <Remember>
                    <input style={{ marginRight: "4px" }} type="checkbox" />{" "}
                    Remember me
                  </Remember>
                  <Help>Need help?</Help>
                </RememberHelp>

                <FacebookAuth>
                  <Facebook style={{ color: "white", marginRight: "4px" }} />{" "}
                  Login with Facebook
                </FacebookAuth>

                <NewNetview>
                  New to Netview?{" "}
                  <SignUpNow onClick={() => setSignIn(!signin)}>
                    Sign up now
                  </SignUpNow>
                </NewNetview>
              </>
            ) : (
              <>
                <FormControl>
                  <input
                    style={{
                      background: "none",
                      width: "100%",
                      padding: "0 1rem",
                      outline: "none",
                      appearance: "none",
                      border: "none",
                    }}
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <input
                    style={{
                      background: "none",
                      width: "100%",
                      padding: "0 1rem",
                      outline: "none",
                      appearance: "none",
                      border: "none",
                    }}
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <input
                    style={{
                      background: "none",
                      width: "100%",
                      padding: "0 1rem",
                      outline: "none",
                      appearance: "none",
                      border: "none",
                    }}
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <input
                    style={{
                      background: "none",
                      width: "100%",
                      padding: "0 1rem",
                      outline: "none",
                      appearance: "none",
                      border: "none",
                    }}
                    type="text"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <input
                    type="password"
                    style={{
                      background: "none",
                      width: "100%",
                      padding: "0 1rem",
                      outline: "none",
                      appearance: "none",
                      border: "none",
                    }}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>

                <FormControl>
                  <input
                    type="password"
                    style={{
                      background: "none",
                      width: "100%",
                      padding: "0 1rem",
                      outline: "none",
                      appearance: "none",
                      border: "none",
                    }}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </FormControl>

                <Button disabled={loading ? true : false} type="submit">
                  {loading ? <CircularProgress /> : "Sign Up"}
                </Button>

                <NewNetview>
                  Already have an account?{" "}
                  <SignUpNow onClick={() => setSignIn(!signin)}>
                    Sign in
                  </SignUpNow>
                </NewNetview>
              </>
            )}
          </SignUpForm>
        </SignUpContainer>
      </SignUpSection>
    </>
  );
};

export default SignUp;
