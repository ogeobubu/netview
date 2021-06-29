import Navbar from "./Navbar/Navbar";
import { HomePageSection } from "./styles";
import bg from "../../assets/kids.png";
import Features from "./Features/Features";
import Footer from "../../components/Footer/Footer";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  if (!token) {
    history.push("/auth");
  } else {
    console.log("Welcome to Netview Web Application!");
  }
  return (
    <>
      <HomePageSection>
        <Navbar />
        <img src={bg} alt="" width="100%" />
      </HomePageSection>
      <Features />
      <Footer />
    </>
  );
};

export default HomePage;
