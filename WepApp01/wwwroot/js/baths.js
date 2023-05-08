function Range() {
    let select = document.getElementById("select")
    let bathDiv = document.getElementById("bathDiv")
    let toiletDiv = document.getElementById("toiletsDiv")
    if (select.value == "Toilets") {
        bathDiv.classList.add("hidden")
        toiletDiv.classList.remove("hidden")
    }
    if (select.value == "Baths") {
        bathDiv.classList.remove("hidden")
        toiletDiv.classList.add("hidden")
    }
}