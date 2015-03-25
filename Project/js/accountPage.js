   // the function below appends the user data from the database into a table
   
   
   $
	   
	   
            var url= "http://pub.jamaica-inn.net/fpdb/api.php?username=jorass&password=jorass&action=iou_get_all";
            jQuery.get(url, function(data) {
                var table = '';
                for (var i = 0; i < data.payload.length; i++) {
                    table += '<tr>';
                    table += '<th>'+ data.payload[i].username+'</th>';
                    table += '<th>'+ data.payload[i].first_name+'</th>';
                    table += '<th>'+ data.payload[i].last_name+'</th>';
                    table += '<th>'+ data.payload[i].assets+'</th>';
                    table += '</tr>';
                }
                $(".accountTable").append(table);

            });
            

			// on click buttons are the different pages in the drop down menu and some buttons on the page itself
            $("#btnBack").click(function(){
				 window.location.href = "orders.html";
			})

            $("#btnCreateAccount").click(function(){
                window.location.href = "createAccount.html";
            })

            $("#btnEditAccount").click(function(){
                window.location.href = "editAccount.html";
            })
			
		})