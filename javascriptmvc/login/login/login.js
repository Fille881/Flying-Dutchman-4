steal('can', 'models/login.js', './init.ejs', 'jquery/dom/form_params', 'models/fixtures',
	  function (can, Login, initEJS) {
		  /**
		   * @constructor flying/login/login
		   * @alias LoginControl
		   * @parent flying
		   * @inherits can.Control
		   * Logs in
		   */
		  return can.Control("LoginControl",
							 /** @Prototype */
							 {
								 init: function(element, options)
								 {
									 this.element.html(initEJS());
								 },
								 submit: function(el, ev)
								 {
									 ev.preventDefault();
									 if(el.find('[type=submit]')[0].id == "signin")
									 {
										 el.find('[type=submit]').val('Signing In...');
										 console.log(el.find('[id=username]').val());
										 console.log(el.find('[id=password]').val());
										 var user = el.find('[id=username]').val();
										 var pass = el.find('[id=password]').val();
										 $.ajax(
											 {
												 type: "GET",
												 url: "/logins/" + user,
												 data: {password: pass},
												 success: function(json)
												 {
													 $("#login").html("<form action=\"\" id=\"login\"><input type=\"submit\" value=\"Sign Out\" class=\"button\" id=\"signout\"/></form>");
													 $("#logins").html("<h1>Welcome back " + json.data.first_name + "!</h1><br />" +
																	   "<div class=\"label\" id=\"beerlabel\">Current assets: " + json.data.assets + "<br />" +
																	   "<hr /><br />"+
																	   "Beers!<div id=\"beers\" class=\"beergrid\"></div></div>");
													 $.ajax(
														 {
															 type: "GET",
															 url: "/beers",
															 data:
															 {
																 username: user,
																 password: pass
															 },
															 success: function(json)
															 {
																 var beers = json.data;
																 var cnt = 0;
																 var row = 0;
																 var str1 = "<p class=\"beerrow\" id=\"row_0\">";
																 var str2 = "#row_"+row;
																 var beerstr = "#beers";
																 $(str1).appendTo($(beerstr))
																 console.log(str1);
																 console.log(str2);
																 console.log("");
																 for(var i = 0; i < beers.length; i++)
																 {
																	 if(beers[i].count >= 0 && beers[i].namn != "")
																	 {
																		 if(cnt > 5)
																		 {
																			 row++;
																			 str1 = "<p class=\"beerrow\" id=\"row_"+(row)+"\">"
																			 $(str1).appendTo($("#beers"))
																			 cnt = 0;
																			 str2 = "#row_"+row;
																			 console.log(str1);
																			 console.log(str2);
																			 console.log("");
																		 }
																		 str1 = beers[i].namn+"<br \><div class=\"cnt\">"+beers[i].count+"</div>";
																		 console.log(str1);
																		 console.log(str2);
																		 console.log(" ");
																		 beerstr = 
																		 $("<div class=\"beer\" id=\""+beers[i].beer_id+"\">").html(str1).appendTo($(str2));
																		 cnt++;
}
																 }
															 },
															 error: function(json)
															 {
															 }
														 });
												 },
												 
												 error: function(json)
												 {
													 $("#logins").html("Login Failed!")
												 }
											 });
									 }
									 else if(el.find('[type=submit]')[0].id == "signout")
									 {
										 $("#logins").html("Successfully signed out.");
										 $("#login").html(initEJS());
									 }
								 },
							 });
	  });
