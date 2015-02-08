// map fixtures for this application
steal("can/util/fixture", function(fixture) {

	fixture({
		'GET /beers' : function(request, response)
		{
			var xmlhttp = new XMLHttpRequest();
			var url = "/getInventory.php";
			xmlhttp.open("get", url);
			xmlhttp.send();
			xmlhttp.onreadystatechange = function() 
			{
				if(xmlhttp.readyState == 4)
				{
					if(xmlhttp.status == 200)
					{
						var json = JSON.parse(xmlhttp.responseText);
						var type = json.type;
						if(type == 'error')
						{
							window.alert(xmlhttp.responseText);//"\nError!\n"+json.payload[0].code + "\n"+json.payload[0].msg);
						}
						else
						{							
							var data = [];
							var count = 0;
							for(var i = 0; i < json.payload.length; i++)
							{
								if(json.payload[i].namn != "" && json.payload[i].count >= 0)
								{
									data.push(
										{
											id: json.payload[i].beer_id, 
											name:json.payload[i].namn, 
											name2: json.payload[i].namn2, 
											sbl_price: json.payload[i].sbl_price,
											pub_price: json.payload[i].pub_price,
											count: json.payload[i].pub_price,
											price: json.payload[i].price
										});
									count++;
								}
							}
							response(
								200,
								"success",
								data);
						}
					}
					else
					{
						window.alert("Error: " + xmlhttp.status);
					}
				}
			}
		},
		'GET /beers/{id}/{user}/{pass}' : function(request, response) {
			var user = request.data.user;
			var pass = request.data.pass;
			var id   = request.data.id;
			var url = "http://pub.jamaica-inn.net/fpdb/api.php?username="+user+"&password="+pass+"&action=beer_data_get&beer_id="+id;
id;
			var http = new XMLHttpRequest();
			http.open("get", url, true);
			http.onreadystatechange = function() 
			{
				if(http.readyState == 4)
				{
					if(http.status == 200)
					{
						var json = JSON.parse(http.responseText);
						var type = json.type;
						if(type == "error")
						{
							window.alert("Error: " + json.payload[0].code);
						}
						else
						{
							response(200,
									 "success",
									 {
										 nr: json.payload[0].nr,
										 articleid: json.payload[0].artikelid,
										 itemnr: json.payload[0].varnummer,
										 name: json.payload[0].namn,
										 name2: json.payload[0].namn2,
										 priceplusvat: json.payload[0].prisinklmoms,
										 volume: json.payload[0].volymiml,
										 priceperl: json.payload[0].prisperliter,
										 sellstart: json.payload[0].saljstart,
										 sellend: json.payload[0].slutlev,
										 itemcategory: json.payload[0].varugrupp,
										 packaging: json.payload[0].forpackning,
										 seal: json.payload[0].forslutning,
										 origin: json.payload[0].ursprung,
										 originname: json.payload[0].ursprunglandnamn,
										 producer: json.payload[0].producent,
										 distributer: json.payload[0].leverantor,
										 vintage: json.payload[0].argang,
										 sampledvintage: json.payload[0].provadargang,
										 alcoholcontent: json.payload[0].alkoholhalt,
										 module: json.payload[0].modul,
										 assortment: json.payload[0].sortiment,
										 ecological: json.payload[0].ekologisk,
										 koscher: json.payload[0].koscher
									 });
						}
					}
					else
					{
						window.alert("Error!");
					}
				}
			}
			http.send();
		},
		'POST /beers' : function(request, response)
		{
		},
		"POST /beers/{id}?{user}&{pass}&{amount}&{price}" : function(request, response)
		{
			var id = request.data.id;
			var user = request.data.user;
			var pass = request.data.pass;
			var amount = request.data.amount;
			var price = request.data.price;
			$.get("http://pub.jamaica-inn.net/fpdb/api.php?username="+user+"&password="+pass+"&action=inventory_append&beer_id="+id+"&amount="+amount+"&price="+price);
			response(200,
					 "success",
					 {
					 });
		},
		'DELETE /beers/{id}' : function(request, response)
		{
		}
	});
});
