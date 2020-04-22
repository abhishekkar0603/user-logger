import React from "react";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Container text>
      <Header
        as="h1"
        style={{
          fontSize: "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "2em"
        }}
      >
        Welcome to Activity Logger!!
      </Header>
      <Header
        as="h2"
        style={{
          fontSize: "1.7em",
          fontWeight: "normal",
          marginTop: "1.5em"
        }}
      >
        What are you waiting for?
      </Header>
      <Link to="/home">
        <Button primary size="huge">
          Get Started
          <Icon name="right arrow" />
        </Button>
      </Link>
    </Container>
  );
};

export default LandingPage;
