function getUserInfo() {
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
  const user = getUserInfo();
  const { name, value, delta, id, entries } = performance;
  console.log(user, name, value, delta, id, entries);
}
