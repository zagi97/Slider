var Slike = $("img");
console.log(Slike);

var i = Slike.length;
var index = 0;
console.log(i);

var imgWidth = Slike.outerWidth();//read the image width

console.log(imgWidth);




function PomakniSliderLijevo()
{
	if(index < Slike.length-1)
	{
		index = index + 1;
		Slike.animate({ "left": "+=50px" });
	}
	else 
	{
		index = 0;
	}


}

$('.ArrowBlueLeft').on("click",function(){
	PomakniSliderDesno();
});


/*
$('.ArrowBlueRight').click(function(){
	Slike.stop(true,true); //complete any animation still running  	
	var newLeft = Slike.position().left+(1*imgWidth);//calculate the new position which is the current position plus the width of one image
	Slike.animate({'left':newLeft+'px'},function(){//slide to the new position...
		if (Math.abs(newLeft) == (0)) //if the slider is displaying the first image, which is the clone of the last image
            {
            Slike.css({'left':-(imgCount)*imgWidth+'px'});//reset the slider back to the last image without animating 
            }
         });
    return false;
});
*/