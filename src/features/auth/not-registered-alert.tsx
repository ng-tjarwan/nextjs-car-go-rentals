import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons-react";

const NotVerifiedAlert = () => {
  return (
    <Alert
      icon={<IconAlertCircle size="1rem" />}
      title="User Not Found"
      color="red"
      my="sm"
    >
      We{`'`}re sorry, but the login credentials provided do not match any
      exiting user in our system. Please double-check your email and password
      and try again or create a new Account if you do not have one
    </Alert>
  );
};

export default NotVerifiedAlert;
