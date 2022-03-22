function tafels() {

    let getal1input = document.getElementById('getal1').value;
    let getal2input = document.getElementById('getal2').value;
    let getal1 = parseFloat(getal1input);
    let getal2 = parseFloat(getal2input);
    document.getElementById('uitkomst').innerHTML = "";

    let counter = 0;
    while(counter <= getal1){
        document.getElementById('uitkomst').innerHTML += counter * getal2 + " ";
        counter++;
    }
}

document.getElementById('bereken').addEventListener("click", tafels);