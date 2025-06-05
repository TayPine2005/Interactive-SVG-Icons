console.log("JS files are linked.")

const flavorIcons = document.querySelectorAll("object")
console.log(flavorIcons)

function iconClick() {
    console.log ("User clicked flavor labeled:")
    console.log (this.id);
}

flavorIcons.forEach(function(icon) {
icon.addEventListener("click", iconClick)
})