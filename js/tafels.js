function machtsverheffen() {
    let getal1 = document.getElementById('getal1').value;
    let getal2 = document.getElementById('getal2').value;
    let uitkomst = getal1;

    for (let index = 1; index < getal2; index++) {
        uitkomst = uitkomst * getal1
    }
    
    document.getElementById('uitkomst').innerHTML = uitkomst
} document.getElementById('bereken').addEventListener('click', machtsverheffen) 