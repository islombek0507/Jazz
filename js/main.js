
//1-shart
var music= ["Jazz", "Blues"];
console.log(music);
//2-shart
var two = music.push("Rock-n-Roll");
console.log(music);
//3-shart
if(music.length%2==1){
     music.splice(Math.floor(music.length/2), 1, "Classics");
    console.log(music);
}
//4-shart
music.shift();
console.log(music);
//5-shart
music.unshift("Rap" ,"Regge");
console.log(music);