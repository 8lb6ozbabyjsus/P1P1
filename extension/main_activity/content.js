// Detect keywords on the page
function detectKeywords() {
  const bodyText = document.body.innerText;
  const words = bodyText.split(/\W+/);
  return words;
}

// Fetch definition from the backend
async function fetchDefinition(word) {
  const response = await fetch(`http://localhost:8000/dictionary/?word=${word}`);
  const data = await response.json();
  return data.definition;
}

// Fetch resume and cover letter from the backend
async function fetchChatGPTResponse(prompt) {
  const response = await fetch(`http://localhost:8000/chatgpt/?prompt=${prompt}`);
  const data = await response.json();
  return data.response;
}

// Function to highlight and show tooltip with definition
async function highlightKeywords() {
  const keywords = detectKeywords();
  const uniqueKeywords = [...new Set(keywords)];

  for (const word of uniqueKeywords) {
      const definition = await fetchDefinition(word);

      // Highlight word and add tooltip
      document.body.innerHTML = document.body.innerHTML.replace(new RegExp(`\\b${word}\\b`, 'g'), `<span class="highlight" title="${definition}">${word}</span>`);
  }
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === 'generate_resume_cover_letter') {
      const { prompt } = request;
      const response = await fetchChatGPTResponse(prompt);
      sendResponse({ response });
  } else if (request.action === 'highlight_keywords') {
      await highlightKeywords();
      sendResponse({ message: 'Keywords highlighted' });
  }
  return true;
});

// Add some CSS for highlighting
const style = document.createElement('style');
style.innerHTML = `
  .highlight {
      background-color: yellow;
      cursor: pointer;
  }
`;
document.head.appendChild(style);
