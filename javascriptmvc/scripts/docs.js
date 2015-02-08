//js flying/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs", function(DocumentJS){
	DocumentJS('flying/index.html', {
		out: 'flying/docs',
		markdown : ['flying', 'steal', 'jquerypp', 'can', 'funcunit'],
		parent : 'flying'
	});
});