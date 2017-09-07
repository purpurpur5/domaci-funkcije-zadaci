function izracunavanjeKomada(stanje, cena)
{
	var brojKomada = stanje / cena >> 0 ;
	console.log("Mozete kupiti " + brojKomada + " komada");
}

var stanje = prompt("Unesite stanje novca na racunu ?");
var cena = prompt("Unesite cenu proizvoda ?");

izracunavanjeKomada(stanje, cena);