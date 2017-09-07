function sabiranje(n)
{
	var suma=0;
	for (var i = 1; i <= n; i++)
	{
		suma = suma + i;
	}
	console.log("Suma iznosi =" + suma);
}

var n = prompt("Unesite broj n ?");
sabiranje(n);