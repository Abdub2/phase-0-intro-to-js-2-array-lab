const cats=["Milo","Otis","Garfield"];
cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
function destructivelyRemoveLastCat(){
    cats.pop();
}
cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
function destructivelyRemoveFirstCat(){
    cats.shift();
}
cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
function appendCat(name){
var newArray=cats.slice();
newArray.push("Broom");
return newArray;
}
cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
function prependCat(name){
var newArray=cats.slice();
newArray.unshift("Arnold");
return newArray;
}
cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
function removeLastCat(){
var newArray=cats.slice();
newArray.pop();
return newArray;
}
cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
function removeFirstCat(){
var newArray=cats.slice();
newArray.shift();
return newArray;
}