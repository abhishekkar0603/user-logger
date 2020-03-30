import React from "react";
import {
  Image,
  Card,
  Segment,
  Header,
  Modal,
  Button,
  Icon
} from "semantic-ui-react";
import avatar from "../thumbnail.jpg";
import { useState } from "react";

const Display = ({ props }) => {
  const [open, setOpen] = useState(false);
  let count = 0;
  return (
    <div style={{ marginRight: "1%", marginLeft: "1%", float: "left" }}>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        centered={false}
        closeOnDimmerClick={false}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "100%",
          overflow: "auto"
        }}
      >
        <Modal.Content scrolling={true}>
          {props.activity_periods.map(prd => {
            ++count;
            let str = prd.start_time;
            let estr = prd.end_time;
            return (
              <Segment style={{ marginBottom: "1%" }} key={props.key + count}>
                <Header as="h3">Day: {str.slice(0, 11)}</Header>
                <p>
                  <h4>Start time: </h4>
                  {str.slice(11)}.
                </p>
                <p>
                  <h3>End time: </h3>
                  {estr.slice(11)}.
                </p>
              </Segment>
            );
          })}

          <Button
            color="red"
            onClick={() => setOpen(false)}
            style={{ marginBottom: "2%" }}
          >
            <Icon name="close" size="small" />
            Close
          </Button>
        </Modal.Content>
      </Modal>

      <Card as="a" onClick={() => setOpen(true)}>
        <Image src={avatar} wrapped ui={true} />
        <Segment>
          <Card.Content>
            <Card.Header>
              <Header>{props.real_name}</Header>
            </Card.Header>
            <Card.Meta>
              <b>Location: </b>
              {props.tz}
            </Card.Meta>
          </Card.Content>
        </Segment>
      </Card>
    </div>
  );
};

export default Display;
