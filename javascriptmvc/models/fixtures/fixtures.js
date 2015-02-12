// map fixtures for this application
steal("can/util/fixture", function(fixture) {
	var dburl = "http://pub.jamaica-inn.net/fpdb/api.php";
	/**
	 * Beer fixtures
	 */
	fixture({
		'GET /beers' : function(request, response)
		{
			var username = request.data.username;
			var password = request.data.password;
			$.ajax(
				{
					type:"GET",
					url: dburl,
					data: 
					{
						username: username,
						password: password,
						action: "inventory_get"
					},
					success : function(json) 
					{
						var type = json.type;
						if(type == 'error')
						{
							response(401, "{type: 'unauthorized'}")
						}
						else
						{							
							var data = [];
							var count = 0;
							response(
								200,
								"{type: 'success'}",
								{data: json.payload })
						}
					},
					fail : function(r)
					{
						response(400, "{type: 'bad request'}")
					}
				});
		},


		'GET /beers/{id}' : function(request, response) {
			var user = request.data.username;
			var pass = request.data.password;
			var id   = request.data.id;
			$.ajax({
				type: "GET",
				url: dburl,
				data: {
					action: "beer_data_get",
					username: user,
					password: pass,
					beer_id: id
				},
				success: function(json)
				{
					var type = json.type;
					if(type == "error")
					{
						// Todo: Give proper error based on payload code.
						response(401, "{type: 'unauthorized'}")
					}
					else
					{
						response(200,
								 "{type: success}",
								 {
									 data: json.payload[0]
								 })
					}
				},
				fail: function(r)
				{
					response(400, "{type: 'bad request'}")
				}
			});
		},
		

		"PUT /beers/{id}" : function(request, response)
		{
			var id = request.data.id;
			var user = request.data.username;
			var pass = request.data.password;
			var amount = request.data.amount;
			var price = request.data.price;
			$.ajax({
				type: "GET",
				url: dburl,
				data: 
				{
					action: "inventory_append",
					beer_id: id,
					username: user,
					password: pass,
					amount: amount,
					price: price
				},
				success: function(r)
				{
					response(200, "{type: 'success'}")
				},
				error: function(r)
				{
					response(403, "{type: 'forbidden'}")
				}
			});
		}
	});

	/**
	 * Accounts fixtures
	 */
	fixture({
		'GET /accounts' : function(request, response)
		{
			var user = request.data.username;
			var pass = request.data.username;
			$.ajax(
				{
					type: "GET",
					url: dburl,
					data:
					{
						action: "iou_get_all",
						username: user,
						password: pass
					},
					success: function(json)
					{
						if(json.type == "error")
						{
							response(401, "{type: 'unauthorized'}")
						}
						else
						{
							response(200,
									 "{type: 'success'}",
									 {
										 data: json.payload
									 })
						}
					},
					error: function(json)
					{
						response(400, "{type: 'bad request'}")
					}
				});
		}, 


		'GET /accounts/{username}' : function(request, response)
		{
			var user = request.data.username;
			var pass = request.data.password;
			$.ajax(
				{
					type: "GET",
					url: dburl,
					data:
					{
						username: user,
						password: pass,
						action: "iou_get"
					},
					success: function(json)
					{
						if(json.type == "error")
						{
							response(401, "{type: 'unauthorized'}")
						}
						else
						{
							response(200,
									 "{type: 'success'}",
									 {
										 data: json.payload[0]
									 })
						}
					},
					error: function(r)
					{
						response(400, "{type: 'bad request'}")
					}
				});
		},

		
		/* Seems impossible at the moment, never mind this!
		   'GET /accounts/id/{user}' : function(request, response)
		   {
		   var username = request.data.username;
		   var password = request.data.password;
		   var user = user;
		   $.ajax(
		   {
		   type: "GET",
		   url: "/accounts",
		   data:
		   {
		   username: username,
		   password: password
		   },
		   success: function(json)
		   {
		   var arr = json.data;
		   var length = arr.length;
		   var id = -1;
		   console.log(arr[0]);
		   for(var i = 0; i < length; i++)
		   {
		   if(arr[i].username == user)
		   {
		   id = arr[i].user_id;
		   break;
		   }
		   }
		   if(id != -1)
		   {
		   response(200, "{type: 'success'}", {data: id});
		   }
		   else
		   {
		   response(400, "{type: 'bad request'}");
		   }
		   },
		   error: function(json)
		   {
		   }
		   });
		   },*/

		
		'PUT /accounts/{user_id}' : 'PUT /payments/{user_id}'
	});
	
	/**
	 * Purchases fixtures
	 */
	fixture({
		'GET /purchases' : function(request, response)
		{
			var username = request.data.username;
			var password = request.data.password;
			$.ajax(
				{
					type: "GET",
					url: dburl,
					data:
					{
						username: username,
						password: password,
						action: "purchases_get_all"
					},
					success: function(json)
					{
						var type = json.type;
						if(type == "error")
						{
							// Todo: Give proper error based on payload code.
							response(401, "{type: 'unauthorized'}")
						}
						else
						{
							response(200,
									 "{type: success}",
									 {
										 data: json.payload
									 })
						}
					},
					error: function(json)
					{
						response(400, "{type: 'bad request'}")
					},
				});
		},


		'GET /purchases/{username}' : function(request, response)
		{
			var username = request.data.username;
			var password = request.data.password;
			$.ajax(
				{
					type:"GET",
					url: dburl,
					data:
					{
						username: username,
						password: password,
						action: "purchases_get"
					},
					success: function(json)
					{
						var type = json.type;
						if(type == "error")
						{
							// Todo: Give proper error based on payload code.
							response(401, "{type: 'unauthorized'}")
						}
						else
						{
							response(200,
									 "{type: success}",
									 {
										 data: json.payload
									 })
						}
					},
					error: function(json)
					{
						response(400, "{type: 'bad request'}")
					},
				});
		},


		'POST /purchases/' : function(request, response)
		{
			var username = request.data.username;
			var password = request.data.password;
			var beer_id = request.data.beer_id;
			$.ajax(
				{
					type:"GET",
					url: dburl,
					data:
					{
						username: username,
						password: password,
						beer_id: beer_id,
						action: "purchases_append"
					},
					success: function(json)
					{
						var type = json.type;
						if(type == "error")
						{
							// Todo: Give proper error based on payload code.
							response(401, "{type: 'unauthorized'}")
						}
						else
						{
							response(200, "{type: success}")
						}
					},
					error: function(json)
					{
						response(400, "{type: 'bad request'}")
					},
				});
		}
	});
	
	/**
	 * Payments fixtures
	 */
	fixture({
		'GET /payments' : function(request, response)
		{
			var user = request.data.username;
			var pass = request.data.password;
			$.ajax(
				{
					type: "GET",
					url: dburl,
					data:
					{
						username: user,
						password: pass,
						action: "payments_get_all"
					},
					success: function(json)
					{
						if(json.type == "error")
						{
							response(401, "{type: 'unauthorized'}")
						}
						else
						{
							response(200,
									 "{type: 'success'}",
									 {
										 data: json.payload
									 });
						}
					},
					error: function(r)
					{
						response(400, "{type: 'bad request'}")
					}
				});
		},


		'GET /payments/{username}' : function(request, response)
		{
			var user = request.data.username;
			var pass = request.data.password;
			$.ajax(
				{
					type: "GET",
					url: dburl,
					data:
					{
						username: user,
						password: pass,
						action: "payments_get"
					},
					success: function(json)
					{
						if(json.type == "error")
						{
							response(401, "{type: 'unauthorized'}")
						}
						else
						{
							response(200,
									 "{type: 'success'}",
									 {
										 data: json.payload
									 })
						}
					},
					error: function(json)
					{
						response(400, "{type: 'bad request'}")
					}
				});
		},


		'PUT /payments/{user_id}' : function(request, response)
		{
			var username = request.data.username;
			var password = request.data.password;
			var user_id = request.data.user_id;
			var amount = request.data.amount;
			$.ajax(
				{
					type: "GET",
					url: dburl,
					data:
					{
						username: username,
						password: password,
						user_id: user_id,
						amount: amount,
						action: "payments_append"
					},
					success: function(json)
					{
						if(json.type == "error")
						{
							response(401, "{type: 'unauthorized'}")
						}
						else
						{
							response(200,
									 "{type: 'success'}")
						}
					},
					error: function(json)
					{
						response(400, "{type: 'bad request'}")
					}
				});
		}
	});
	
	/**
	 * Logins fixtures
	 */
	fixture({
		'GET /logins/{username}' : function(request, response)
		{
			var username = request.data.username;
			var password = request.data.password;
			// Do an account-request and return a login-response.
			$.ajax(
				{
					type: "GET",
					url: "/accounts/"+username,
					data: { password: password},
					success: function(json)
					{
						response(200,
								 "{type: success}",
								 {
									 data:
									 {
										 type: "user",
										 user_id: json.data.user_id,
										 username: username,
										 password: password, // Feels -reaaally- non-secure, but we'll need to keep it around, so we might as well.
										 first_name: json.data.first_name,
										 last_name: json.data.last_name,
										 assets: json.data.assets
									 }
								 });
					},
					error: function(json)
					{
						response(401, "{type: 'unauthorized'}")
					}
				});
		},
		
		'GET /logins/admin/{username}' : function(request, response)
		{
			var username = request.data.username;
			var password = request.data.password;
			$.ajax(
				{
					type: "GET",
					url: "/accounts/"+username,
					data: { password: password},
					success: function(json)
					{
												// It is not enough that we managed to make an accounts-request - we need to perform an admin-only
						// operation. In this case, we request the purchases listing.
						$.ajax(
							{
								type: "GET",
								url: dburl,
								data:
								{
									username: username,
									password: password,
									action: "purchases_get_all"
								},
								success: function(json2)
								{
									if(json2.type == "error")
									{
										// Someone tried to sneak admin privileges with their regular account! Tsk tsk!
										response(401, "{type: 'unauthorized'}");
									}
									else
									{
										// All right, we're logged in.
										console.log(json);
										// Admin successfully signed in!
										response(200,
												 "{type: success}",
												 {
												 data:
													 {
														 type: "admin",
														 user_id: json.data.user_id,
														 username: username,
														 password: password, // Again, very non-secure, but oh well!
														 first_name: json.data.first_name,
														 last_name: json.data.last_name,
														 assets: json.data.assets,
														 purchases_list: json2.payload
													 }
												 })
									}
								},
								error: function(json)
								{
									response(400, "{type: 'bad request'}")
								}
							});
					},
					error: function(json)
					{
						response(400, "{type: 'bad request'}")
					}
				});
		}
	});
});
