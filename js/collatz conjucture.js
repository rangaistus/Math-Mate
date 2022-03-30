var hotpo = function(n){
    var c = 0;
    
      while (n > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      c++;
    }
  
      return c;
  }
  
  
  // I/O stuff
  document.getElementById("submit").addEventListener("click", function() {
      input = document.getElementById("input").value;
      document.getElementById("output").innerHTML = hotpo(input);
  });