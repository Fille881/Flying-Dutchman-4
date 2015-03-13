 $(document).ready(function() {
	 
$("#editAccount").click(function(){
		 
firstname = $('#firstname').val();
lastname = $('#lastname').val();
email = $('#email').val();	 
phone = $('#phone').val();
username = $('#username').val();
password = $('#password').val();

dburl = "http://pub.jamaica-inn.net/fpdb/api.php?username="+username+"&password="+password+"&action=user_edit";

$.ajax({
				type: "get",
				url: dburl,
				data: 
				{
					new_username: username,
					new_password: password, 
					first_name: firstname,
					last_name: lastname,
					email: email,
					phone: phone
				},
				
				success: function(r)
				{
					
					 alert("tadaa");
				},
				error: function(r)
				{
					alert("fail");
				}
			});
	 
});	 
	 
	 
	 
})