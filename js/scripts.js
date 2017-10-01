// target your button and assign an ask function that outputs
// a random image to your page

var rand = Math.round(Math.random()*20);
var btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
  rand = Math.round(Math.random()*20);
  return rand;
});

function setattri(filename){
  document.getElementsByTagName("IMG")[0].setAttribute("src", filename);
}

function setimage(num){
  if(rand == num)
  {
  var atrib = setattri("img/magic8ball_"+num+".png");
  }
}
//
// function assignrand(){
//   if(rand == 0)
//   {
//     setattri("img/magicball_1");
//   }
// }
function randimg(){
  setimage(rand);
}
