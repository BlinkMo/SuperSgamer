chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url.indexOf("sgamer") > -1) {
        chrome.pageAction.show(tabId);
    }
});

chrome.pageAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(null,{file:"sgshower.js"});
});
