$(document).ready(function() {
	
	$("#logOutBtn").click(function(){
		localStorage.clear();
		
		window.location.href = "login.html";
	});
	
	
})