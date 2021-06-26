import {
  FooterSection,
  FooterContact,
  FooterContainer,
  Row,
  FooterLink,
  FooterLinkName,
} from "./styles";

const rowOneData = [
  {
    id: 1,
    name: "FAQ",
  },
  {
    id: 2,
    name: "Investor Relations",
  },
  {
    id: 3,
    name: "Privacy",
  },
  {
    id: 4,
    name: "Speed Test",
  },
];

const rowTwoData = [
  {
    id: 1,
    name: "Help Center",
  },
  {
    id: 2,
    name: "Jobs",
  },
  {
    id: 3,
    name: "Cookie Preferences",
  },
  {
    id: 4,
    name: "Legal Notices",
  },
];

const rowThreeData = [
  {
    id: 1,
    name: "Account",
  },
  {
    id: 2,
    name: "Ways to Watch",
  },
  {
    id: 3,
    name: "Corporate Information",
  },
  {
    id: 4,
    name: "Netflix Originals",
  },
];

const rowFourData = [
  {
    id: 1,
    name: "Media Center",
  },
  {
    id: 2,
    name: "Terms of Use",
  },
  {
    id: 3,
    name: "Contact Us",
  },
];

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterContact>Questions? Contact us.</FooterContact>
        <Row>
          <FooterLink>
            {rowOneData.map((item) => {
              const { id, name } = item;

              return <FooterLinkName key={id}>{name}</FooterLinkName>;
            })}
          </FooterLink>

          <FooterLink>
            {rowTwoData.map((item) => {
              const { id, name } = item;

              return <FooterLinkName key={id}>{name}</FooterLinkName>;
            })}
          </FooterLink>

          <FooterLink>
            {rowThreeData.map((item) => {
              const { id, name } = item;

              return <FooterLinkName key={id}>{name}</FooterLinkName>;
            })}
          </FooterLink>

          <FooterLink>
            {rowFourData.map((item) => {
              const { id, name } = item;

              return <FooterLinkName key={id}>{name}</FooterLinkName>;
            })}
          </FooterLink>
        </Row>
        <FooterContact>Netview Nigeria</FooterContact>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
