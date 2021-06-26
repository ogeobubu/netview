import {
  WatchContainer,
  WatchTitle,
  WatchSection,
  WatchDetail,
  WatchTitleDetails,
  WatchImage,
} from "./styles";
import devices from "../../assets/device-pile.png";

const Watch = () => {
  return (
    <WatchSection>
      <WatchContainer>
        <WatchTitleDetails>
          <WatchTitle>View everywhere</WatchTitle>
          <WatchDetail>
            See unlimited movies and TV shows on your phone, tablet, laptop, and
            TV without paying more.
          </WatchDetail>
        </WatchTitleDetails>
        <WatchImage>
          <img src={devices} style={{ width: "100%" }} alt="" />
        </WatchImage>
      </WatchContainer>
    </WatchSection>
  );
};

export default Watch;
