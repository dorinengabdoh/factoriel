  // factoriel
let f=1;
let n=1;
function factoriel(n){
  for(i=1; i<=n; i++ ){
    f=f*i;
  }
  return f;
}
console.log(factoriel(6));