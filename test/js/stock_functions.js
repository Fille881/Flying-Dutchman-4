$(document).ready(function() {
	
	var url =  "http://pub.jamaica-inn.net/fpdb/api.php?username=ervtod&password=ervtod&action=inventory_get";
	
	jQuery.get(url, function(data){
		
		var beerBrands = [];

		//Push all the non-empty data into an array
		for (i=0; i<163; i++) {
			if (data.payload[i].namn != ""){
			beerBrands.push(data.payload[i].namn);
			}
			
		}
		
		var beerLowStock = 50;
		var outOfStock = 0;
		var beerCountArray = [];
		var imagesize = 30;
		
		//Button for ordering
		$('.stockBtnRightDiv').append('<button type="button" class="btn" id="orderBtn">Add</button>');
		
		//Button that clear all values from textareas
		$('.stockBtnRightDiv').append(' <button class="btn" type="button" id="clearBtn">Clear</button>');
		$('.stockBtnRightDiv').on("click", "#clearBtn", function() {
				$('.orderName').empty();
		});
		
		$('.stockBtnRightDiv').append('<button class="btn" type="button" id="placeOrderBtn">Place</button>');
		$('.stockBtnRightDiv').on("click", "#placeOrderBtn", function() {
			alert("Order Placed");
		});
		
		$('.stockBtnLeftDiv').append('<button class="btn" type="button" id="clearValuesBtn">Clear Values</button>');
		$('.stockBtnLeftDiv').on("click", "#clearValuesBtn", function() {
			for(i = 0; i < beerBrands.length; i++) {
				$("#textArea"+i).val("")
			}
		});
		
		
		//titles
		$('.table').append('<div class="orderInput">&nbsp</div>'+
						'<div class="beerNameDiv">Brand</div>'+
						'<div class="countDiv">Count</div>'
		);
		
		$(".stockBtnRightDiv").on("click", "#orderBtn", function() {
				$('.orderName').empty();
				
				var stockList = [];
				var orderList = [];
			
				for(i = 0; i < beerBrands.length; i++) {
					stockList.push($("#textArea"+i).val());
					
					if (stockList[i] != ""){
						$('#orderName'+i).text(stockList[i] +" "+beerBrands[i]);
					}
					
				}
				
		});
		
		
		for(i = 0; i < beerBrands.length; i++) {
			
			var beerCount = data.payload[i].count;
			
			//Dynamically creates divs for displaying which beers are running out of stock
			$('.stockReceiptDiv').append('<div class="orderName" id="orderName'+ i +'"/>');
			$('.table').append('<div class = "orderInput" id = "orderInput'+ i +'" />');
			$("#orderInput"+i).append('<form class = "inputForm" id = "inputForm'+ i +'" />');
			$("#inputForm"+i).append('<input type="textarea" id="textArea'+ i +'" value=""></input>');
			$('.table').append('<div class = "beerNameDiv" id = "beerNameDiv'+ i +'"/>');
			$("#beerNameDiv"+ i).append(beerBrands[i]);
			$('.table').append('<div class = "countDiv" id = "countDiv'+ i +'" />');
			
			if (beerCount < beerLowStock && beerCount > outOfStock) {
				$("#countDiv"+ i).append(beerCount);
			}
			
			//
			else {
				$('#countDiv'+i).append("Out of stock");		//'<img id="outOfStockImg" src="images/outofstock.jpg" height="'+imagesize+'" width="'+imagesize+'"/>')
			}
			
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
			//try{}
			//catch(err){
			//alert(err);
			//console.log(err)
			//}
		};
		
		
	
	});
})




