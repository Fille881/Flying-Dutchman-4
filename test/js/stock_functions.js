$(document).ready(function() {
	
	var url =  "http://pub.jamaica-inn.net/fpdb/api.php?username=ervtod&password=ervtod&action=inventory_get";
	
	jQuery.get(url, function(data){
		
		var totalBeerBrands = [];
		
		
		try{

			for (i=0; i<400; i++) {
				totalBeerBrands.push(data.payload[i].namn);
				
			}
		
		}
		catch(err){
			//alert(err);
		}
		
		
		var beerLowStock = 50;
		var outOfStock = 0;
		var beerCountArray = [];
		var beerBrands = [];
		var imagesize = 30;
		
		
		$('.stockReceiptDiv').append('<div class="stockBtnDiv"><button type="button" class="btn" id="orderBtn">Add to Orders</button></div>');
		
		$('.stockBtnDiv').append(' <button class="btn" type="button" id="clearBtn">Clear Receipt</button>');
		$('.stockReceiptDiv').on("click", "#clearBtn", clear = function() {
				$('.orderName').empty();
		});
		
		$('.stockBtnDiv').append('<button class="btn" type="button" id="placeOrderBtn">Place Order</button>');
		$('.stockReceiptDiv').on("click", "#placeOrderBtn", placeStockOrder = function() {
			alert("Order Placed");
		});
		
		$('.table').append('<div class="stockBtnDiv"><button class="btn" type="button" id="clearValuesBtn">Clear</button></div>');
		//Clear all values from textareas
		
		
		//titles
		$('.table').append('<div class="orderInput">Amount to Order</div>'+
						'<div class="beerNameDiv">Brand</div>'+
						'<div class="countDiv">Count</div>'
		);
		
		
		
		
		
		for(i = 3; i < totalBeerBrands.length; i++) {
			/*
			function createAssociativeArray(arr1, arr2) {
			var arr = {};
			for(var i = 0, ii = arr1.length; i<ii; i++) {
				arr[arr1[i]] = arr2[i];
			}
			return arr;
			}
			beerCountArray.push(data.payload[i].count)
			beerBrands.push(data.payload[i].namn)
			
			var beerDict = createAssociativeArray(beerCount, beerBrands);
			
			
			//Creates a list of 
			beerCountArray.push(data.payload[i].count);
			
			for(var k=0, len=beerCountArray.length; k<len; k++){
					beerCountArray[k] = parseInt(beerCountArray[k], 10);
			}
			
			function sortNumbers(a,b) {
				return a-b;
			}
			
		
			beerDict.sort(sortNumbers);
			
			console.log(beerDict);
			*/
			
			
			var beerCount = data.payload[i].count;
			
			//Dynamically creates divs for displaying which beers are running out of stock
			$('.table').append('<div class = "orderInput" id = "orderInput'+ i +'" />');
			$("#orderInput"+i).append('<form class = "inputForm" id = "inputForm'+ i +'" />');
			$("#inputForm"+i).append('<input type="textarea" id="textArea'+i+'" value="10"></input>');
			$('.table').append('<div class = "beerNameDiv" id = "beerNameDiv'+ i +'"/>');
			$("#beerNameDiv"+ i).append(data.payload[i].namn);
			$('.table').append('<div class = "countDiv" id = "countDiv'+ i +'" />');
			
			if (beerCount < beerLowStock && beerCount > outOfStock) {
				$("#countDiv"+ i).append(data.payload[i].count);
			}
			
			//
			else {
				$('#countDiv'+i).prepend('<img id="outOfStockImg" src="images/outofstock.jpg" height="'+imagesize+'" width="'+imagesize+'"/>')
			}

			//Adds 
			$(".stockReceiptDiv").on("click", "#orderBtn", beerOut = function() {
				//$('.orderName').empty();
				
				var stockList = [];
				var orderList = [];
				
				//try{
				for(j = 3; j < 166; j++) {
					stockList.push($("#textArea"+j).val());
					
					if (stockList[j] != ""){
						orderList.push(stockList[j]);
					
						$('#orderName'+j).text(stockList[j]+ " " +data.payload[j].namn);
					}
				}
				//}
				//catch(err){
					//alert(err);
				//}
			})		
		};
		
		
	
	});
})




