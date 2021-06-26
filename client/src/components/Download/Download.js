import {
  DownloadContainer,
  DownloadTitle,
  DownloadSection,
  DownloadDetail,
  DownloadTitleDetails,
  DownloadImage,
} from "./styles";
import mobile from "../../assets/mobile.jpg";

const Download = () => {
  return (
    <DownloadSection>
      <DownloadContainer>
        <DownloadImage>
          <img src={mobile} style={{ width: "100%" }} alt="" />
        </DownloadImage>
        <DownloadTitleDetails>
          <DownloadTitle>See reviews of shows to watch offline.</DownloadTitle>
          <DownloadDetail>
            Visit regularly to easily and always have something to watch
          </DownloadDetail>
        </DownloadTitleDetails>
      </DownloadContainer>
    </DownloadSection>
  );
};

export default Download;
