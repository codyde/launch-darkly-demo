import React, { useState, useEffect } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";

export default function Nav(props) {
  const { toggle } = useFlags();
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    // TODO: Feature flag around menu config? Sidenav vs topnav? Or maybe just menu options?
    <div>
      {toggle ? (
        <nav
          className={`h-screen flex
           justify-center items-center px-2`}
        >
            <div className="row-start-1 justify-center items-center">
              <ul>
                <li>
                  <img src="./toggle_thumbsup.png" width="400" alt="launch-darkly" />
                </li>
              </ul>
            </div>   
        </nav>   
      ) : (
        <nav
          className={`h-screen flex
           justify-center items-center px-2`}
        >
            <div className="justify-center items-center">
              <ul>
                <li>
                  <img src="./ld-white.png" width="400" alt="launch-darkly" />
                </li>
              </ul>
            </div>   
        </nav>  
      )}
    </div>
  );
}
