var Slike = $("img");
console.log(Slike);


var KolicinaSlika = Slike.length;
console.log(KolicinaSlika);

var imgWidth = Slike.width();
console.log(imgWidth);
console.log(Slike[0])

var itemToMove = Slike.children().last();
console.log(itemToMove);

function PomakniSliderUdesno()
{
	Slike.clone().appendTo("img");
	var imgWidth = Slike.width();	
	Slike.animate({left: -imgWidth});
}



$('.ArrowBlueRight').on('click', function()
{
	    PomakniSliderUdesno();
});

/*
function getElementIndex() 
{
    var index = 0;
   	if(index < Slike.length-1)
   	{
   		index = index + 1;
   		console.log(index);
   	}
   	else
   	{
   		index = 0;
   	}
    return index;
}
console.log(getElementIndex());
*/