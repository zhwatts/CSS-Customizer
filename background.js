/** @format */

let toggled = false;

chrome.action.onClicked.addListener(async (tab) => {
  toggled = !toggled;
  chrome.tabs.sendMessage(tab.id, {
    action: toggled ? "enableCSS" : "disableCSS",
  });
});
