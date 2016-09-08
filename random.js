function showArrow(event){
	var displayEmt = document.getElementById("direction");
	if (Math.random() < 0.5){
		displayEmt.innerHTML = "<<<<<<<<<<";
	} else {
		displayEmt.innerHTML = ">>>>>>>>>>";
	}
}
window.addEventListener("click", showArrow);
