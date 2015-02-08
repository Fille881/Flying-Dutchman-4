//js flying/scripts/build.js

load("steal/rhino/rhino.js");
steal('steal/build',function(){
	steal.build('flying/scripts/build.html',{to: 'flying'});
});
