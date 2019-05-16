var Images = $("img");
console.log(Images);

function MoveSliderLeft()
{
  var FirstRowImg = $(".FirstRow img:first");
  console.log(FirstRowImg);
  var SecondRowImg = $(".SecondRow img:first");
  console.log(SecondRowImg);
  var FirstRowImgWidth = FirstRowImg.width();
  var SecondRowImgWidth =SecondRowImg.width();
  FirstRowImg.detach().appendTo(".FirstRow");	
  SecondRowImg.detach().appendTo(".SecondRow");

}

function MoveSliderRight()
{
  var FirstRowImg = $(".FirstRow img:last");  
  console.log(FirstRowImg);
  var SecondRowImg = $(".SecondRow img:last");
  console.log(SecondRowImg);
  var FirstRowImgWidth = FirstRowImg.width();
  var SecondRowImgWidth =SecondRowImg.width();
  FirstRowImg.detach().prependTo(".FirstRow");  
  SecondRowImg.detach().prependTo(".SecondRow");
}

$('.ArrowGrayLeft').on('click', function()
{
    MoveSliderLeft();
});

$('.ArrowGrayRight').on('click', function()
{
    MoveSliderRight();
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
/*

*/    
