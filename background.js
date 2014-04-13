var check = function () {
    console.log('loop');
	var req = new XMLHttpRequest();
	req.open("GET", "http://443256fc.ngrok.com", true);
	if (document.getElementById("motionImg")!=null){
		console.log("motion");
		chrome.browserAction.setIcon({path:"motion.png"});
	}
	else if (document.getElementById("noMotionImg")!=null){
		console.log("nomotion");
		chrome.browserAction.setIcon({path:"inactive.png"});
	}
	else if (document.getElementsByTagName("pre")!=null){
		console.log("no load");
		chrome.browserAction.setIcon({path:"broken.png"});
	}
	else{
		console.log("sofucked");
	}
};
check();
setInterval(function(){
	check();
},2*60*1000);
 


     


		




				
