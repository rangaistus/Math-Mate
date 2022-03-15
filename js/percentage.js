function percentage() {
    const getal1 = document.getElementById('getal1').value;
    const getal2 = document.getElementById('getal2').value;
    
    const uitkomst = (getal2 / 100) * getal1

    document.getElementById('uitkomst').innerHTML = uitkomst
} document.getElementById('bereken').addEventListener('click', percentage)