$(document).ready(function() {

//Get purschase history, button can only be clicked once.
isClick = false;
	$(".btn").click(function(){
		
		if(isClick == false) {
			var url =  "http://pub.jamaica-inn.net/fpdb/api.php?username=ervtod&password=ervtod&action=purchases_get";
			jQuery.get(url, function(data){

			
	    		for (i=0; i <= data.payload.length; i++) {
		        	$('#PurchaseHistory1').append('<div class = "timestamp" id = "timestamp'+ i +'" />');
					$("#timestamp"+ i).append(data.payload[i].timestamp);    
		        
		        	$('#PurchaseHistory2').append('<div class = "TransaktionID" id = "TransaktionID'+ i +'" />');
					$("#TransaktionID"+ i).append(data.payload[i].transaction_id);
				
		        	$('#PurchaseHistory3').append('<div class = "Namn" id = "Namn'+ i +'" />');
					$("#Namn"+ i).append(data.payload[i].namn);
				
					$('#PurchaseHistory4').append('<div class = "Namn2" id = "Namn2'+ i +'" />');
					$("#Namn2"+ i).append(data.payload[i].namn2);
					
					$('#PurchaseHistory5').append('<div class = "userID" id = "userID'+ i +'" />');
					$("#userID"+ i).append(data.payload[i].user_id);
					
					$('#PurchaseHistory6').append('<div class = "beerID" id = "beerID'+ i +'" />');
					$("#beerID"+ i).append(data.payload[i].beer_id);
					
					$('#PurchaseHistory7').append('<div class = "price" id = "price'+ i +'" />');
					$("#price"+ i).append(data.payload[i].price);
		
				};
			});
		}
		isClick = true;

	});
})