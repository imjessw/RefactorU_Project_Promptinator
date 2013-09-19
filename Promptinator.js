var name=[];
var street=[];
var phone=[];
var usernum=prompt("How many disater victim's do you wish to enter?");
console.log(name);
 usernum=parseInt(usernum);
var viccalc=function(num){
	for (var i = 0; i < num; i++) {
		console.log(name);
   		name.push(prompt("What is your name?"));
		street.push(prompt("what is the street?"));
		phone.push(prompt("Phone number?"));
    }
}
	viccalc(1);