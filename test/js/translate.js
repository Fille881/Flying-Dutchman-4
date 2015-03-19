$(document).ready(function() {
var options ={ 
   lng: "en" ,  
   resGetPath: 'locales/en/translationEN.json'
};
i18n.init(options, function(t) {
	
		//allPages
		$("#logOutBtn").i18n();
		$("#changeThemeTitle").i18n();
		$("#standardThemeBtn").i18n();
		$("#alternateThemeBtn").i18n();
		
		//home page
		$("#homeB").i18n();
		$("#btn-name").i18n();

		//Order page
		$("#title").i18n();
		$("#btnSearch").i18n();
		$("#btnSignIn").i18n();
		$("#btnOrder").i18n();
		$("#btnLogin").i18n();
		$("#btnCancel").i18n();
		$("#login").i18n();
		$("#username").i18n();
		$("#password").i18n();
		$("#item-name").i18n();
		$("#unit-price").i18n();
		$("#quantity").i18n();
		$("#order-price").i18n();
		$("#btnViewPurchases").i18n();
		$("#btnDeleteAll").i18n();
		
	
		
		//History-page
		$("#btnBack").i18n();
		$("#btnCheckP").i18n();
		$("#timestamp").i18n();
		$("#transaktion-id").i18n();
		$("#namn1").i18n();
		$("#namn2").i18n();
		$("#user-id").i18n();
		$("#beer-id").i18n();
		$("#h-price").i18n();
		
		//Account-page
		$("#btnCreateAccount").i18n();
		$("#btnDeleteAccount").i18n();
		$("#btnEditAccount").i18n();
		$("#balance").i18n();
		$("#btnBackOrders").i18n();
		$("#btnDelete").i18n();
		
		
	
		//Edit account-page
		$("#usernameLabel").i18n();
		
		
		//Editaccount-page
		$("#usernameLabel").i18n();
		$("#newpasswordLabel").i18n();
		$("#passwordLabel").i18n();
		$("#emailLabel").i18n();
		$("#phoneLabel").i18n();
		$("#name1Label").i18n();
		$("#name2Label").i18n(); 
		$("#undo").i18n();
		$("#redo").i18n();
		
		//Manager-page
		$("#btnStock").i18n();
		$("#btnSales").i18n();
		$("#btnAccounts").i18n();
		$("#btnBackLogin").i18n();
		
		//Stock-page
		$("#btnBackManager").i18n();
		$("#title2").i18n();
		$("#title3").i18n();
		$("#clearValuesBtn").i18n();
		$("#clearBtn").i18n();
		$("#orderBtn").i18n();
		$("#placeOrderBtn").i18n();
		
		//Login-page
		$("#btnLoginCustomer").i18n();
		$("#btnLoginBartender").i18n();
		$("#btnLoginManager").i18n();
		$("#usernameLogin").i18n();
		$("#passwordLogin").i18n();

		
		//Navigation
		$("#loginMenu").i18n();
		$("#products").i18n();
		$("#orderMenu").i18n();
		$("#status").i18n();
		$("#stockMenu").i18n();
		$("#historyMenu").i18n();
		$("#user").i18n();
		$("#newUserMenu").i18n();
		$("#editUserMenu").i18n();
		$("#contact").i18n();
		$("#receipt").i18n();
		$("#reportMenu").i18n();
		$("#edit-user").i18n();
	
		});
		
		
		$("#btnEN").click(function(){
var options ={ 
	lng: "en" ,  
	resGetPath: 'locales/en/translationEN.json'
	}
	i18n.init(options, function(t) {
		//allPages
		$("#logOutBtn").i18n();
		$("#changeThemeTitle").i18n();
		$("#standardThemeBtn").i18n();
		$("#alternateThemeBtn").i18n();
		
		//home page
		$("#homeB").i18n();
		$("#btn-name").i18n();
		
		//Order page
		$("#title").i18n();
		$("#btnSearch").i18n();
		$("#btnSignIn").i18n();
		$("#btnOrder").i18n();
		$("#btnLogin").i18n();
		$("#btnCancel").i18n();
		$("#login").i18n();
		$("#item-name").i18n();
		$("#unit-price").i18n();
		$("#unitprice").i18n();
		$("#quantity").i18n();
		$("#order-price").i18n();
		$("#btnDeleteAll").i18n();
		
		
		//History-page
		$("#btnBack").i18n();
		$("#btnCheckP").i18n();
		$("#timestamp").i18n();
		$("#transaktion-id").i18n();
		$("#namn1").i18n();
		$("#namn2").i18n();
		$("#user-id").i18n();
		$("#beer-id").i18n();
		$("#h-price").i18n();
								
		//Account-page
		$("#btnCreateAccount").i18n();
		$("#btnDeleteAccount").i18n();
		$("#btnEditAccount").i18n();
		$("#balance").i18n();
		$("#btnBackOrders").i18n();
		$("#btnDelete").i18n();
		
		
		//Editaccount-page
		$("#usernameLabel").i18n();
		$("#newpasswordLabel").i18n();
		$("#passwordLabel").i18n();
		$("#emailLabel").i18n();
		$("#phoneLabel").i18n();
		$("#name1Label").i18n();
		$("#name2Label").i18n();
		$("#undo").i18n();
		$("#redo").i18n();
		
		//Manager-page
		$("#btnStock").i18n();
		$("#btnSales").i18n();
		$("#btnAccounts").i18n();
		$("#btnBackLogin").i18n();
		
		//Stock-page
		$("#btnBackManager").i18n();
		$("#title2").i18n();
		$("#title3").i18n();
		$("#clearValuesBtn").i18n();
		$("#clearBtn").i18n();
		$("#orderBtn").i18n();
		$("#placeOrderBtn").i18n();
		
		//Login-page
		$("#btnLoginCustomer").i18n();
		$("#btnLoginBartender").i18n();
		$("#btnLoginManager").i18n();
		$("#passwordLogin").i18n();
		$("#usernameLogin").i18n();
		
		
		//Navigation
		$("#loginMenu").i18n();
		$("#products").i18n();
		$("#order").i18n();
		$("#status").i18n();
		$("#stockMenu").i18n();
		$("#historyMenu").i18n();
		$("#user").i18n();
		$("#newUserMenu").i18n();
		$("#editUserMenu").i18n();
		$("#contact").i18n();
		$("#receipt").i18n();
		$("#reportMenu").i18n();
		$("#edit-user").i18n();
	
	
	});
	})


		$("#btnSE").click(function(){
	var options ={ 
	lng: "se" ,  
	resGetPath: 'locales/se/translationSE.json'
	}
	i18n.init(options, function(t) {
		//allPages
		$("#logOutBtn").i18n();
		$("#changeThemeTitle").i18n();
		$("#standardThemeBtn").i18n();
		$("#alternateThemeBtn").i18n();
		
		//home page
		$("#homeB").i18n();
		$("#btn-name").i18n();
		
		//Order page
		$("#title").i18n();
		$("#btnSearch").i18n();
		$("#btnSignIn").i18n();
		$("#btnOrder").i18n();
		$("#btnLogin").i18n();
		$("#btnCancel").i18n();
		$("#login").i18n();
		$("#username").i18n();
		$("#password").i18n();
		$("#item-name").i18n();
		$("#unit-price").i18n();
		$("#quantity").i18n();
		$("#order-price").i18n();
		$("#btnDeleteAll").i18n();
		
		
		//History-page
		$("#btnBack").i18n();
		$("#btnCheckP").i18n();
		$("#timestamp").i18n();
		$("#transaktion-id").i18n();
		$("#namn1").i18n();
		$("#namn2").i18n();
		$("#user-id").i18n();
		$("#beer-id").i18n();
		$("#h-price").i18n();
		
		//Account-page
		$("#btnCreateAccount").i18n();
		$("#btnDeleteAccount").i18n();
		$("#btnEditAccount").i18n();
		$("#balance").i18n();
		$("#btnBackOrders").i18n();
		$("#btnDelete").i18n();
	
		
		//Editaccount-page
		$("#usernameLabel").i18n();
		$("#newpasswordLabel").i18n();
		$("#passwordLabel").i18n();
		$("#emailLabel").i18n();
		$("#phoneLabel").i18n();
		$("#name1Label").i18n();
		$("#name2Label").i18n();
		$("#undo").i18n();
		$("#redo").i18n();
		
		//Manager-page
		$("#btnStock").i18n();
		$("#btnSales").i18n();
		$("#btnAccounts").i18n();
		$("#btnBackLogin").i18n();
		
		//Stock-page
		$("#btnBackManager").i18n();
		$("#title2").i18n();
		$("#title3").i18n();
		$("#clearValuesBtn").i18n();
		$("#clearBtn").i18n();
		$("#orderBtn").i18n();
		$("#placeOrderBtn").i18n();
		
		//Login-page
		$("#btnLoginCustomer").i18n();
		$("#btnLoginBartender").i18n();
		$("#btnLoginManager").i18n();
		$("#passwordLogin").i18n();
		$("#usernameLogin").i18n();
		
		//Navigation
		$("#loginMenu").i18n();
		$("#products").i18n();
		$("#order").i18n();
		$("#status").i18n();
		$("#stockMenu").i18n();
		$("#historyMenu").i18n();
		$("#user").i18n();
		$("#newUserMenu").i18n();
		$("#editUserMenu").i18n();
		$("#contact").i18n();
		$("#receipt").i18n();
		$("#reportMenu").i18n();
		$("#edit-user").i18n();
		
		
	});
	})
					
$("#btnGER").click(function(){
var options ={ 
	lng: "ger" ,
	resGetPath: 'locales/ger/translationGER.json'
	}
	i18n.init(options, function(t) {
		
		//allPages
		$("#logOutBtn").i18n();
		$("#changeThemeTitle").i18n();
		$("#standardThemeBtn").i18n();
		$("#alternateThemeBtn").i18n();
		
		//home page
		$("#homeB").i18n();
		$("#btn-name").i18n();
		
		//Order page
		$("#title").i18n();
		$("#btnSearch").i18n();
		$("#btnSignIn").i18n();
		$("#btnOrder").i18n();
		$("#btnLogin").i18n();
		$("#btnCancel").i18n();
		$("#login").i18n();
		$("#username").i18n();
		$("#password").i18n();
		$("#item-name").i18n();
		$("#unit-price").i18n();
		$("#quantity").i18n();
		$("#order-price").i18n();
		$("#btnDeleteAll").i18n();
		
		//History-page
		$("#btnBack").i18n();
		$("#btnCheckP").i18n();
		$("#timestamp").i18n();
		$("#transaktion-id").i18n();
		$("#namn1").i18n();
		$("#namn2").i18n();
		$("#user-id").i18n();
		$("#beer-id").i18n();
		$("#h-price").i18n();
		
		//Account-page
		$("#btnCreateAccount").i18n();
		$("#btnDeleteAccount").i18n();
		$("#btnEditAccount").i18n();
		$("#balance").i18n();
		$("#btnBackOrders").i18n();
		$("#btnDelete").i18n();
	
	
		//Editaccount-page
		$("#usernameLabel").i18n();
		$("#newpasswordLabel").i18n();
		$("#passwordLabel").i18n();
		$("#emailLabel").i18n();
		$("#phoneLabel").i18n();
		$("#name1Label").i18n();
		$("#name2Label").i18n();
		$("#undo").i18n();
		$("#redo").i18n();
		
		//Manager-page
		$("#btnStock").i18n();
		$("#btnSales").i18n();
		$("#btnAccounts").i18n();
		$("#btnBackLogin").i18n();
		
		//Stock-page
		$("#btnBackManager").i18n();
		$("#title2").i18n();
		$("#title3").i18n();
		$("#clearValuesBtn").i18n();
		$("#clearBtn").i18n();
		$("#orderBtn").i18n();
		$("#placeOrderBtn").i18n();
		
		//Login-page
		$("#btnLoginCustomer").i18n();
		$("#btnLoginBartender").i18n();
		$("#btnLoginManager").i18n();
		$("#passwordLogin").i18n();
		$("#usernameLogin").i18n();
		
		//Navigation
		$("#loginMenu").i18n();
		$("#products").i18n();
		$("#order").i18n();
		$("#status").i18n();
		$("#stockMenu").i18n();
		$("#historyMenu").i18n();
		$("#user").i18n();
		$("#newUserMenu").i18n();
		$("#editUserMenu").i18n();
		$("#contact").i18n();
		$("#receipt").i18n();
		$("#reportMenu").i18n();
		$("#edit-user").i18n();
		
		
	});
	})
	
})