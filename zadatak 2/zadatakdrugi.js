function racunajFaktorijel(n) 
{	
	var faktorijel = 1;
	for (var i = 1; i <= n; i++)
	{
		faktorijel = faktorijel * i ;
	}
	console.log("Faktorijel broja " + n + " iznosi = " + faktorijel);
	return faktorijel;
}

var n = prompt("Unesi broj n ?");
racunajFaktorijel(n);