chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'extensionIconClicked') {
      console.log('Extension icon clicked');
      // Add your form autofill logic here
    }
  });
  