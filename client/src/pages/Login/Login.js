import { LoginSection, NetViewLogo, Container } from "./styles";
import NetView from "../../assets/netview.png";
import SignUp from "./SignUp/SignUp";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <LoginSection>
        <Container>
          <NetViewLogo>
            <Link to="/" className="link">
              <img
                style={{ width: "150px" }}
                src={NetView}
                alt="NetView Logo"
              />
            </Link>
          </NetViewLogo>
          <SignUp />
        </Container>
      </LoginSection>
      <Footer />
    </>
  );
};

export default Login;
