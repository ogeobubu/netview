import {
  KidsContainer,
  KidsTitle,
  KidsSection,
  KidsDetail,
  KidsTitleDetails,
  KidsImage,
} from "./styles";
import kids from "../../assets/kids.png";

const Kids = () => {
  return (
    <KidsSection>
      <KidsContainer>
        <KidsImage>
          <img src={kids} style={{ width: "100%" }} alt="" />
        </KidsImage>
        <KidsTitleDetails>
          <KidsTitle>Create profile for kids.</KidsTitle>
          <KidsDetail>
            Send kids on adventures with their favorite characters in a space
            made just for them --- free with your membership.
          </KidsDetail>
        </KidsTitleDetails>
      </KidsContainer>
    </KidsSection>
  );
};

export default Kids;
