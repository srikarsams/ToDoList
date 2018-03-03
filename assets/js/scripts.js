// Check Off specific todos by clicking

$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});

// Delete the Todo by clicking span

$("ul").on("click","span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// Adding new Todos using Keypress event

$("input[type='text']").on("keypress",function(event){
	if(event.which === 13){
		var newTodoText = $(this).val();
		$(this).val("");
		// Create new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodoText + "</li>");
	}
});

$("#toggle").on("click",function() {
	$("input[type='text']").fadeToggle();
});