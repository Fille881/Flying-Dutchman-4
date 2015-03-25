//a sign in page
	$(document).ready(function() {
			$("#btnSignIn").click(function(){
				//window.location.href = "login.html";
				$("#logindiv").css("display", "block");
			});	
			$("#btnCancel").click(function(){
				//hides the pop up
				$("#logindiv").css("display", "none");
			});
			$("#btnLogin").click(function(){
				//checks whether the fields are empty or not and 
				//whether the user entered correct credentials..(not implemented now)
				username=$("#uname").val();
				password=$("#pwd").val();
				//alert(username);
				if(username===''){
					alert("Please fill username field");
					$("#uname").focus();
					return false;
				}
				else if(password===''){
					alert("Please fill password field");
					$("#pwd").focus();
					return false;
				}
				else{
					//here if everything checked is coorect, it redirects it to order page or manager
					$("#logindiv").css("display", "none");
					//redirect it to orders page for customer and bartender
					//redirect it to manager page 
				}
			});	
		});