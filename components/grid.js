import { useFlags } from "launchdarkly-react-client-sdk";

export default function Grids() {
  const { darkMode } = useFlags();

  return (
        <div className="grid grid-cols-4 justify-center">
          <div className={` ${darkMode} w-full px-3`}>
            <h1>Release Confidently</h1>
            <p className="text-2xl">
            Deploy features whenever you want. Release to users when you’re ready.
            </p>
          </div>
          <div className={` ${darkMode} w-full px-3`}>
            <h1>Improve Reliability</h1>
            <p className="text-2xl">
            Rest easy with instant rollbacks. Resolve incidents as soon as they happen.
            </p>
          </div>
          <div className={` ${darkMode} w-full px-3`}>
            <h1>Safely Migrate Systems</h1>
            <p className="text-2xl">
            Take the risk and uncertainty out of cloud, microservices, and database migrations.
            </p>
          </div>
          <div className={` ${darkMode} w-full px-3`}>
            <h1>Automate DevOps Workflows</h1>
            <p className="text-2xl">
            Streamline your release process while ensuring enterprise compliance.
            </p>
          </div>
        </div>
  );
}
