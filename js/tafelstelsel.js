// 1 times 10 
function tafelstelsel(){
    let tafel = document.getElementById('getal1').value;
    let resultaat = "";
    for (let i = 1; i <= 10; i++) {
        resultaat += tafel + " x " + i + " = " + (tafel * i) + "<br>";
    }
    document.getElementById("uitkomst").innerHTML = resultaat;
} document.getElementById('bereken').addEventListener('click', tafelstelsel);