import React from "react";
import Test from "../Test JSON.json";
import Display from "./data_display";
import NavBar from "./navbar";
import { Card } from "semantic-ui-react";
import bg from "../bg.jpg";

const Data = () => {
  return (
    <NavBar>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bg})`,
          position: "fixed"
        }}
      >
        <Card.Group>
          <div
            style={{
              marginBlockStart: "2%",
              marginLeft: "2%",
              width: "100%"
            }}
          >
            {Test.members.map(memberDetail => {
              return <Display key={memberDetail.id} props={memberDetail} />;
            })}
          </div>
        </Card.Group>
      </div>
    </NavBar>
  );
};

export default Data;
