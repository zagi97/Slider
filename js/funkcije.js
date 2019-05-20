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
    right: FirstRowImgWidth
  }).animate({
    right: 0}, 1000);

  SecondRowImg.css({
    position: "relative",
    right: SecondRowImgWidth
  }).animate({
    right: 0}, 1000);
  /*FirstRowImg.animate({
    position: "relative",
    right : 0
  }, 100);   */

/*SecondRowImg.css({
    position: "relative",
    right: SecondRowImgWidth
  }).stop(true).animate(
    {
      right: 0
    }, 100
  );
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
    right: FirstRowImgWidth
  }).animate({
    right: 0}, 3000);

  SecondRowImg.css({
    position: "relative",
    right: SecondRowImgWidth
  }).animate({
    right: 0}, 3000);
}

$('.ArrowGrayLeft').on('click', function()
{
    MoveSliderLeft();
});

$('.ArrowGrayRight').on('click', function()
{
    MoveSliderRight();
});
