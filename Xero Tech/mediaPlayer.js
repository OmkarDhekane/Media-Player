var video = document.getElementById("video");

var addbtn = document.getElementById('addbtn');//virtual button
var rbtn = document.getElementById('real-btn');//real button

var plybtn = document.getElementById("plybtn");
var stopbtn = document.getElementById('stopbtn');

const holder = document.getElementById('div1');
var text = document.getElementById('text');



function addfile()
{
	rbtn.click();
	rbtn.addEventListener("change",function(){
	if(rbtn.value)
	{
		var new_value = rbtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
		
		document.getElementById("video").src = new_value;
		document.getElementById("text").href = new_value;
	}	

	else
	{
		text.innerHTML = "Please select the file!";
		document.getElementById("div1").innerHTML = "File Not found!";
	}

});



}
function PlayVideo()
{
	if(video.paused)
	{
		video.play();
		plybtn.innerHTML = "&#9208;";

	}
	else
	{
		video.pause();
		
		plybtn.innerHTML = "&#9658;";
	}
	
}
function stopVideo()
{
	if(!video.paused)
	{
		video.pause();
		plybtn.innerHTML = "&#9658;";
	}
}

function srnshot()
{
	
}



