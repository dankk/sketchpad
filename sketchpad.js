$(document).ready(function(){
    for(var i = 0; i < 16; i++){
	for(var j = 0; j < 16; j++){
	    $("#container").append("<div class='square'</div>");
	}
    }

    $(".square").hover(function(){
	$(this).css('background-color','red');
    });

});
