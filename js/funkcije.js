var Images = $("img");
console.log(Images);

function MoveSliderLeft()
{
  var FirstRowImg = $(".FirstRow img:first");
  //console.log(FirstRowImg);
  var SecondRowImg = $(".SecondRow img:first");
  //console.log(SecondRowImg);
  var FirstRowImgWidth = FirstRowImg.width();
  var SecondRowImgWidth =SecondRowImg.width();
  FirstRowImg.appendTo(".FirstRow");	
  SecondRowImg.appendTo(".SecondRow");

  FirstRowImg.css({
    position: "relative",
    left: FirstRowImgWidth,
  }).animate({
    left: 0}, "slow");

  SecondRowImg.css({
    position: "relative",
    left: SecondRowImgWidth
  }).animate({
    left: 0}, "slow");
  /*FirstRowImg.animate({
    position: "relative",
    right : 0
  }, 100);   */

/*
  SecondRowImg.animate({
    left: SecondRowImgWidth,
    height: 'toggle'
  }, "slow");*/
}

function MoveSliderRight()
{
  var FirstRowImg = $(".FirstRow img:last");
  //console.log(FirstRowImg);
  var SecondRowImg = $(".SecondRow img:last");
  //console.log(SecondRowImg);
  var FirstRowImgWidth = FirstRowImg.width();
  var SecondRowImgWidth =SecondRowImg.width();
  FirstRowImg.detach().prependTo(".FirstRow");
  SecondRowImg.detach().prependTo(".SecondRow");

  FirstRowImg.css({
    position: "relative",
    left: FirstRowImgWidth
  }).animate({
    left: 0}, "slow");

  SecondRowImg.css({
    position: "relative",
    left: SecondRowImgWidth
  }).animate({
    left: 0}, "slow");
}

$('.ArrowGrayLeft').on('click', function()
{
    MoveSliderLeft();
});

$('.ArrowGrayRight').on('click', function()
{
    MoveSliderRight();
});
