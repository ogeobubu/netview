import { NetViewLogo, Container, Button, LogoSignIn } from "./styles";
import NetView from "../../assets/netview.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <LogoSignIn>
        <NetViewLogo>
          <Link className="link" to="/">
            <img style={{ width: "150px" }} src={NetView} alt="NetView Logo" />
          </Link>
        </NetViewLogo>
        <Link className="link" to="/auth">
          <Button>Sign In</Button>
        </Link>
      </LogoSignIn>
    </Container>
  );
};

export default Header;
