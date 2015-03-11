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
		
		var beerLowStock = 30;
		var beerCountArray = [];
		var imagesize = 30;
		
		//Button for ordering
		$('.stockBtnRightDiv').append('<button type="button" class="btn" id="orderBtn">Add</button>');
		
		//Button that clear all values from textareas
		$('.stockBtnRightDiv').append(' <button class="btn" type="button" id="clearBtn">Clear</button>');
		$('.stockBtnRightDiv').on("click", "#clearBtn", function() {
				$('.receiptTable').empty();
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
				$('.receiptTable').empty();
				
				var stockList = [];
			
				for(i = 0; i < beerBrands.length; i++) {
					stockList.push($("#textArea"+i).val());
					
					if (stockList[i] != "" && stockList[i] != "undefined"){
						$('.receiptTable').append('<tr><td id="tableData1:'+i+'">'+stockList[i]+'</td><td id="tableData'+i+':2">'+beerBrands[i]+'</td><td id=tableData'+i+':3>'+beerIds[i]+'</td></tr>');
					}
					
					/*
					//create table with the receipt data
					
						$('#orderName'+i).text(stockList[i] +" "+beerBrands[i] + " " + beerIds[i]);
					}*/
					//console.log($('#tableData'+i+':1').text());
					console.log($('#tableData2:'+i).text());
				}
				
				
		});
		
		/*<tr>
			<td></>
			<td></>
			<td></>
		</tr>
		*/
		for(i = 0; i < beerBrands.length; i++) {
			
			var beerCount = data.payload[i].count;
			
			if (beerCount < beerLowStock){
				//Dynamically creates divs for displaying which beers are running out of stock
				//$('.receiptTable').append('<div class="orderName" id="orderName'+ i +'"/>');
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
				if (beerCount > 0) {		//beerCount < beerLowStock && 
					$("#countDiv"+ i).append(beerCount);
				} else {$('#countDiv'+i).append("Out of stock");		//'<img id="outOfStockImg" src="images/outofstock.jpg" height="'+imagesize+'" width="'+imagesize+'"/>')
				}
			}
			//else {
			//}
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
				
				
				for (i=0; i<300; i++){
					if ($('.receiptTable'+i).text() != ""){
						orderList.push($('.receiptTable'+i).text());
						console.log(orderList[i]);
						
					}
				}

				
				
				
				
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














