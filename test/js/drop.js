


var count = 0;
    
dropObject = function( event,ui) {
			
			
				beerName = ui.draggable.attr('name');
				beerName = beerName.replace(/\s+/g, '');
				beerName2 = ui.draggable.attr('name'); 
				beerID = ui.draggable.attr('beerID');
				beerPrice = ui.draggable.attr('priceID');
			    totalPrice = count * beerPrice;

			 alert(beerName + ' was dropped from ' + ui.draggable.parent().attr('id'));
			
			sum = 0;

if ($("li[id*='" + beerID + "']").length) {
		
	
count = ($("#1" + beerName).attr('value'));
count++;

//alert(count + beerName);
$("#1" + beerName).text(count);
$("#1" + beerName).attr('value', count);
$("#" + beerID).attr('value', count);

totalPrice = ($("#" + beerName + beerName).attr('value'));


if ($("#amountPrice ul:contains('" + totalPrice + "')").length) {

    totalPrice = count * beerPrice;
    $("#" + beerName + beerName).text(totalPrice);
    $("#" + beerName + beerName).attr('value', totalPrice);

    if ($("#total:empty").length) {
        $("#total").append((sumjq('#totalPerBeer li')));

    } else {
        $("#total").empty();
        $("#total").append((sumjq('#totalPerBeer li')));
    }

} else {
    alert("Something went wrong");
}
} else {


count = 1;

$("#overview ul").append("<li id=" + beerID + " value=" + count + "> <a id = " + beerID + " href='#' onClick='deleteEntry(this.id)'> <img src=images/removeIcon.png heigth=16px width=16px></a> " + beerName2 + "   </li>");
$("#price ul").append("<li id=" + beerPrice + beerName + " id2=" + beerID + " >" + beerPrice + "</li>");
$("#amount ul").append("<li id= " + count + beerName + " value=" + count + " id2=" + beerID + ">" + count + "</li>");

totalPrice = count * beerPrice;

$("#amountPrice ul").append("<li id= " + beerName + beerName + " value=" + beerPrice + " id2=" + beerID + ">" + totalPrice + "</li>");


if ($("#total:empty").length) {
    $("#total").append((sumjq('#totalPerBeer li')));

} else {

    $("#total").empty();
    $("#total").append((sumjq('#totalPerBeer li')));
}

}

				
				
			}