function LastModUsingHeader(U) {
    var X = new XMLHttpRequest;
    var n = Math.floor(Math.random()*10000000);
    X.open('GET', "http://443256fc.ngrok.com/motion.jpg?"+n, false);
    X.send();
    var dt=X.getResponseHeader('Last-Modified');
    var ct=X.getResponseHeader('Date'); 
    // X.abort();
    return  {
    			ct : ct,
    			dt : dt
    		};
}

function check(){
	var times=LastModUsingHeader('motion.jpg'); 
	var ct = times.ct;
	var dt = times.dt;
	console.log(ct, "current time in real words srever");
	var currentTime = Date.parse(ct);
	console.log(currentTime, "current time in ms server");
	console.log(dt, "updated time in real words");
	var lastUpdatedTime = Date.parse(dt);
	console.log(lastUpdatedTime, "updated time in ms");
	console.log(lastUpdatedTime - currentTime);

	//compare times
	if (lastUpdatedTime + 900000 >= currentTime){
		console.log("motion");
		chrome.browserAction.setIcon({path:"motion.png"});
	}
	else if (lastUpdatedTime + 900000 < currentTime){
		console.log("nomotion");
		chrome.browserAction.setIcon({path:"inactive.png"});
	}
	else if (currentTime === null){
		console.log("no load");
		chrome.browserAction.setIcon({path:"broken.png"});
	}
}

check();
setInterval(function(){
	// LastModUsingHeader();
	// DateUsingHeader();
	check();
	console.log("loop");
},5000);











	
