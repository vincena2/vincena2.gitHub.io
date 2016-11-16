var MIN_LENGTH = 2;

$( document ).ready(function() {
	$("#keyword").keyup(function() {
		var keyword = $("#keyword").val();
		if (keyword.length >= MIN_LENGTH) {

			$.get( "php/auto-complete.php", { keyword: keyword } )
			.done(function( data ) {
				$('#results').html('');
				var results = jQuery.parseJSON(data);
				var askQuestion = "Ask a new question";
				$('#results').append('<div class="item">' + askQuestion + '</div>');
				$(results).each(function(key, value) {
					$('#results').append('<div class="item">' + value + '</div>');
				})

			    $('.item').click(function() {
			    	var text = $(this).html();
			    	$('#keyword').val(text);
			    	if (text == askQuestion){
			    		window.location.href = 'answerQuestion.html';
			    	}
			    })

			});
		} else {
			$('#results').html('');
		}
	});

    $("#keyword").blur(function(){
    		$("#results").fadeOut(500);
    	})
        .focus(function() {		
    	    $("#results").show();
    	});

});