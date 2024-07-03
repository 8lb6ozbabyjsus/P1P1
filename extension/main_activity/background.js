chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
      url: chrome.runtime.getURL("persistent_popup.html"),
      type: "detached_panel",
      width: 400,
      height: 600
  });
});

