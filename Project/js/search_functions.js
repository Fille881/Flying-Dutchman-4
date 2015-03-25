$(document).ready(function() {
		//gets the value from the textbox id search_txt when any key is entered
		//and finds the value that matches it from the beer div and the imageDiv 
		//that is appended to it when it loads
		
		$('#search_txt').keyup(function(){
			var valThis = $(this).val().toLowerCase();	//takes the value from the search_txt	
			if(valThis == ""){
				$('#beers').show();
				//$(this).closest('div.b').fadeIn();
			} 
			else {
				//if value entered, it checks the entered value for each of the beers in div.b(class name of the div beers)
				$('div.b .imageDiv').each(function(){
					var text = $(this).text().toLowerCase();
					var match = text.indexOf(valThis);//holds the number of entered characters matching from the search_txt
					if (match >= 0) { //checks the match and it shows if it is >=0 elso no
						$(this).show();
						//$(this).closest('div.b').show();
					} 
					else {
						$(this).hide();
						//$(this).closest('div.b').fadeOut();
					}
				});	
			}			
		});
		})
		
