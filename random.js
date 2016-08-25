function showArrow(event){
	if (Math.random() < 0.5){
		document.write("<<<==");
	} else {
		document.write("==>>>");
	}
}
var bodyEmt = document.getElementById("window");
window.addEventListener("click", showArrow);
bodyEmt.addEventListener("click", showArrow);