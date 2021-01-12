class Banconota
{
  constructor(v, c)
  {
    this.valore = v;
    this.quantita = c;
  }
}

var bancomat = [];
var prelevato =[];
bancomat.push( new Banconota(50, 3) );
bancomat.push( new Banconota(20, 2) );
bancomat.push( new Banconota(10, 2) );
var denaro = 210;
var div = 0
var banconote = 0;

var b = document.getElementById("prelevare");
b.addEventListener("click", consegnareBanconote);

function consegnareBanconote()
{
  for(var ba of bancomat)
  {

    if(denaro > 0)
    {
      div = Math.floor(denaro / ba.valore)

      if(div > ba.quantita)
      {
        banconote = ba.quantita;
      }
      else
      {
        papeles = div;
      }

      prelevato.push( new Banconota(ba.valore, banconote) );
      dinero = dinero - (bi.valor * banconote);
    }
  }
  console.log(prelevato);
}
