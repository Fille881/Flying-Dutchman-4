$(document).ready(function() {
	
	var url = "http://pub.jamaica-inn.net/fpdb/api.php?username=ervtod&password=ervtod&action=inventory_get";
	var url2 = "http://pub.jamaica-inn.net/fpdb/api.php";
	
	
	
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
				
				var beerAmount = [];
				
				$('.receiptTable').append('<th id="receiptTableHeader">Receipt</th>')
			
				for(i = 0; i < beerBrands.length; i++) {
					beerAmount.push($("#textArea"+i).val());
			
					if (beerAmount[i] != "" && beerAmount[i] != null){
						$('.receiptTable').append('<tr><td id="tableDataAmount'+i+'">'+beerAmount[i]+
						'</td><td id="tableDataBrand'+i+'">'+beerBrands[i]+'</td><td id="tableDataBeerID'+i+'">'+beerIds[i]+
						'</td><td id="tableDataPrice'+i+'">'+beerPrices[i]+'</td></tr>');
					}
					
					
					/*
					//create table with the receipt data
					
						$('#orderName'+i).text(beerAmount[i] +" "+beerBrands[i] + " " + beerIds[i]);
					}*/
					//console.log($('#tableData'+i+':1').text());
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
				} else {$('#countDiv'+i).append("Out of stock ("+ beerCount + ")")	//'<img id="outOfStockImg" src="images/outofstock.jpg" height="'+imagesize+'" width="'+imagesize+'"/>')
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
			
			beerIdArray = [];
			beerAmountArray = [];
			beerPriceArray = [];
			
			//alert("Work in progress")
			
			
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
							console.log("Order placed");
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

var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;

function switch_style ( css_title )
{
// You may use this script on your site free of charge provided
// you do not remove this notice or the URL below. Script from
// http://www.thesitewizard.com/javascripts/change-style-sheets.shtml
  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie( style_cookie_name, css_title,
      style_cookie_duration );
  }
}

function set_style_from_cookie()
{
  var css_title = get_cookie( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
    // http://www.thesitewizard.com/javascripts/cookies.shtml
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie ( cookie_name )
{
    // http://www.thesitewizard.com/javascripts/cookies.shtml
    var cookie_string = document.cookie ;
    if (cookie_string.length != 0) {
        var cookie_value = cookie_string.match (
                        '(^|;)[\s]*' +
                        cookie_name +
                        '=([^;]*)' );
        return decodeURIComponent ( cookie_value[2] ) ;
    }
    return '' ;
}














