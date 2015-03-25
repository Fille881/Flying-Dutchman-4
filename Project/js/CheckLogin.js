//this functions checks if the username field and password field has been filled. 
//Then it checks is the user exists in the database, if so it gets the balance and saves it with the username and password in localstorage. 
//Any login is possible since the database was a bit picky.
		
		$(document).ready(function() {

		
			var username;
			var password;
	
			$("#btnLoginCustomer").click(function(){
				window.location.href = "orders.html";
			})
			
			$("#btnLoginBartender").click(function(){
				window.location.href = "orders.html";
			})
			
			$("#btnLoginManager").click(function(){
				window.location.href = "manager.html";
				
				})
				
			$("#btnLogin").click(function()
			{
			
			username = $("#username").val();
			password = $("#password").val();
			
			if (username == null || username == "") {
	
				alert("Please fill in username");
				$("#username").focus();
				return false;
			}
			else if (password == null || password == ""){
				
				alert("Please fill in password");
				$("#password").focus();
				return false;
			}
			else {
				var url =  "http://pub.jamaica-inn.net/fpdb/api.php?username="+username+"&password="+password+"&action=iou_get";
              
                //start ajax request. All data from the url above is being put in data
                jQuery.get(url, function (data){
	                
	                var balance =  data.payload[0].assets;
	                localStorage.setItem("balance", balance);
	            	localStorage.setItem("username", username);
					localStorage.setItem("password", username);
					window.location.href = "orders.html";  
				});  		
			}
			
		
		

			});
	
		})