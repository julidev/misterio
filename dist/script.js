function action(){
  var ancla=document.getElementsByClassName('visible');
  for(var i=0; i<ancla.length; i++){
    ancla[i].classList.toggle('desaparece');
  }
  
  
}