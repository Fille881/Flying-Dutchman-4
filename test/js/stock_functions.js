$(document).ready(function() {
	
	var url2 =  "http://pub.jamaica-inn.net/fpdb/api.php?username=ervtod&password=ervtod&action=inventory_get";
	
	jQuery.get(url2, function(data){
		
		
		var beerLowStock = 50;
		var outOfStock = 0;
		
		var beerList = [];
		var stockList = [];
		var orderList = [];
		
		
		for(i = 3; i < 166; i++) {
			
			var beerCount = data.payload[i].count;
			/*
			beerList.push(data.payload[i].count);
			
			for(var j=0, len=beerList.length; j<len; j++){
					beerList[j] = parseInt(beerList[j], 10);
				}
				
				function sortNumbers(a,b) {
					return a-b;
				}
				beerList.sort(sortNumbers);
			*/
			
			
			
			if (beerCount < beerLowStock && beerCount > outOfStock) {
				
				$('.table').append('<div class = "orderInput" id = "orderInput'+ i +'" />');
				$("#orderInput"+i).append('<form class = "inputForm" id = "inputForm'+ i +'" />');
				$("#inputForm"+i).append('<input type="textarea" id="textArea'+i+'" value="" />');
				$("#inputForm"+i).append('<button type=button id="order'+i+'">Order</a>');
				$('.receipt').append('<div class="orderName" id ="orderName'+i+'"/>');
				
				
				/*for (k = 3; k < stockList.length; k++){
					if (stockList[k] != ""){
						orderList.push(stockList[k])
					}
				}*/
				
				$(".table").on("click", "#order"+i, function() {
					
					for(j = 0; j < 166; j++) {
						stockList.push($("#textArea"+j).val());
						
						if (stockList[j] != ""){
							orderList.push(stockList[j]);
						
							$('#orderName'+j).text(data.payload[j].namn+" "+stockList[j]);
						}
					}
				})
				
				
				$('.table').append('<div class = "beerNameDiv" id = "beerNameDiv'+ i +'"/>');
				$("#beerNameDiv"+ i).append(data.payload[i].namn);
				
				$('.table').append('<div class = "countDiv" id = "countDiv'+ i +'" />');
				$("#countDiv"+ i).append(data.payload[i].count);
				
			
			}
				
			else if (beerCount <= outOfStock) {
				
				$('.table').append('<div class = "orderInput" id = "orderInput'+ i +'" />');
				$("#orderInput"+i).append('<form class = "inputForm" id = "inputForm'+ i +'" />');
				$("#inputForm"+i).append('<input type="textarea" id="textArea'+i+'" value="2"></input>');
				$("#inputForm"+i).append('<button type="button" id="order'+i+'">Order</button>');
				$('.receipt').append('<div class="orderName" id ="orderName'+i+'"/>');
				
				
				/*
				for (l = 3; l < stockList.length; l++){
					if (stockList[l] != ""){
						orderList.push(stockList[l])
					}
				}*/
				
				$(".table").on("click", "#order"+i, beerOut = function() {
					
					for(j = 0; j < 166; j++) {
						stockList.push($("#textArea"+j).val());
							
							if (stockList[j] != ""){
								orderList.push(stockList[j]);
								
								$('#orderName'+j).text(data.payload[j].namn+" "+stockList[j]);
							}	
					}
				})
				
				
				$('.table').append('<div class = "beerOutNameDiv" id = "beerOutNameDiv'+ i +'" />');
				$("#beerOutNameDiv"+ i).append(data.payload[i].namn);
				
				$('.table').append('<div class = "countOutDiv" id = "countOutDiv'+ i +'" />');
				$("#countOutDiv"+ i).append('Out of stock');
			
			};
		};
		
		
	});
	

})




