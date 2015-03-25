//stock information
$(document).ready(function() {
	
	var url = "http://pub.jamaica-inn.net/fpdb/api.php?username=ervtod&password=ervtod&action=inventory_get";
	var url2 = "http://pub.jamaica-inn.net/fpdb/api.php";
	
	
	
	jQuery.get(url, inventory_get = function(data){
		
		var beerBrands = [];
		var beerIds = [];
		var beerPrices = [];
		
		//Push all the non-empty data into an array
		try {
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
		}
		catch (err)
		{console.log(err)}
		
		var beerLowStock = 20;
		var beerCountArray = [];
		var imagesize = 30;
		
		//Button for ordering
		$('.stockBtnRightDiv').append('<button type="button" class="btn" id="orderBtn" data-i18n="stock-page.add">Add</button>');
		
		//Button that clear all values from textareas
		$('.stockBtnRightDiv').append(' <button class="btn" type="button" id="clearBtn" data-i18n="stock-page.clear">Clear</button>');
		$('.stockBtnRightDiv').on("click", "#clearBtn", function() {
				$('.receiptTable').empty();
		});
		
		//Button that clears all the textareas
		$('.stockBtnLeftDiv').append('<button class="btn" type="button" id="clearValuesBtn" data-i18n="stock-page.clear-values">Clear Values</button>');
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
				
				var beerAmount = [];
				
				$('.receiptTable').append('<th id="receiptTableHeader">Receipt</th>')
			
				for(i = 0; i < beerBrands.length; i++) {
					beerAmount.push($("#textArea"+i).val());
			
					if (beerAmount[i] != "" && beerAmount[i] != null){
						$('.receiptTable').append('<tr><td id="tableDataAmount'+i+'">'+beerAmount[i]+
						'</td><td id="tableDataBrand'+i+'">'+beerBrands[i]+'</td><td id="tableDataBeerID'+i+'">'+beerIds[i]+
						'</td><td id="tableDataPrice'+i+'">'+beerPrices[i]+'</td></tr>');
					}

				}
				
				
		});
		
		
		for(i = 0; i < beerBrands.length; i++) {
			
			var beerCount = data.payload[i].count;
				
			//Create divs containing information about beers in stock
			if (beerCount < beerLowStock){
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
				if (beerCount > 0) {
					$("#countDiv"+ i).append(beerCount);
				} else {$('#countDiv'+i).append("Out ("+ beerCount + ")")
				}
			}
			
		
		};
	
	});
	
	
	jQuery.get(url2, inventory_append = function(data){
		$('.stockBtnRightDiv').append('<button class="btn" type="button" id="placeOrderBtn" data-i18n="stock-page.place-order">Order</button>');
		$('.stockBtnRightDiv').on("click", "#placeOrderBtn", place_order = function() {
			
			beerIdArray = [];
			beerAmountArray = [];
			beerPriceArray = [];
			
			for (i=0; i<300; i++){
				if ($('#tableDataBeerID'+i).text() != "" && $('#tableDataBeerID'+i).text() != null){
					beerIdArray.push($('#tableDataBeerID'+i).text());
					beerAmountArray.push($('#tableDataAmount'+i).text());
					beerPriceArray.push($('#tableDataPrice'+i).text());

					
					$.ajax({
						type: "get",
						url: url2,
						data: 
						{
							beer_id: $('#tableDataBeerID'+i).text(),
							username: "ervtod",
							password: "ervtod",
							amount: $('#tableDataAmount'+i).text(),
							price: $('#tableDataPrice'+i).text(),
							action: "inventory_append"
						},
						success: function(r)
						{
							console.log(location.reload());
						},
						error: function(r)
						{
							response(403, "{type: 'forbidden'}");
						}
					});
				}
			}
		});
	});
})














