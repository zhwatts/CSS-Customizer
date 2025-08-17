/** @format */

let toggled = false;

chrome.action.onClicked.addListener(async (tab) => {
  toggled = !toggled;
  chrome.tabs.sendMessage(tab.id, {
    action: toggled ? "enableCSS" : "disableCSS",
  });

  // Update the icon
  chrome.action.setIcon({
    tabId: tab.id,
    path: toggled
      ? {
          128: "icons/maximizer-icon-on.png",
        }
      : {
          128: "icons/maximizer-icon-off.png",
        },
  });
});
