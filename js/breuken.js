function breuken() {

    let input1 = document.getElementById('getal1').value;
    let getal1 = parseFloat(input1)
    document.getElementById('uitkomst').innerHTML = ""

    let counter = 1;

    while (counter <= getal1) {
        document.getElementById('uitkomst').innerHTML += " 1/" + counter + " = " + 1 / counter + "<br>";
        counter++;

    }
}

document.getElementById('bereken').addEventListener("click", breuken);