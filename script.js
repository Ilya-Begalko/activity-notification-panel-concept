const trigger = document.getElementById("container");
trigger.addEventListener("click", (event) => {
	trigger.classList.add("clicked");
	trigger.classList.toggle("active");
});
