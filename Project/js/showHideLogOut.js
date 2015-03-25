			// this functions checks if the user is logged in (username exists in localstorage). If that is the case, the visibility of the signin button is hidden. If not, the sign in button is visible. Below that is a function that says that the receipt div (#overview) is droppable and it accepts elements with class imageDiv. On drop it executes dropObject.
			
			$(document).ready(function() {
				username = localStorage.getItem("username");
				balance = localStorage.getItem("balance");	
				if (localStorage.getItem("username") === null) {
					$("#btnSignIn").css('visibility', 'visible');
				} else {	
					$("#btnSignIn").css('visibility', 'hidden');
					$("#welcomeback").append("Welcome back " + " " + username + "." + " " + "Your balance =" + balance);
				}
				$("#overview").droppable ({
					accept: ".imageDiv",
					drop: function( event, ui ){
						dropObject(event,ui);
			
					}
				});
    			
			})
