var easyTpl = require('../lib/simpleTpl');

var str = 'My name is {{name}},I am {{age}} years old.My friend is {{friend.name}},She like {{friend.hobby.color}} and {{friend.hobby.food}}';
var data={
	name:'hh',
	age:18,
	friend:{
		name:'John',
		hobby:{
			color:'red',
			food:'fish'
		}
	}
}
console.log(simpleTpl(str,data));
document.write(simpleTpl(str,data));