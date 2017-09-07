function sabiranje(n,k)
{	
	var suma = 0;
	for (var i = n ; i <= k; i++)
	{
		suma = suma + i;
	}

	console.log(suma);
}

var n = prompt("Unesite broj n ");
var k = prompt("Unesite broj k ");

var brojN=parseInt(n);
var brojK=parseInt(k);

sabiranje(brojN,brojK);