import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  let his = useHistory();
  return (
    <div>
      <Button
        color="red"
        onClick={() => {
          sessionStorage.setItem("loggedin", false);
          his.push("/");
        }}
      >
        <Icon name="sign-out" />
        Click Me to Sign Out
      </Button>
    </div>
  );
};

export default Logout;
