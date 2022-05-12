function getNthFib(n) {
  // Write your code here.
	let num;
	if(n===1) {num = 0;}
	if(n===2) {num = 1;}
	if (n>=3) {
		num = getNthFib(n-1) + getNthFib(n-2);
	} return num;
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
