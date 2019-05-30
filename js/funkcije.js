var Images = $("img");
console.log(Images);

function MoveSliderLeft()
{
  var FirstRowImg = $(".FirstRow img:first");
  //console.log(FirstRowImg);
  var SecondRowImg = $(".SecondRow img:first");
  //console.log(SecondRowImg);
  var FirstRowImages = $(".FirstRow img");
  var SecondRowImages = $(".SecondRow img");

  var FirstRowImgWidth = FirstRowImg.width();
  var SecondRowImgWidth = SecondRowImg.width();

  FirstRowImg.appendTo(".FirstRow");
  SecondRowImg.appendTo(".SecondRow");

  FirstRowImg.css({
    position: "relative",
    right: -FirstRowImgWidth
  }).animate(
  {
    right: 0
  }, 80);

  SecondRowImg.css({
    position: "relative",
    right: -SecondRowImgWidth,
  }).animate({
    right: 0
  }, 80);

  FirstRowImages.css({
    position: "relative",
    right: -FirstRowImgWidth
  }).animate({
    right: 0
  },80);

  SecondRowImages.css({
    position: "relative",
    right: -SecondRowImgWidth
  }).animate({
    right: 0
  },80);
}

function MoveSliderRight()
{
  var FirstRowImg = $(".FirstRow img:last");
  //console.log(FirstRowImg);
  var SecondRowImg = $(".SecondRow img:last");
  //console.log(SecondRowImg);
  var FirstRowImages = $(".FirstRow img");
  var SecondRowImages = $(".SecondRow img");

  var FirstRowImgWidth = FirstRowImg.width();
  var SecondRowImgWidth = SecondRowImg.width();

  FirstRowImg.prependTo(".FirstRow");
  SecondRowImg.prependTo(".SecondRow");

  FirstRowImg.css({
    position: "relative",
    right: FirstRowImgWidth
  }).animate({
    right: 0
  }, 80);

  SecondRowImg.css({
    position: "relative",
    right: SecondRowImgWidth
  }).animate({
    right: 0
  }, 80);

  FirstRowImages.css({
    position: "relative",
    right: FirstRowImgWidth
  }).animate({
    right: 0
  },80);

  SecondRowImages.css({
    position: "relative",
    right: SecondRowImgWidth
  }).animate({
    right: 0
  },80);
}

$('.ArrowGrayLeft').on('click', function()
{
    MoveSliderLeft();
});

$('.ArrowGrayRight').on('click', function()
{
    MoveSliderRight();
});

$('.WholeSlider').on( "swipeleft", function() 
{ 
    MoveSliderLeft();
});

$('.WholeSlider').on( "swiperight", function() 
{ 
   MoveSliderRight();
});