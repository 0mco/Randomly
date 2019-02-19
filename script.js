const NEWTAB = "https://www.google.com/_/chrome/newtab?ie=UTF-8";
const RANDOMLY = ["https://www.reddit.com",
              "https://news.ycombinator.com",
              "https://slashdot.org",
              "https://xkcd.com",
             ];

function redirect(url, delay = 0)
{
	setTimeout(function() {
		window.location = url;
	}, delay);
}

function getRandomInteger(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.onload = function() {
	if (navigator.onLine) {
        chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
            var randomUrlIndex = getRandomInteger(0, RANDOMLY.length);
            if (tabs[0].index == 0) {
                redirect(NEWTAB);
            }
            else {
                redirect(RANDOMLY[randomUrlIndex]);
            }
        });
    }
    else {
        redirect(NEWTAB);
    }
}
