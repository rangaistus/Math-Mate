function machten() {
    let input1 = document.getElementById('getal1').value;
    let input2 = document.getElementById('getal2').value;
    let getal1 = parseFloat(input1);
    let getal2 = parseFloat(input2);


    document.getElementById('uitkomst').innerHTML = "";

    let counter = 0;


    while (counter <= getal2) {
        document.getElementById('uitkomst').innerHTML += Math.pow(getal1, counter) + "<br>";
        counter++;
    }
}

document.getElementById('bereken').addEventListener("click", machten);