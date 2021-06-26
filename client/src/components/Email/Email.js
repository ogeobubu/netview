import {
  EmailContainer,
  Text,
  Input,
  Button,
  InputButton,
  Content,
} from "./styles";
import { NavigateNext } from "@material-ui/icons";

const Email = () => {
  return (
    <EmailContainer>
      <Content>
        <Text>
          Ready to view? Enter your email to create or restart your membership.
        </Text>

        <InputButton>
          <Input>
            <input
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                padding: "0 1rem",
                borderTopLeftRadius: "4px",
                borderBottomLeftRadius: "4px",
                outline: "none",
                appearance: "none",
              }}
              placeholder="Email Address"
              type="text"
            />
          </Input>

          <Button>
            Get Started <NavigateNext style={{ fontSize: "35px" }} />
          </Button>
        </InputButton>
      </Content>
    </EmailContainer>
  );
};

export default Email;
