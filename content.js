/** @format */

let styleEl = null;

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "enableCSS" && !styleEl) {
    styleEl = document.createElement("link");
    styleEl.rel = "stylesheet";
    styleEl.href = chrome.runtime.getURL("styles.css");
    styleEl.id = "iframe-styler";
    document.head.appendChild(styleEl);
  }

  if (msg.action === "disableCSS" && styleEl) {
    styleEl.remove();
    styleEl = null;
  }
});
