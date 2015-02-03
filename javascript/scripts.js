

/*
	   popup = function(userName){
		   
		   var userName = prompt("What is your name?");
		   alert("Good afternoon" + " " + userName);
	
	}
*/

  var numberOfBeers = 0;
    
    makeOrder = function(){
	    
	    var currentOrder = document.getElementById("showOrders").value;
	    
	    if(currentOrder != null){
		    
		    numberOfBeers = numberOfBeers + 1;
	    }
	    
	  else{
		  numberOfBeers = 1;
	  }
	  
	  document.getElementById("showOrders").innerHTML=numberOfBeers;	    
	        
	  }
	 
    
    

