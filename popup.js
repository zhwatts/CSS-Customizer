/** @format */

console.log("Popup script loaded");

document
  .getElementById("maximize-button")
  .addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.tabs.sendMessage(tab.id, { action: "toggleCSS" });
  });
