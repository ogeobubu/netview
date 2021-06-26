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
import { Facebook } from "@material-ui/icons";
import Notification from "../../../utils/Notification/Notification";
import { useState } from "react";

const SignUp = () => {
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

  const removeAlert = (show = false, message = "", type = "") => {
    setAlert({ show, message, type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signin) {
      const user = {
        email,
        password,
      };

      if (!email || !password) {
        return setAlert({
          show: true,
          message: "Please insert all values",
          type: "error",
        });
      } else {
        console.log(user);
        setAlert({
          show: true,
          message: "You have successfully logged in!",
          type: "success",
        });
      }
    } else {
      if (password !== confirmPassword) {
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
          confirmPassword,
        };

        console.log(user);
        setAlert({
          show: true,
          message: "You have successfully created an account!",
          type: "success",
        });
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

                <Button type="submit">Sign In</Button>

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

                <Button type="submit">Sign Up</Button>

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
