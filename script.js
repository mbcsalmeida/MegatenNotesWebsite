function changePath() {
	let curUrl = window.location.href;
	let url = new URL(curUrl);

	switch (url.searchParams.get("route")) {
		case "chaos":
			document.getElementById("law-path").style.display = "none";
			document.getElementById("neutral-path").style.display = "none";
			break;
		case "neutral":
			document.getElementById("chaos-path").style.display = "none";
			document.getElementById("law-path").style.display = "none";
			break;
		case "law":
		default:
			document.getElementById("chaos-path").style.display = "none";
			document.getElementById("neutral-path").style.display = "none";
	}
}
