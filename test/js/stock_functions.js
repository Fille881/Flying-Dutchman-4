$(document).ready(function() {
	
	var url2 =  "http://pub.jamaica-inn.net/fpdb/api.php?username=ervtod&password=ervtod&action=inventory_get";
	
	jQuery.get(url2, function(data){
				
		var beerLowStock = 50;
		var outOfStock = 0;
		
		var beerList = [];	
		
		for(i = 22; i < 166; i++) {
			
			var beerCount = data.payload[i].count;
			
			if (beerCount < beerLowStock && beerCount > outOfStock) {
				
				beerList.push(data.payload[i].count);
				
				/*for(var j=0, len=beerList.length; j<len; j++){
					beerList[j] = parseInt(beerList[j], 10);
				}
				
				function sortNumbers(a,b) {
					return a-b;
				}
				beerList.sort(sortNumbers);
				
				console.log(beerList);*/
				
				$('.table').append('<div class = "orderInput" id = "orderInput'+ i +'" />');
				$("#orderInput"+ i).append('<form><input type="textarea" id="form'+i+'" value=""></input></form>');
				
				$('.table').append('<div class = "beerNameDiv" id = "beerNameDiv'+ i +'" />');
				$("#beerNameDiv"+ i).append(data.payload[i].namn);
				
				$('.table').append('<div class = "countDiv" id = "countDiv'+ i +'" />');
				$("#countDiv"+ i).append(data.payload[i].count);

			}
				
			else if (beerCount <= outOfStock) {
				$('.table').append('<div class = "orderInput" id = "orderInput'+ i +'" />');
				$("#orderInput"+ i).append('<form><input type="textarea" id="form'+i+'" value="'+data.payload[i].namn+'"></input></form>');
				
				$('.table').append('<div class = "beerOutNameDiv" id = "beerOutNameDiv'+ i +'" />');
				$("#beerOutNameDiv"+ i).append(data.payload[i].namn);
				
				$('.table').append('<div class = "countOutDiv" id = "countOutDiv'+ i +'" />');
				$("#countOutDiv"+ i).append('Out of stock');
			
			}
		};
	});
	


	var makeStockOrder = function(){
		ordersList = {}
		
		for (i=0, i<10, i++){
			
			
		}
			
		
			$('.receipt').append('<div class="orderName" id = "orderName'+i+'"/>');
	};

})
	