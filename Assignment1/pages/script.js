
var email = document.getElementById("email")

var usia = document.getElementById("usia")

function biodata() {
    var outname = document.getElementById("outname")
    var nama = document.getElementById("nama").value
    var Availability = document.getElementById("Availability")
    var ada = document.getElementById("ada").value
    outname.innerText = nama
    Availability.innerText = ada
    nama.value = ""
}