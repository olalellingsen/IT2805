var counter = 1;

//checks first button when the page loades 
var btn1 = document.getElementById('button1');
btn1.checked = true;

//automatic slides
setInterval(function () { 
  var btn = document.getElementById('button'+counter);
  btn.checked = true;
  
  btn.addEventListener("click", function (){
    counter = btn.id.slice(6)
  });

  counter ++;
  if (counter > 5) {
    counter = 1;
  }
  
}, 7000);




