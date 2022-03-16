function evenOfOneven() {
    let getal1 = document.getElementById('getal1').value;
    let uitkomst = Number.isInteger(getal1 / 2)

    document.getElementById('uitkomst').innerHTML = uitkomst
} document.getElementById('bereken').addEventListener('click', evenOfOneven)