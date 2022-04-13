// factoring
function factorizer(){
    let getal = document.getElementById("getal1").value;
    let factors = [];
    let i = 2;
    while(i <= getal){
        if(getal % i == 0){
            factors.push(i);
            getal = getal / i;
        }else{
            i++;
        }
    }
    document.getElementById("uitkomst").innerHTML = factors;
} document.getElementById("bereken").addEventListener("click", factorizer);