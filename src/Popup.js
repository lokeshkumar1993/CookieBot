import React, {Component} from "react"


class Popup extends Component {
    constructor() {
        super()
    }
    
closepopup(){
	var popup = document.getElementById("popup");
	popup.style.display="none";
	document.getElementById("cybotCookiebotDialogv2").style.display = "block";
}

toggleNecessary(){
	var necessity = document.getElementById("necessary");
	var desc = document.getElementById("necessary-desc");
	var uparrow = document.getElementById("uparrow-necessary");
	var popup = document.getElementById("popup");
	var popupheight = popup.offsetHeight;
	if(desc.style.display==='none'){
		//var newheight = popupheight + 76  ;
		//popup.style.height= newheight + 'px';
		necessity.style.height = '140px';
		uparrow.style.transform= 'rotate(360deg)';
		desc.style.display='block';
	}
	else{
		//var newheight = popupheight - 88  ;
		//popup.style.height= newheight + 'px';
		necessity.style.height = '58px';
		uparrow.style.transform= 'rotate(180deg)';
		desc.style.display='none';
	}
}

togglePreference(){
	var preference = document.getElementById("preference");
	var desc = document.getElementById("preference-desc");
	var uparrow = document.getElementById("uparrow-preference");
	var popup = document.getElementById("popup");
	var popupheight = popup.offsetHeight;
	if(desc.style.display==='none'){
		//var newheight = popupheight + 88  ;
		//popup.style.height= newheight + 'px';
		preference.style.height = '140px';
		uparrow.style.transform= 'rotate(360deg)';
		desc.style.display='block';
	}
	else{
		//var newheight = popupheight - 76 ; 
		//popup.style.height= newheight + 'px';
		preference.style.height = '58px';
		uparrow.style.transform= 'rotate(180deg)';
		desc.style.display='none';
	}
}

togglePerformance(){
	var performance = document.getElementById("performance");
	var desc = document.getElementById("performance-desc");
	var uparrow = document.getElementById("uparrow-performance");
	var popup = document.getElementById("popup");
	var popupheight = popup.offsetHeight;
	if(desc.style.display==='none'){
		//var newheight = popupheight + 60;  
		//popup.style.height= newheight + 'px';
		performance.style.height = '118px';
		uparrow.style.transform= 'rotate(360deg)';
		desc.style.display='block';
	}
	else{
		//var newheight = popupheight - 60;  
		//popup.style.height= newheight + 'px';
		performance.style.height = '58px';
		uparrow.style.transform= 'rotate(180deg)';
		desc.style.display='none';
	}
}
toggleMarketing(){
	var marketing = document.getElementById("marketing");
	var desc = document.getElementById("marketing-desc");
	var uparrow = document.getElementById("uparrow-marketing");
	var popup = document.getElementById("popup");
	var popupheight = popup.offsetHeight;
	if(desc.style.display==='none'){
		//var newheight = popupheight + 88 ; 
		//popup.style.height= newheight + 'px';
		marketing.style.height = '140px';
		uparrow.style.transform= 'rotate(360deg)';
		desc.style.display='block';
	}
	else{
		//var newheight = popupheight - 76 ; 
		//popup.style.height= newheight + 'px';
		marketing.style.height = '58px';
		uparrow.style.transform= 'rotate(180deg)';
		desc.style.display='none';
	}
}

SaveConsent(){
	var ispreference= document.getElementById("preferenceSwitch").checked;
	var isperformance= document.getElementById("performanceSwitch").checked;
	var ismarketing= document.getElementById("marketingSwitch").checked;
	document.getElementById("popup").style.display="none";
	console.log("preferenceSwitch: "+ ispreference +"  performanceSwitch: "+isperformance+"  marketingSwitch: "+ ismarketing);
	CookieConsent.submitCustomConsent(ispreference, isperformance, ismarketing);
}

    render(){
        return (
        <div class="form-popup" id="popup">
            <div class="form-container">
                <img src="./assets/images/closebtn.png" alt="" class="close-btn" onclick="closepopup()"></img>
                <div id="cookie-title">
                  <p>Your cookie settings</p>
                </div>
                <div style="display:flex; flex-direction: column;">
                    <div class="div-category" id="necessary">
                        <div style="display:flex">
                            <div class="subtitle" style="flex: 4">Necessary cookies</div>
                            <div><img id="uparrow-necessary" src="./assets/images/uparrow.png" style="flex: 1" class="necessary-collapsable" onclick="toggleNecessary()"></img></div>
                            <div class="subtitle" id="always-on" style="flex:10; text-align: -webkit-right;">Always On</div>
                        </div>
                        <div id="necessary-desc" class="desc">
                            Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. 
                            The website cannot function properly without these cookies.
                        </div>
                    </div>
                    <div class="div-category" id="preference">
                        <div style="display:flex">
                            <div class="subtitle" style="flex: 4">Preference cookies</div>
                            <div><img id="uparrow-preference" src="./assets/images/uparrow.png" style="flex: 1" class="necessary-collapsable" onclick="togglePreference()"></img></div>
                            <div class="subtitle" style="flex:10; text-align: -webkit-right;">
                                <label class="switch" >
                                    <input type="checkbox" id="preferenceSwitch" checked/>
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div id="preference-desc" class="desc">
                            Preference cookies enable a website to remember information that changes the way the website behaves or looks, 
                            like your preferred language or the region that you are in.
                        </div>
                    </div>
                    <div class="div-category" id="performance">
                        <div style="display:flex">
                            <div class="subtitle" style="flex: 5">Performance cookies</div>
                            <div><img id="uparrow-performance" src="./assets/images/uparrow.png" style="flex: 1" class="necessary-collapsable" onclick="togglePerformance()"></img></div>
                            <div class="subtitle" style="flex:10; text-align: -webkit-right;">
                                <label class="switch" >
                                    <input type="checkbox" id="performanceSwitch" checked/>
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div id="performance-desc" class="desc">
                            Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.
                        </div>
                    </div>
                    <div class="div-category" id="marketing">
                        <div style="display:flex">
                            <div class="subtitle" style="flex: 4">Marketing cookies</div>
                            <div><img id="uparrow-marketing" src="./assets/images/uparrow.png" style="flex: 1" class="necessary-collapsable" onclick="toggleMarketing()"></img></div>
                            <div class="subtitle" style="flex:10; text-align: -webkit-right;">
                                <label class="switch">
                                    <input type="checkbox" id="marketingSwitch" checked/>
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div id="marketing-desc" class="desc">
                            Marketing cookies are used to track visitors across websites. 
                            The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.
                        </div>
                    </div>
                    <div class="action">
                        <div style="display:flex;">
                            <div><a id="find-out-more" href="https://www.justgiving.com/about/info/cookie-notice">Find out more</a></div>
                            <div><button id="save" onclick="SaveConsent()">Save changes</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ) 
    }   
}

export default Popup