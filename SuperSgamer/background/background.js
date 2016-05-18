chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url.indexOf("http://bbs.sgamer.com/thread") > -1) {
        chrome.pageAction.show(tabId);
    }
});
