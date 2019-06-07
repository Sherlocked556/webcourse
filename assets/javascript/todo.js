$("ul").on("click","li",function(){
    
    $(this).toggleClass("completed");
});
$("ul").on("click","li span",function(event){
    $(this).parent().fadeOut(500,function(){
        this.remove();
    });
    event.stopPropagation();

});
$("input").on("keypress",function(event){
    if(event.which===13){
       var todoText = $(this).val();
       $(this).val("");
       $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+todoText+"</li>"); 
    }
});
$("#plus").click(function(){
    $("input").fadeOut(500,function(){
console.log("clicked");})
});