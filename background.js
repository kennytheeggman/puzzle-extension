chrome.webNavigation.onCompleted.addListener(function (details) {
	main(details.tabId, details.url);
}, {
	url: [{
		hostContains: 'puzzlemadness.',
	}]
});
chrome.browserAction.onClicked.addListener(function (tab) {
	main(tab.ib, tab.url);
});


function main(tabId, url) {
	chrome.tabs.executeScript(tabId, {
		code: "var url = \"" + url + "\";"
	}, function() {
		chrome.tabs.executeScript(tabId, {
			file: 'inject.js'
		});
	});
}



