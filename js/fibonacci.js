// fibonacci

function fibonacci(){
    getal1 = document.getElementById("getal1").value;
    let fibonacci = [0, 1];

    for (let i = 2; i < getal1; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    document.getElementById('uitkomst').innerHTML = fibonacci;
} document.getElementById('bereken').addEventListener('click', fibonacci);