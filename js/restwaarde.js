function percentage() {
    let getal1 = document.getElementById('getal1').value;
    let getal2 = document.getElementById('getal2').value;
    
    let uitkomst = getal1 / getal2
    uitkomst = getal2 * Math.floor(uitkomst)
    uitkomst = getal1 - uitkomst

    document.getElementById('uitkomst').innerHTML = uitkomst
} document.getElementById('bereken').addEventListener('click', percentage)