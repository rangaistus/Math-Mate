function aftrekken() {
    const getal1 = document.getElementById('getal1').value; //value ophalen van input
    const getal2 = document.getElementById('getal2').value;
    const uitkomst = getal1 - getal2; //uitkomst berekenen d.m.v. - aftrekken

    document.getElementById('uitkomst').innerHTML = uitkomst //uitkomst laten zien in html

} document.getElementById('bereken').addEventListener('click', aftrekken) //functie uitvoeren d.m.v. click op button
