import {
  TVContainer,
  TVTitle,
  TVSection,
  TVDetail,
  TVTitleDetails,
  TVImage,
} from "./styles";
import TVPng from "../../assets/tv.png";

const TV = () => {
  return (
    <TVSection>
      <TVContainer>
        <TVTitleDetails>
          <TVTitle>Enjoy on your TV.</TVTitle>
          <TVDetail>
            View on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </TVDetail>
        </TVTitleDetails>
        <TVImage>
          <img src={TVPng} style={{ width: "100%" }} alt="" />
        </TVImage>
      </TVContainer>
    </TVSection>
  );
};

export default TV;
