import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const LogIn = () => {
  let his = useHistory();
  return (
    <Button
      color="blue"
      onClick={() => {
        sessionStorage.setItem("loggedin", true);
        his.push("/home");
      }}
    >
      <Icon name="sign-in alternate" />
      Click here to LogIn
    </Button>
  );
};

export default LogIn;
