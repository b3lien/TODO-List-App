$("ul").on("click", ".check", function(){
   $(this).parent().toggleClass("completed");
});

$("ul").on("click", ".delete", function(e){
   $(this).parent().fadeOut(500, function(){
     $(this).remove(); 
   }); 
});

$("input[type='text']").keypress(function(e){
   var newTodo = $(this).val();
    if (e.which === 13 && newTodo !== "") {
      $("ul").append("<li><span class='delete'><i class='fa fa-trash' aria-hidden='true'></i></span><span class='check'><i class='fa fa-check' aria-hidden='true'></i></span> " + newTodo + "</li>");
      $(this).val("");
    }
});

$("h1 i").click(function(){
   $("input[type='text']").fadeToggle();
   if ($(this).hasClass("fa-minus-circle")) {
      $(this).removeClass("fa-minus-circle");
      $(this).addClass("fa-plus-circle");
   } else {
      $(this).removeClass("fa-plus-circle");
      $(this).addClass("fa-minus-circle");
   }
});