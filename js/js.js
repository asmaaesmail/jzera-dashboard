$(document).ready(function(){
    var btn1 = document.querySelector('.material-btn');
btn1.onmousedown= function(event){
  var wave = btn1.querySelector('.wave');
  var className = 'material-btn--active';
  if(btn1.classList.contains(className)){
    btn1.classList.remove(className);
  }
  wave.style.left = event.clientX - btn1.offsetLeft +'px';
  wave.style.top = event.clientY - btn1.offsetTop + 'px'; 
  
  void btn1.offsetWidth;
  btn1.classList.add(className);
}


});