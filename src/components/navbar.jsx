import React, { useState, useEffect } from "react";
import { Menu, Button, Portal, Segment, Header } from "semantic-ui-react";
import { useHistory, useLocation } from "react-router-dom";

const handleClick = (e, setDesc, setShowPortal) => {
  if (e === "Activity") {
    setDesc(
      <div>
        <Header as="h3">Information about App</Header>
        <p>This is a demo activity logger by Abhishek Kar.</p>
        <p>
          The login and logout functionalities are mock and the '/home' route
          will give the data which was provided in the 'TEST JSON.json' file.
        </p>
        <p> JS Framework: React</p>
        <p>UI Framework: Semantic UI React</p>
      </div>
    );
  } else {
    setDesc(
      <div>
        <Header as="h3">Information about Developer</Header>
        <p>Name: Abhishek Kar.</p>
        <p>Email Id: abhishekkar0603@gmail.com</p>
        <p>Phone Number: +91 9937601756</p>
      </div>
    );
  }
  setShowPortal(true);
};

const NavBar = props => {
  let hisotry = useHistory();
  let location = useLocation();
  const [inHome, setInHome] = useState(false);
  const [buttonContent, setButtonContent] = useState("Sign up");
  const [loginVisibility, setLoginVisibility] = useState("visible");
  const [showProtal, setShowPortal] = useState(false);
  const [Desc, setDesc] = useState();
  useEffect(() => {
    if (location.pathname === "/home") {
      setInHome(true);
      setButtonContent("Log Out");
      setLoginVisibility("hidden");
    }
  }, [location]);
  return (
    <div>
      <Portal onClose={() => setShowPortal(false)} open={showProtal}>
        <Segment
          style={{
            left: "20%",
            position: "fixed",
            top: "20%",
            zIndex: 1000
          }}
        >
          <p>{Desc}</p>
        </Segment>
      </Portal>
      <div
        style={{
          background: "#1b1c1d",
          color: "white",
          display: "cover",
          width: "100%",
          height: "100%"
        }}
      >
        <Menu inverted>
          <Menu.Item
            as="a"
            onClick={() => {
              hisotry.push("/home");
            }}
          >
            Home
          </Menu.Item>
          <Menu.Item
            as="a"
            onClick={() => handleClick("Activity", setDesc, setShowPortal)}
            name="Activity"
          >
            <b>About Activity Logger</b>
          </Menu.Item>
          <Menu.Item
            as="a"
            onClick={() => handleClick("Dev", setDesc, setShowPortal)}
            name="Dev"
          >
            <b>About Developer</b>
          </Menu.Item>
          <Menu.Item position="right">
            <Button
              inverted={true}
              style={{ visibility: loginVisibility }}
              onClick={() => hisotry.push("/login")}
            >
              <b>Log in</b>
            </Button>
            <Button
              inverted={true}
              style={{ marginLeft: "0.5em" }}
              content={buttonContent}
              onClick={() => {
                if (inHome) {
                  return hisotry.push("/logout");
                }
                return hisotry.push("/signup");
              }}
            />
          </Menu.Item>
        </Menu>
      </div>
      {props.children}
    </div>
  );
};

export default NavBar;
