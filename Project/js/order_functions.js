//When DOM loaded we attach click event to button
        $(document).ready(function() {
			
			// ----- Order -----
			//When clicking on the order button the different beers get extracted from the receipt (ul orderListName). A counter is started to loop trough the number of beers for each type. The username and password is fetched from the localstorage which is then used to make the purchase with the purchase_append function. On succes, the balance get's updated (doesn't work), the page get's reloaded and the welcome message reset.

			$("#btnOrder").click(function(){
				
				
				$('#orderListName li').each(function() {
					 
					beer_id = $(this).attr('id');
					amount = $(this).attr('value');
					dburl = "http://pub.jamaica-inn.net/fpdb/api.php";
					counter = 0;
					
					while (counter < amount) {
						
						username = localStorage.getItem("username");
						password = localStorage.getItem("password");
					
						
			$.ajax({
				type: "get",
				url: dburl,
				data: 
				{
					beer_id: beer_id,
					username: username,
					password: password,
					action: "purchases_append"
				},
				success: function(r)
				{
					updateBalance();
					location.reload();
					$("#welcomeback").remove();
					$("#welcomeback").append("Welcome back " + " " + username + "." + " " + "Your balance =" + assets);

					
				},
				error: function(r)
				{
					alert("Something went wrong");
				}
			});

			++counter
			}
			
					});
					
		
					
				});
		
				
		

		
	
							
			// ----------------
          
			// url that gives a JSON object of all beverages
			var url =  "http://pub.jamaica-inn.net/fpdb/api.php?username=ervtod&password=ervtod&action=inventory_get";
              
              
                //start ajax request. All data from the url above is being put in data
                jQuery.get(url, function (data){
	               
	               
	               // creating counter to count all array items  (beers)
					var o = 35;
	                var total = 50;  //total is 166
	            

				// while the o < total there is a new div created in the beers div. In that div the name, price and beer ID are placed.
	           while (o < total) {
		           
		           var picname = data.payload[o].beer_id;
		           
		       
			    // In the newly created div there is an imageDiv placed which contains a static picture for now (heineken.jpg). The ID of the picture is a name from the beer that is used in the current  loop (e.g. data.payload[16].namn)
				
				$("#beers").append('<div class ="imageDiv" name="' + data.payload[o].namn + '" id="imageDiv'+ o +'" beerID = "' + data.payload[o].beer_id + '" priceID="' + data.payload[o].sbl_price + '" />');
				$(".imageDiv").draggable({
					helper: 'clone'
					});
                $("#imageDiv" + o).append('<input type="image" name="' + data.payload[o].namn + '" class= "picture" src="images/' + picname + '_thmb.JPG" width="60" height="120" priceID="' + data.payload[o].sbl_price + '" beerID = "' + data.payload[o].beer_id + '" />')
                $(".picture").draggable();
                
                

				
				//$('#beers').append('<div class ="nameDiv" id="div'+ o +'" />');
				$("#imageDiv" + o).append("<br>" + data.payload[o].namn + " " + o + " " );
			
 
// below is an Flickr function that searches for pictures using the beername as a keyword. The results aren't really satisfying so we will manually download pictures for the beers :)
    
    
  /*
  $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a4617ab6b61a288db5cd804c537f271d&jsoncallback=?&tags=" + data.payload[o].namn ,
        {
          tagmode: "any",
          per_page: "1",
          format: "json"
        },
        
        function(data) { 
		     
         $.each(data.photos.photo, function(i,item){
        src = "http://farm"+ item.farm + ".static.flickr.com/" + item.server + "/"+ item.id +"_"+ item.secret +"_m.jpg";
        $("#div" + o).append('<div class ="imageDiv" id="imageDiv'+ o +'" />');
        $("<img/>").attr( {"src": src, "width": 80, "height": 80}).appendTo("#imageDiv"+ o);
    });
   
        });
*/
       //return o;
       
       //alert();
          ++o;
          
          
          
    }
    
    
TotalSum = function(selector) {
				var sum = 0;
				$(selector).each(function() {
				sum += Number($(this).text());
				
				
    			});
    			sum = sum.toFixed(2);  
				return sum;
				}
				   
 // when clicking on a picure of a beer in the class 'picture', the variable beerID is made. The ID of the button clicked is attached to that variable. There are a lot of if / else creations. This is not the simplest way to do it but since the receipt div consists of a number of ul it became a bit messy. However it works fine. I won't go into detail explaining it all now but in short int checks if the beername already exists in the list, if not it will create the beername and put the count of that beer on 1. The next time that beer is clicked, the beername already exists, the counter field is fetched and raised by one. Then the total price is calculated.
 
     
var count = 0;
    
$('.picture').click(function() {
    

beerName = $(this).attr('name');
beerName = beerName.replace(/\s+/g, '');
beerName2 = $(this).attr('name'); 
beerID = $(this).attr('beerID');
beerPrice = $(this).attr('priceID');
totalPrice = count * beerPrice;

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
        $("#total").append((TotalSum('#totalPerBeer li')));

    } else {
        $("#total").empty();
        $("#total").append((TotalSum('#totalPerBeer li')));
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
    $("#total").append((TotalSum('#totalPerBeer li')));

} else {

    $("#total").empty();
    $("#total").append((TotalSum('#totalPerBeer li')));
}

}

});

});

// Doesn't work

updateBalance  = function (){
		dburl = "http://pub.jamaica-inn.net/fpdb/api.php";
		username = localStorage.getItem("username");
		password = localStorage.getItem("password");
		password = localStorage.getItem("password");
		balance = localStorage.getItem("balance");
		total = $("#total").val();
		assets = balance - total;
		
		$.ajax({
				type: "get",
				url: dburl,
				data: 
				{
					user_id: "24",
					assets: assets ,
					username: username,
					password: password,
					action: "iou_get"
				},
				success: function(r)
				{
					
										
				},
				error: function(r)
				{
					response(403, "{type: 'forbidden'}")
				}
				})
				};

	});
	
		
	








 