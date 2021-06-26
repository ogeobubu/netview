import { NotificationContainer } from "./styles";
import { Alert } from "@material-ui/lab";
import { useEffect } from "react";

const Notification = ({ removeAlert, message, type }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [removeAlert]);

  return (
    <NotificationContainer>
      <Alert severity={type}>{message}</Alert>
    </NotificationContainer>
  );
};

export default Notification;
