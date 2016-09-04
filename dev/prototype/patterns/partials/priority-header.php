<header class="priority-header">
  <?php include("../patterns/partials/quotation.html") ?>
  <h2 class="priority-header__heading"><span>1</span>Students First</h2>
  <video playsinline loop muted autoplay poster="../../assets/img/fountain-poster.jpg" class="priority-header__video" id="bgvid">
        <source src="../../assets/video/fountain-small.webm" type="video/webm">
        <source src="../../assets/video/fountain-small.mp4" type="video/mp4">
  </video>
  <button class="button-pause" id="vidpause">Pause</button>
</header>
<script>
// Pause/Play Embedded Video for Accessibility //

var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");
function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
    // only functional if "loop" is removed
     vid.pause();
	// to capture IE10
	vidFade();
});
pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
	if (vid.paused) {
vid.play();
		pauseButton.innerHTML = "Pause";
	} else {
        vid.pause();
        pauseButton.innerHTML = "Paused";
	}
})
</script>
