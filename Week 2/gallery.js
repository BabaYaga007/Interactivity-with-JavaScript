function upDate(previewPic){

  x=document.getElementById("image");
  x.style.background ="url('"+ previewPic.src +"') #8e68ff";
  
  x.innerHTML = previewPic.alt;
  
}

function unDo(){
	x=document.getElementById("image");
  x.style.background = "url('')#8e68ff";
  
  x.innerHTML = "Hover over an image below to display here.";
  
}