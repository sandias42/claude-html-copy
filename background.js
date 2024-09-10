chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "CopySampleHTML",
    title: "Copy HTML Sample for Claude",
    contexts: ["page"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "CopySampleHTML") {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: function() {
        // Got this string length by empirically testing, may vary
        let samplesize = 300000;
        let html = document.documentElement.outerHTML;
        let startIndex = Math.floor(Math.random() * (html.length - samplesize + 1));
        let sample = html.slice(startIndex, startIndex + samplesize);
        navigator.clipboard.writeText(sample);
      }
    });
  }
});

chrome.action.onClicked.addListener(tab => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
      let html = document.documentElement.outerHTML;
      navigator.clipboard.writeText(html);
    }
  });
});