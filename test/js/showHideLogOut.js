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
