function toggle() {
var x = document.getElementsByClassName("_ui_toggler ui_toggler  on");
if (x.length == "1") {location.href="javascript:Feed.toggleFeedTop(); void 0";}
}
setInterval(toggle, 1000);