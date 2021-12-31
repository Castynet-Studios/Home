import { logEvent } from "firebase/analytics";
import { analytics } from "./firebaseConfig";

export function getUserInfo() {
  var language = navigator.language || navigator.userLanguage || "en";
  var { downlink, effectiveType, rtt, saveData } = navigator.connection || {};
  var browser = navigator.vendor || "";
  var isAutomated = navigator.webdriver || false;
  const userInfo = {
    language,
    connection: { downlink, effectiveType, rtt, saveData },
    browser,
    isAutomated,
  };
  return userInfo;
}

export function trackPerformance(performance) {
  const { name, value, delta, id, entries } = performance;
  logEvent(analytics, { name, value, delta, id, entries });
}
