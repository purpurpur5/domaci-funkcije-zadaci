function sabiranje(n,k)
{	
	var suma = 0;
	for (var i=n; i <= k ; i++)
	{
		suma += i;
	}

	console.log("Suma je = " + suma);
}

var n = prompt("Unesite broj n ? ");
var k = prompt("Unesite broj k ? ");
sabiranje(n,k);