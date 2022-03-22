// Tables
function tafels() {
    let inputTableOne = document.getElementById('getal1').value;
    let inputTableTwo = document.getElementById('getal2').value;
    let inputOne = parseFloat(inputTableOne);
    let inputTwo = parseFloat(inputTableTwo);
    document.getElementById('uitkomst').innerHTML = "";

    let counter = 0;
    while(counter <= inputOne){
        document.getElementById('uitkomst').innerHTML += counter * inputTwo + " ";
        counter++;
    }
}

document.getElementById('bereken').addEventListener("click", tafels);