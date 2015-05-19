$(document).ready(function(){


$(document).on('click', '#size', function(){
    var gridSize = prompt("Enter grid size");
    createGrid(gridSize);
});   

$(document).on('mouseover', '.square', function(){
    $(this).css('background-color','red');
});

$(document).on('mouseleave', '.square', function(){
    $(this).fadeOut(200, function(){
    $(this).css('background-color','white');
    $(this).fadeIn(200);
    });
});



function createGrid(size){
    $("#container").empty();

    var sqSize = 400/size;

    for(var i = 0; i < size; i++){
	for(var j = 0; j < size; j++){
	    $("#container").append('<div class="square"></div>');
	}
    }

    $(".square").width(sqSize);
    $(".square").height(sqSize);
}

});
