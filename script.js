$(function(){
  $('.one form .btn').on('click',function(){ 
     $(this).parents('.one').animate({
          top : '-650px'
        },650);
$(this).parents('.one').
     animate({
          top : '0px'
        },650);
    return false;
  });
  $(this).parent().siblings('.one').animate({
   top : '0px'
  },650);
  return false;
 });


$(document).ready(function() {
  $('#btn').click(function() {
    $('input[type="text"]').val('');
  });
    });


function habilitar(){
  t = document.getElementById("t").value;
  val = 0;

if(t == "") {
  val++;
  btn.style.background = "#EBEBEB";
  btn.style.color = "#BFBFBF";

  }
    if(val == 0) {
       document.getElementById("btn").disabled = false;
       btn.style.background = " #DA5E85";
       btn.style.color = "#fff";
   }else{
       document.getElementById("btn").disabled = true ;
}
  }
  document.getElementById("t").addEventListener("keyup",habilitar);

 








