$(document).ready(function() {


var options ={ 
   lng: "en" ,  
   resGetPath: 'locales/en/translationEN.json'
};

i18n.init(options, function(t) {
		 				$("#title").i18n();
		 				$("#btnSearch").i18n();
		 				$("#btnSignIn").i18n();
		 				});
		 				
		 				
		$("#btnEN").click(function(){
				var options ={ 
					lng: "en" ,  
					resGetPath: 'locales/en/translationEN.json'
					}
					i18n.init(options, function(t) {
		 				$("#title").i18n();
		 				$("#btnSearch").i18n();
		 				$("#btnSignIn").i18n();

					
					});
					})
		
		
		$("#btnSE").click(function(){
				var options ={ 
					lng: "se" ,  
					resGetPath: 'locales/se/translationSE.json'
					}
					i18n.init(options, function(t) {
		 				$("#title").i18n();
		 				$("#btnSearch").i18n();
		 				$("#btnSignIn").i18n();
					
					});
					});
					
			})