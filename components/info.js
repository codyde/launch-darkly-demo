import React, { useState, useEffect } from "react";
import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";
import {
  Form,
  Grid,
  Button,
  Header,
  Container,
  Segment,
  Image,
} from "semantic-ui-react";
import { rollIn, zoomInDown, zoomInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
import toast, { Toaster } from "react-hot-toast";
import { login, logout } from "./auth.js";

const styles = {
  rollin: {
    animation: "x 1s",
    animationName: Radium.keyframes(rollIn, "rollIn"),
  },
  bounce: {
    animation: "x 3s",
    animationName: Radium.keyframes(zoomInDown, "zoomInDown"),
  },
  zoomleft: {
    animation: "x 3s",
    animationName: Radium.keyframes(zoomInLeft, "zoomInLeft"),
  },
};

export default function Info() {
  const { name, reduceimage, userbuttons, brandImage, userLogin } = useFlags();
  const LDClient = useLDClient();

  const [userState, setUserState] = useState({
    username: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // TODO: Create a form that allows submission of a user object
  // Long TODO: Refactor mesh demo apps login/db engine to support this
  // const user = {
  //   key: "codydearkland@gmail.com",
  //   email: "codydearkland@gmail.com",
  //   firstName: "Cody",
  //   lastName: "De Arkland",
  // };

  const user = {
    key: userState.username,
  };

  // const anon = {
  //   key: 'anonymous',
  // };

  const submitUser = () => {
    // setUserState(userState);
    // console.log(userState);
    login(user);
    LDClient.identify(user).then(console.log(LDClient.getUser()));
    toast.success("Your LaunchDarkly user is " + userState.username);
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    )
  };

  const getUser = () => {
    console.log(LDClient.getUser());
    toast.success("Your LaunchDarkly user is " + userState.username);
  };

  const submitLogout = () => {
    logout();
    LDClient.identify(JSON.parse('{"key":"anonymous"}'));
    toast.error("You have cleared the login cache");
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    )
  };

  var brandLocation;
  if (brandImage == true) {
    brandLocation = "/ld2.png";
  } else {
    brandLocation = "/ld.png";
  }

  function getCachedAuth() {
    const auth = localStorage.getItem("user_key");
    if (auth) {
      var cachedUser = (JSON.parse(auth).key)
      console.log(cachedUser)
      // // const jsonUser = {key: 'cody'}
      // var newUser = { key: 'someone-else', name: 'John' };
      // // user.username = JSON.parse(auth).key;
      // // console.log(user)
      // setUserState(newUser)
      // // console.log(user.username)
      // // console.log("hi"+JSON.stringify(userState))
      // LDClient.identify(user);
      toast.success("Your LaunchDarkly user is " + JSON.stringify(userState));
      return auth
    }
    console.log("No cached storage found");
    return;
  }

  useEffect(() => {
    getCachedAuth();
  }, []);


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
            <div style={styles.zoomleft}>
              <Image
                src={brandLocation}
                size="medium"
                alt="launch-darkly"
                centered
              />
            </div>
          ) : (
            <div style={styles.zoomleft}>
              <Image
                src={brandLocation}
                size="big"
                alt="launch-darkly"
                centered
              />
            </div>
          )}
        </Container>
      )}
      {userbuttons ? (
        <Segment>
          {userLogin ? (
            <Grid>
              <Grid.Column textAlign="center">
                <Form>
                  <Form.Input
                    label="Name"
                    placeholder="Name"
                    id="username"
                    value={userState.username}
                    onChange={handleChange}
                  />

                  <Button
                    type="submit"
                    color="green"
                    size="large"
                    onClick={submitUser.bind(userState)}
                  >
                    Submit
                  </Button>
                  <Toaster
                    position="bottom-center"
                    reverseOrder={false}
                    gutter={8}
                    containerClassName=""
                    containerStyle={{}}
                    toastOptions={{
                      // Define default options
                      className: "",
                      duration: 5000,
                      style: {
                        background: "#00000",
                        color: "#fffff"
                      },
                      // Default options for specific types
                      success: {
                        icon: '🚀',
                        style: {
                          fontSize: 22,
                          background: "black",
                          color: "white"
                        },
                      },
                      error: {
                        icon: '⚠️',
                        style: {
                          fontSize: 22,
                          background: "orange",
                          color: "white"
                        }
                      }
                    }}
                  />
                </Form>
              </Grid.Column>
            </Grid>
          ) : null}
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
                color="red"
                // fluid
                size="large"
                onClick={submitLogout.bind()}
              >
                Clear User
              </Button>
            </Grid.Column>
          </Grid>
        </Segment>
      ) : null}
    </StyleRoot>
  );
}
