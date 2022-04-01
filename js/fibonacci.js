var i, fib=new Array(20);

	var n=prompt("type de getal");
	document.write("fibonacci numbers <br/>");
	
	fib[0]=1;
	fib[1]=1;
	document.write(fib[0],"<br/>",fib[1],"<br/>");

	for(i=0;i<n-2;i++) {
		fib[i+2]=fib[i+1]+fib[i];
		document.write(fib[i+2],"<br/>");
	}