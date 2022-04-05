var num, i, chk, temp;
function checkPrime(){
  num = parseInt(document.getElementById("num").value);
  if(num){
    chk=0;
    temp = document.getElementById("resPara");
    temp.style.display = "block";
    for(i=2; i<num; i++){
      if(num%2==0){
        chk++;
        break;
      }
    }
    if(chk==0)
      document.getElementById("res").innerHTML = "wel een priemgetal";
    else
      document.getElementById("res").innerHTML = "geen priemgetal";
  }
}