import {
  NavbarSection,
  Container,
  Left,
  Right,
  HomeLink,
  Profile,
  Options,
} from "./styles";
import logo from "../../../assets/netview.png";
import {
  ArrowDropDown,
  AccountCircleOutlined,
  Notifications,
  Search,
} from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState(false);
  const [value, setValue] = useState("");

  localStorage.setItem("searchValue", value);
  const username = useSelector((user) => user.user.user.user.username);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <NavbarSection className={isScrolled ? "navbar scrolled" : "navbar"}>
      <Container>
        <Left>
          <Link className="link" to="/homepage">
            <img src={logo} alt="The Netview Logo" />
          </Link>
          <Link className="link" to="/homepage">
            <HomeLink>Homepage</HomeLink>
          </Link>
          <Link className="link" to="/homepage">
            <HomeLink>Series</HomeLink>
          </Link>
          <Link className="link" to="/homepage">
            <HomeLink>New and Popular</HomeLink>
          </Link>
          <Link className="link" to="/homepage">
            <HomeLink>My List</HomeLink>
          </Link>
        </Left>
        <Right>
          {search ? (
            <div className="searchContainer">
              <input type="search" onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : null}
          <Search
            className="icon"
            onClick={() => setSearch((previous) => !previous)}
          />
          <AccountCircleOutlined className="icon" />
          <span>{username}</span>
          <Notifications className="icon" />
          <Profile>
            <ArrowDropDown className="icon" />
            <Options>
              <span>Settings</span>
              <span>Logout</span>
            </Options>
          </Profile>
        </Right>
      </Container>
    </NavbarSection>
  );
};

export default Navbar;
