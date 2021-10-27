function closepopup(){
	var popup = document.getElementById("popup");
	if(popup)
        popup.style.display='none';
	var cb = document.getElementById("cybotCookiebotDialogv2")
    if(cb)
        cb.style.display = "block";
}

function toggleNecessary(){
	var necessity = document.getElementById("necessary");
	var desc = document.getElementById("necessary-desc");
	var uparrow = document.getElementById("uparrow-necessary");
    if(necessity && desc && uparrow)
        if( desc.style.display==='none'){
            necessity.style.height = '140px';
            uparrow.style.transform= 'rotate(360deg)';
            desc.style.display='block';
        }
        else{
            necessity.style.height = '58px';
            uparrow.style.transform= 'rotate(180deg)';
            desc.style.display='none';
        }
}
