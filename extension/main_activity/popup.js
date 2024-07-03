document.getElementById('autofill').addEventListener('click', () => {
  const prompt = 'Generate a resume and cover letter for a software developer position at XYZ company.';

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'generate_resume_cover_letter', prompt: prompt }, (response) => {
          if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError.message);
              document.getElementById('result').innerText = "Error: Could not establish connection.";
          } else {
              document.getElementById('result').innerText = response ? response.response : "No response from content script.";
          }
      });
  });
});

document.getElementById('highlight').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'highlight_keywords' }, (response) => {
          if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError.message);
              document.getElementById('result').innerText = "Error: Could not establish connection.";
          } else {
              console.log(response.message);
          }
      });
  });
});
