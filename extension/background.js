// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'openNewTab') {
        // Open a new tab with the selected text as the content
        chrome.tabs.create({ url: `data:text/html,${encodeURIComponent(message.selectedText)}` });
    }
});
