let num=13;
function checkprime(num){
let factors=0;
	for(let i=1; i<=num; i++){
		if(num%i==0){
		c++;
		}
 	}
return factors;
}
if(checkprime(num)==2){
console.log("Prime");
}
else{
console.log("Not a Prime");
}