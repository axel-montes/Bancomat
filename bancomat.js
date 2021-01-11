class Banconota
{
  constructor(v, c)
  {
    this.valore = v;
    this.quantità = c;
  }
}

var bancomat = [];
var prelevato =[];
bancomat.push( new Banconota(50, 3) );
bancomat.push( new Banconota(20, 2) );
bancomat.push( new Banconota(10, 2) );
var denaro = 210;
var div = 0
var biglietti = 0;

var b = document.getElementById("prelevare");
b.addEventListener("click", consegnareBanconote);

function consegnareBanconote()
{
  for(var bi of bancomat)
  {
    console.log(bi);
  }
}
