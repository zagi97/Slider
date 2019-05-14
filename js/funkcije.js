var Slike = $("img");
console.log(Slike);

var KolicinaSlika = Slike.length;
console.log(KolicinaSlika);

var imgWidth = Slike.outerWidth();
console.log(imgWidth);



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


