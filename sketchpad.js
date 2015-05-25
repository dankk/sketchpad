var gridSize;

$(document).ready(function(){

    gridSize = 16;
    createGrid(gridSize, 'square');


    $("#size").click(function(){
	gridSize = prompt("Enter grid size");
	createGrid(gridSize, 'square');
    });  

    $('#random').click(function(){
	$('#container > div').toggleClass('randSquare');
    });   
});


$(document).on('click', '#clear', function(){
    $('#container > div').css('background-color', 'white');
}); 

$(document).on('mouseover', '.square', function(){
    $(this).css('opacity', '100');
    $(this).css('background-color','red');
});

$(document).on('mouseover', '.randSquare', function(){
    $(this).css('opacity', '100');
    $(this).css('background-color','#'+Math.floor(Math.random()*16777215).toString(16));
}); //colour generator from http://www.paulirish.com/2009/random-hex-color-code-snippets/

$(document).on('click', '#trail', function(){
    $('#container > div').toggleClass('trail');
});

$(document).on('mouseleave', '.trail', function(){
	$(this).animate({opacity: 0}, 200);
});

function createGrid(size, type){
    $("#container").empty();

    var sqSize = 400/size;

    for(var i = 0; i < size; i++){
	for(var j = 0; j < size; j++){
	    $("#container").append($("<div class=" + type + "></div>").height(sqSize).width(sqSize));
	}
    }

}

