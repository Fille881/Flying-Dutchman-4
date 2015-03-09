$(document).ready(function() {
	
	var url =  "http://pub.jamaica-inn.net/fpdb/api.php?username=ervtod&password=ervtod&action=inventory_get";
	var url2 = "http://pub.jamaica-inn.net/fpdb/api.php?username=ervtod&password=ervtod&action=inventory_append";
	
	jQuery.get(url, inventory_get = function(data){
		
		var beerBrands = [];
		var beerIds = [];
		var beerPrices = [];
		
		//Push all the non-empty data into an array
		for (i=0; i<163; i++) {
			if (data.payload[i].namn != ""){
				beerBrands.push(data.payload[i].namn);
			}
			
			if (data.payload[i].beer_id != ""){
				beerIds.push(data.payload[i].beer_id);
			}
			
			if (data.payload[i].sbl_price != ""){
				beerPrices.push(data.payload[i].sbl_price);
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
		
		//Button that clears all the textareas
		$('.stockBtnLeftDiv').append('<button class="btn" type="button" id="clearValuesBtn">Clear Values</button>');
		$('.stockBtnLeftDiv').on("click", "#clearValuesBtn", function() {
			for(i = 0; i < beerBrands.length; i++) {
				$("#textArea"+i).val("")
			}
		});
		
		//titles
		$('.table').append('<div class="orderInput">&nbsp</div>'+
						'<div class="beerNameDiv">Brand name</div>'+
						'<div class="beerIdDiv">Beer_Id</div>'+
						'<div class="beerPriceDiv">Beer price</div>'+
						'<div class="countDiv">Stock</div>'
		);
		
		//Button that adds ordered beers to the receipt
		$(".stockBtnRightDiv").on("click", "#orderBtn", function() {
				$('.orderName').empty();
				
				var stockList = [];
			
				for(i = 0; i < beerBrands.length; i++) {
					stockList.push($("#textArea"+i).val());
					
					if (stockList[i] != ""){
						$('#orderName'+i).text(stockList[i] +" "+beerBrands[i] + " " + beerIds[i]);
					}
					
				}
				
		});
		
		
		for(i = 0; i < beerBrands.length; i++) {
			
			var beerCount = data.payload[i].count;
			
			//Dynamically creates divs for displaying which beers are running out of stock
			$('.receiptTable').append('<div class="orderName" id="orderName'+ i +'"/>');
			$('.table').append('<div class = "orderInput" id = "orderInput'+ i +'" />');
			$("#orderInput"+i).append('<form class = "inputForm" id = "inputForm'+ i +'" />');
			$("#inputForm"+i).append('<input type="textarea" id="textArea'+ i +'" value=""></input>');
			$('.table').append('<div class = "beerNameDiv" id = "beerNameDiv'+ i +'"/>');
			$("#beerNameDiv"+ i).append(beerBrands[i]);
			$('.table').append('<div class = "beerIdDiv" id = "beerIdDiv'+ i +'"/>');
			$("#beerIdDiv"+ i).append(beerIds[i]);
			$('.table').append('<div class = "beerPriceDiv" id = "beerPriceDiv'+ i +'"/>');
			$("#beerPriceDiv"+ i).append(beerPrices[i]);
			$('.table').append('<div class = "countDiv" id = "countDiv'+ i +'" />');
			
			//If stock of the beer is running low write the count, if it's completely out of stock write "out of stock"
			if (beerCount < beerLowStock && beerCount > outOfStock) {
				$("#countDiv"+ i).append(beerCount);
			} else {$('#countDiv'+i).append("Out of stock");		//'<img id="outOfStockImg" src="images/outofstock.jpg" height="'+imagesize+'" width="'+imagesize+'"/>')
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
		
		//return beerBrands, beerIds, beerPrices
	
	});
	
	
	jQuery.get(url2, inventory_append = function(data){
		$('.stockBtnRightDiv').append('<button class="btn" type="button" id="placeOrderBtn">Place Order</button>');
			$('.stockBtnRightDiv').on("click", "#placeOrderBtn", place_order = function() {
				
				orderList = [];
				l = [];
				beerDetails = [];
				
				//alert("Work in progress")
				
				
				for (i=0; i<50; i++){
					if ($('#orderName'+i).text() != ""){
						orderList.push($('#orderName'+i).text());
						
					}
				}

				
				
				console.log(orderList);
				
					/*
					
					for (j=0; j=10; j++){
						if (orderList[i] == $('#orderInput'+j).val()+$('beerNameDiv'+j).text()){
							console.log("ok")
						}
					}
				*/

			});
	});
})














