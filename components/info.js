import React, { useState, useEffect } from "react";
import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";
import {
  Grid,
  Button,
  Header,
  Container,
  Segment,
  Image,
} from "semantic-ui-react";
import { rollIn, zoomInDown } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  rollin: {
    animation: "x 1s",
    animationName: Radium.keyframes(rollIn, "rollIn"),
  },
  bounce: {
    animation: "x 3s",
    animationName: Radium.keyframes(zoomInDown, "zoomInDown"),
  },
};

export default function Info() {
  const { name, reduceimage, userbuttons } = useFlags();
  const LDClient = useLDClient();
  // TODO: Create a form that allows submission of a user object
  // Long TODO: Refactor mesh demo apps login/db engine to support this
  const user = {
    key: "codydearkland@gmail.com",
    email: "codydearkland@gmail.com",
    firstName: "Cody",
    lastName: "De Arkland",
  };
  const submitLogin = () => {
    LDClient.identify(user).then(console.log(LDClient.getUser()));
  };
  const getUser = () => {
    console.log(LDClient.getUser());
  };

  return (
    <StyleRoot>
      {name ? (
        <div style={styles.rollin}>
          <span>
            <h1>What are we building with today?</h1>
          </span>
        </div>
      ) : (
        <Container>
          {reduceimage ? (
            <div style={styles.bounce}>
              <Image src="/ld.png" size="medium" alt="launch-darkly" centered />
            </div>
          ) : (
            <div style={styles.bounce}>
              <Image src="/ld.png" size="big" alt="launch-darkly" centered />
            </div>
          )}
        </Container>
      )}
      {userbuttons ? (
        <Segment>
          <Grid>
            <Grid.Column textAlign="center">
              <Button
                type="submit"
                color="blue"
                // fluid
                size="large"
                onClick={getUser.bind()}
              >
                Get User
              </Button>
              <Button
                type="submit"
                color="blue"
                // fluid
                size="large"
                onClick={submitLogin.bind()}
              >
                Login
              </Button>
            </Grid.Column>
          </Grid>
        </Segment>
      ) : null}
    </StyleRoot>
  );
}
