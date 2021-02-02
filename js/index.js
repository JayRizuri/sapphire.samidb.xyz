function load() {
	let theme = localStorage.getItem("theme") || "",
		body = document.body,
		navbar = document.getElementsByClassName("navbar")[0],
		button = document.getElementById("theme-toggler")
	if (theme === "") {
		theme = "light"
		localStorage.setItem("theme", "light")
	}
	body.classList.add(theme);
	button
		.setAttribute(
			"src",
			`icons/${theme}.png`
		);
	navbar.classList.add(`bg-${theme}`);
	navbar.classList.add(`navbar-${theme}`);
};
function switchTheme() {
	let body = document.body,
		button = document.getElementById("theme-toggler"),
		navbar = document.getElementsByClassName("navbar")[0],
		oldTheme = localStorage.getItem("theme");
	localStorage.setItem("theme", (oldTheme === "light") ? "dark" : "light");
	let newTheme = localStorage.getItem("theme");
	body.classList.remove(oldTheme);
	body.classList.add(newTheme);
	button
		.setAttribute(
			"src",
			`icons/${newTheme}.png`
		);
	navbar.classList.remove(`bg-${oldTheme}`);
	navbar.classList.add(`bg-${newTheme}`);
	navbar.classList.remove(`navbar-${oldTheme}`);
	navbar.classList.add(`navbar-${newTheme}`);
}
