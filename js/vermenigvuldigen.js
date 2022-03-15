function vermenigvuldigen() {
    const getal1 = document.getElementById('getal1').value;
    const getal2 = document.getElementById('getal2').value;
    const uitkomst = getal1 * getal2;

    document.getElementById('uitkomst').innerHTML = uitkomst
} document.getElementById('bereken').addEventListener('click', vermenigvuldigen)