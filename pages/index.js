import Head from "next/head";
import styles from "../styles/Home.module.css";
import Info from "../components/info.js";
import Nav from "../components/Nav.js";
import Loginbox from "../components/loginbox.js";
import Grids from "../components/grid.js";
import "semantic-ui-css/semantic.min.css";
import { useFlags, useLDClient } from "launchdarkly-react-client-sdk";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const { uiEnable, showCards, toggle, userLogin, darkMode } = useFlags();
  const LDClient = useLDClient();
  return (
    <div className="h-screen">
      <Head>
        <title>Exploring LaunchDarkly</title>
        <meta name="description" content="Built for exploring LaunchDarkly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            color: "#fffff",
          },
          // Default options for specific types
          success: {
            icon: "🚀",
            style: {
              fontSize: 22,
              background: "green",
              color: "white",
            },
          },
          error: {
            icon: "⚠️",
            style: {
              fontSize: 22,
              background: "orange",
              color: "white",
            },
          },
        }}
      />

      {uiEnable ? (
        <main className="flex bg-ld-space bg-center">
          <div className="w-1/3">
            <Nav />
          </div>
          <div className="w-2/3">
            <div className="grid grid-rows-3 h-screen">
              {darkMode === "text-black" && showCards === true ? (
                <div className="mx-auto w-2/3 row-start-1 w-1/3 text-center rounded-xl justify-center bg-gray-800 text-white items-center py-4 p-5">
                  <h1>Well that text is hard to read</h1>
                  <h1>You should enable the "darkMode" flag</h1>
                </div>
              ) : (
                <div />
              )}
              {toggle ? (
                <div className="flex row-start-1 justify-center items-center">
                  <img src="./ld-white.png" width="200" alt="launch-darkly" />
                </div>
              ) : (
                <div />
              )}
              {showCards === true && toggle === false && darkMode == 'text-white' ? (
                <div className="mx-auto row-start-1 w-2/3 text-center rounded-xl justify-center bg-gray-800 text-white items-center py-4 p-5">
                <h1>Thats a lot more readable...yay!</h1>
                <h1>But what do we do about this unused space up here? Go enable the "toggle" flag and find out!</h1>
              </div>
              ) : (
                ""
              )}
              <div className="row-start-2 w-full justify-center items-center">
                <Loginbox />
              </div>
              <div className="row-start-3 w-full justify-center items-center">
                {showCards ? (
                  <Grids />
                ) : (
                  <div className="mx-auto w-full h-full row-start-3 rounded-lg justify-center text-center p-5 bg-gray-800 opacity-80 text-white">
                    <h1>Well this looks a lot different... </h1>
                    <h2>
                      Return to LaunchDarkly and add your user name to the
                      targeting rule for the "showCards" feature flag and enable
                      targeting.
                    </h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <main className="bg-ld-space bg-center">
          <div className="grid grid-cols-4 h-screen">
            <div className="grid bg-gray-800 opacity text-white col-start-1 justify-center items-center px-8">
              {userLogin ? (
                <div>
                  <h1 className="text-aws">
                    Targeting rules allow us to apply feature releases to specific users. Navigate to LaunchDarkly and add your first name to the targeting rules for the 'enableUI' flag.
                  </h1>
                  <p className="text-2xl">
                    After that, return here and enter your username and click
                    the submit button.
                  </p>
                </div>
              ) : (
                <div>
                <h1 className="text-aws">
                  Start by clicking on the "Feature Flags" tab above and
                  enabling the "userLogin" Feature Flag
                </h1>
                <div className="break-all" />
                <p className="text-2xl">Innovation is a busy thing. One day you're chasing creatures in your speeder back in canyons at home, and the next you're trying to figure out how you can move your workloads away from that planet and into the big ol' cloud we</p>
                </div>
              )}
            </div>
            <div className="grid col-start-2 w-full col-span-3 justify-center items-center">
              <Info />
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
