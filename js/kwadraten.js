function kwadraten() {

    let input1 = document.getElementById('getal1').value;
    let getal1 = parseFloat(input1)
    document.getElementById('uitkomst').innerHTML = ""

    let counter = 1;

    while (counter <= getal1) {
        document.getElementById('uitkomst').innerHTML += counter + "² = " + Math.pow(counter, 2) + "<br>";
        counter++;

    }
}

document.getElementById('bereken').addEventListener("click", kwadraten);