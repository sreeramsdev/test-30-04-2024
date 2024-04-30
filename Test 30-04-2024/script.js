var div=document.getElementById("boxdiv")
var para=document.getElementById("count")
var btn1=document.getElementById("btn-click")
var btn2=document.getElementById("btn-reset")
var btn3=document.getElementById("clr-change1")
var btn4=document.getElementById("clr-change2")
function countIncrease(){
  var count=0
//  for(var i=0;i>=0;i++){
//     count=count+1
//     count++
//   }
  document.getElementById("count").innerHTML="count:"+count++
  if(count%5==0){
   document.getElementById("boxdiv").innerHTML=div.style.borderRadius="40px"
  }
   
    
   
}

function reset(){
    document.getElementById("count").innerHTML="count:"+''
    document.getElementById("boxdiv").innerHTML=div.style.backgroundColor="black"
}

function clrChangeRed(){
    // var btn3=document.getElementById("clr-change1")
    document.getElementById("boxdiv").innerHTML=div.style.backgroundColor="red"
}
function clrChangeblue(){
    // var btn3=document.getElementById("clr-change2")
    document.getElementById("boxdiv").innerHTML=div.style.backgroundColor="blue"
}