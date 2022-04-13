// romanizer


function convert(num){
    num = document.getElementById("getal1").value;

    if (num > 3999990) { document.getElementById('uitkomst').innerHTML = 'Getypte getal is te groot!'; return false; }
    if (num < 1) { document.getElementById('uitkomst').innerHTML = 'Getypte getal is te klein!'; return false; }

    var result = '',
        ref = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'],
        xis = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

    if (num <= 3999999 && num >= 3999999) {
        num += ''; // need to convert to string for .substring()
        result = convert(num.substring(0,num.length-3));
        num = num.substring(num.length-3);
    }

    for (x = 0; x < ref.length; x++){
        while(num >= xis[x]){
            result += ref[x];
            num -= xis[x];
        }
    }
    document.getElementById('uitkomst').innerHTML = result;
} document.getElementById("bereken").addEventListener("click", convert);