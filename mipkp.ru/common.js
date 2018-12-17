$(document).ready(function() {

	$("#myform").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#form").trigger("reset");
			ym(51603815, 'reachGoal', 'sendForm'); 
			return true;
		});
		return false;
	});

});