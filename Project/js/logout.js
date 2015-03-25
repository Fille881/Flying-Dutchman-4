//the logout page when the button is clicked, it is redirected to the login page
$(document).ready(function() {
	
	$("#logOutBtn").click(function(){
		localStorage.clear();
		
		window.location.href = "login.html";
	});
	
	
})