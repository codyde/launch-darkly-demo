import { Image, Grid, Header, Segment } from "semantic-ui-react";
import { useFlags } from "launchdarkly-react-client-sdk";

export default function Grids() {
  const { cards } = useFlags();

  return (
    <div>
      {cards ? (
        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Test Innovations Collaboratively
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Align teams faster with live user insights by gradually
                  releasing new features.
                </p>
                {/* <Image size="small" src="/Teamwork_onLight.png" centered /> */}
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Standarize Safe Releases
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Drive efficiency with less risk through automated governance
                  and remediation.
                </p>
                {/* <Image size="small" src="/Waterfall_onLight.png" centered /> */}
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Accelerate and Modernize Application Release
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Optimize the cloud journey with safe, progressive migrations
                  and re-architecting.
                </p>
                {/* <Image size="small" src="/Rocket_onLight.png" centered /> */}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      ) : null}
    </div>
  );
}
