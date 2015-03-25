//this page creates a new user 
 $(document).ready(function() {

 //when a button is clicked,it takes the values of each fields into a variable and changes them by assigning
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
				//success message
				success: function(r)
				{
					
					 alert("User succesfully created");
				},
				//error message
				error: function(r)
				{
					alert("Something went wrong");
				}
			});
	 
});	 
	 
	 
	 
})