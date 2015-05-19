$(document).ready(function(){

    createGrid(16);

});
    
$(document).on('click', '#size', function(){
    var gridSize = prompt("Enter grid size");
    createGrid(gridSize);
});   

$(document).on('mouseover', '.square', function(){
    $(this).css('opacity', '100');
    $(this).css('background-color','red');
});

$(document).on('mouseleave', '.square', function(){

    $(this).animate({opacity: 0}, 200);
});



function createGrid(size){
    $("#container").empty();

    var sqSize = 400/size;

    for(var i = 0; i < size; i++){
	for(var j = 0; j < size; j++){
	    $("#container").append($("<div class='square'></div>").height(sqSize).width(sqSize));
	}
    }

}

