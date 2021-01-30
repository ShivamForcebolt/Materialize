$(document).ready(function(){
  $('.modal').modal();
  $('.sidenav').sidenav();
  $('.slider').slider({full_width: true});
  $('.parallax').parallax();  
  $('.carousel').carousel({
    numVisible: 7,
    shift: 55,
    padding: 50
  })
})


function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'));
    instance.open();
}