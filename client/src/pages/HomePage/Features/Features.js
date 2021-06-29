import { FeatureSection } from "./styles";
import Filter from "./Filter/Filter";
import Movies from "./Movies/Movies";

const Features = () => {
  return (
    <FeatureSection>
      <Filter />
      <Movies />
    </FeatureSection>
  );
};

export default Features;
