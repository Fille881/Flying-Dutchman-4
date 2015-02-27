//When DOM loaded we attach click event to button
        $(document).ready(function() {
            
			// ----- Navigation -----
			
			$("#btnAccounts").click(function(){
				 window.location.href = "accounts.html";
			})
			
			$("#btnHistory").click(function(){
				window.location.href = "history.html";
			})
			
			$("#btnBack").click(function(){
				window.location.href = "login.html";
			})
			
			// ------------------------
			
			// ----- Order -----

			$("#btnOrder").click(function(){
				
				$('#orderListName li').each(function() {
					 
					beer_id = $(this).attr('id');
					amount = $(this).attr('value');
					dburl = "http://pub.jamaica-inn.net/fpdb/api.php";
					counter = 0;
					
					while (counter < amount) {
					
						
			$.ajax({
				type: "get",
				url: dburl,
				data: 
				{
					beer_id: beer_id,
					username: "ervtod",
					password: "ervtod",
					action: "purchases_append"
				},
				success: function(r)
				{
					response(200, "{type: 'success'}")
				},
				error: function(r)
				{
					response(403, "{type: 'forbidden'}")
				}
			});
			
			alert(counter);
			++counter
			}
			
					});
					
		
					
				});
		
				
		
	
		
	
							
			// ----------------
          
			// url that gives a JSON object of all beverages
			var url =  "http://pub.jamaica-inn.net/fpdb/api.php?username=ervtod&password=ervtod&action=inventory_get";
              
              
                //start ajax request. All data from the url above is being put in data
                jQuery.get(url, function (data){
	               
	               
	               // creating counter to count all array items 
					var o = 35;
	                var total = 50;  //total is 166
	            

				// while the o < total there is a new div created in the beers div. In that div the name, price and beer ID are placed.
	           while (o < total) {
		           
		           var picname = data.payload[o].beer_id;
		           
		       
			    // In the newly created div there is an imageDiv placed which contains a static picture for now (heineken.jpg). The ID of the picture is a name from the beer that is used in the current  loop (e.g. data.payload[16].namn)
				
				$("#beers").append('<div class ="imageDiv" id="imageDiv'+ o +'" />');

                $("#imageDiv" + o).append('<input type="image" name="' + data.payload[o].namn + '" class="picture" src="images/' + picname + '_thmb.JPG" width="60" height="120" id="' + data.payload[o].sbl_price + '" beerID = "' + data.payload[o].beer_id + '" />')

				
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
    
    
sumjq = function(selector) {
				var sum = 0;
				$(selector).each(function() {
				sum += Number($(this).text());
				
    			});
				return sum;
				}
				    // when clicking on a picure of a beer in the class 'picture', the variable beerID is made. The ID of the button clicked is attached to that variable.
 
     
    var count = 0;
    
   $('.picture').click(function() {

beerName = $(this).attr('name');
beerName = beerName.replace(/\s+/g, '');
beerName2 = $(this).attr('name'); 
beerID = $(this).attr('beerID');
beerPrice = $(this).attr('id');
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
$("#overview ul").append("<li id=" + beerID + " value=" + count + ">" + beerName2 + "</li>");
$("#price ul").append("<li id=" + beerPrice + beerName + " >" + beerPrice + "</li>");
$("#amount ul").append("<li id= " + count + beerName + " value=" + count + ">" + count + "</li>");

totalPrice = count * beerPrice;

$("#amountPrice ul").append("<li id= " + beerName + beerName + " value=" + beerPrice + " >" + totalPrice + "</li>");


if ($("#total:empty").length) {
    $("#total").append((sumjq('#totalPerBeer li')));

} else {

    $("#total").empty();
    $("#total").append((sumjq('#totalPerBeer li')));
}


}

});

});

})
/*

function send() {



 			//element = document.getElementById(data.payload[o].beer_id);

var beerId = document.getElementById(this.id);
 			alert(beerId);

}
*/

/*
$("#btnOrders").click(function(){
	
	
	url = "http://pub.jamaica-inn.net/fpdb/api.php?username=jorass&password=jorass&action=purchase_append";
	
	
	beerId = 5555;
	
	$.ajax({
   type: "POST",
   data: {beerId},
   url: url,
   success: function(msg){
	   
    alert("succes");
   }
});
	
	
	})
*/
	
	
	
	
	








 