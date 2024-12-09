import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import ReactGA from "react-ga4";
import App from "./App";

ReactGA.initialize("G-7GC3DT6F6X");
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

Sentry.init({
  dsn: "https://8b1cae94089e51c260fda354dbbb9d38@o4508422156910592.ingest.us.sentry.io/4508422159400960",
  integrations: [
    Sentry.replayIntegration(),
  ],
  // Set `tracePropagationTargets` to control for which URLs trace propagation should be enabled
  tracePropagationTargets: [/^\//, /^https:\/\/yourserver\.io\/api/, /^http:\/\/localhost/],

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  // Learn more at
  // https://docs.sentry.io/platforms/javascript/session-replay/configuration/#general-integration-configuration
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
