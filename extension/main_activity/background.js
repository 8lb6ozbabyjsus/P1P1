chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
      url: chrome.runtime.getURL("persistent_popup.html"),
      type: "popup",
      width: 400,
      height: 600
  });
});
