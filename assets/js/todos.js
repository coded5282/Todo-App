// Check off specific todos by clicking
$("ul").on("click", "li", function() { // so we can click on lis that do not exist at the time
	$(this).toggleClass("completed"); 
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) { // ul exists, but not all spans will exist at time so formatted like this
	$(this).parent().fadeOut(500,function() {
		$(this).remove(); 
	});
	event.stopPropagation(); 
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		var todoText = $(this).val(); // grabbing input
		$(this).val(""); 
		$("ul").append("<li><span>X</span> " + todoText + "</li>"); 
	} 
});