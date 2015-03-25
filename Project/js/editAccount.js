// First we get all values from the different textfields. 
//Then we setup the user_edit api url with the various data variables. 
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
					
					 alert("Successfully edited");
				},
				error: function(r)
				{
					alert("Something went wrong");
				}
			});
	 
});	 
	 
	 
	 
})