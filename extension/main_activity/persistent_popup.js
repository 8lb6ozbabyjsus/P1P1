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

document.getElementById('full-screen-btn').addEventListener('click', () => {
    chrome.windows.getCurrent((window) => {
        chrome.windows.update(window.id, { state: 'fullscreen' });
    });
});

// Make the window draggable
let isDragging = false;
let offsetX, offsetY;

document.getElementById('drag-handle').addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX;
    offsetY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        chrome.windows.getCurrent((window) => {
            chrome.windows.update(window.id, {
                left: e.screenX - offsetX,
                top: e.screenY - offsetY
            });
        });
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

