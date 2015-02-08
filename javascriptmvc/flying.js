steal(
	'beer/create',
	'beer/list',
	'./flying.less',
	'./models/fixtures/fixtures.js',
function(BeerCreate, BeerList){
	
	new BeerList('#beers');
	new BeerCreate('#create');
})
