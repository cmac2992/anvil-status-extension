function ping() {
    var X = new XMLHttpRequest;
    X.open('GET', "http://dev-ns.comr.se/health/check/ping", false);
	X.send();
	var data = JSON.parse(X.responseText)
	// compare times
	if (data = "pong"){
		console.log("woot");
		chrome.browserAction.setIcon({path:"motion.png"});
	}
	else{
     	console.log("broken");
		chrome.browserAction.setIcon({path:"broken.png"});
    }
};
ping();
setInterval(function(){
	ping();
	console.log("loop");
},5000);