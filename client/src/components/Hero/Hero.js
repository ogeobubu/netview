import { HeroContainer, Title, Text } from "./styles";
import Email from "../Email/Email";

const Hero = () => {
  return (
    <HeroContainer>
      <Title>Unlimited movies, TV shows, and more.</Title>
      <Text>View anywhere. Cancel anytime.</Text>
      <Email />
    </HeroContainer>
  );
};

export default Hero;
