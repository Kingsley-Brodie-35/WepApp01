var mosaics = ["TSCMI0191", "TSCMI0221", "TSCMI0222", "TSCMI0223", "TSCMI0224", "TSCMI0226", "TSCMI0228", "TSCMI0229", "TSCMI0230", "TSCMI0231",
    "TSCMI0232", "TSCMI0233", "TSCMI0235", "TSCMI0236", "TSCMI0237", "TSCMI0238", "TSCMI0239", "TSCMI0240", "TSCMI0241",
    "TSCMI0240", "TSCMI0241", "TSCMI0242", "TSCMI0243", "TSCMI0244", "TSCMI0257", "TSCMI0400", "TSCMI0401"
    , "TSCMI0403", "TSCMI0404", "TSCMI0405", "TSCMI0406", "TSCMI0407", "TSCMI0408", "TSCMI0409",
"TSCMI0410", "TSCMI0411", "TSCMI0412", "TSCMI0413", "TSCMI0414"]


function displayMosaic(event) {
    event.preventDefault()

    let item = document.getElementById("itemCode").value.toUpperCase()
    let img = document.getElementById("itemImg")
    let heading = document.getElementById("productCode")
    if (mosaics.includes(item)) {
        img.classList.remove("hidden")
        img.src = `/images/Mosaics_RS/${item}.jpg`
        heading.textContent = `${item}`
    } else {
        img.classList.add("hidden")
        img.src = ""
        heading.textContent = "Please make sure item code is correct"
    }
}


