function caesarCipherEncryptor(string, key) {
  // Write your code here. array.charCodeAt(index)  String.fromCharCode(num1)
	let encrypt = '';
	for(let i=0; i<string.length; i++) {
		let moduloKey = key%26;
		let code = string.charCodeAt(i) +moduloKey;
		if(code>122) {
			encrypt += String.fromCharCode(code-26);
		} else {
			encrypt += String.fromCharCode(code);
		}
	}
	return encrypt;
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor;
