chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension Installed');
});
//
// const rxGoogleSearch = /https:\/\/www\.google\.com\/search\?/;
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//     if (rxGoogleSearch.test(changeInfo.url)) {
//         console.log('here in background');
//
//         chrome.tabs.query(
//             { active: true, currentWindow: true },
//             function (tabs) {
//                 console.log(tabs[0].id);
//
//                 chrome.tabs.sendMessage(
//                     tabs[0].id,
//                     { greeting: 'hello' },
//                     function (response) {
//                         console.log(response.farewell);
//                     }
//                 );
//             }
//         );
//     }
//
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         var url = new URL(tabs[0].url);
//         var search_params = new URLSearchParams(url.search);
//         var search_param = search_params.get('search_param');
//         console.log(search_param);
//     });
// });

// chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
//   console.log(msg);
//   console.log(sender);
//   sendResponse("Front the background Script");
// })

// chrome.webNavigation.onCompleted.addListener(
//     function (details) {
//         if (details.url.indexOf('https://www.google.com/search') === 0) {
//             const params = new URLSearchParams(new URL(details.url).search);
//             const query = params.get('q');
//             console.log('The user searched for: ' + query);
//         }
//     },
//     { url: [{ urlPrefix: 'https://www.google.com/search' }] }
// );
