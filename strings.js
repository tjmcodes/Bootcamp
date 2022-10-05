
function numChar() {
  var message = prompt("Write your message:");
  var amountRemaining = 140 - message.length;

  prompt("You have written " + message.length + " and have " + amountRemaining + " left."); 
  console.log("You have written " + message.length + " and have " + amountRemaining + " left.");
  message.slice(140,0);
}

function maxChar() {
  alert(prompt("write your message:").slice(0,140));
}

function selectCap() {
  var name = prompt("What is your name?");
  var nameSlice = name.slice(1,name.length).toLowerCase(); 
  var nameUpper = name.slice(0,1).toUpperCase();
  var capName = nameUpper + nameSlice
  alert ("Hello " + capName);
} 