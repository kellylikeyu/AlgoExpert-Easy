function nodeDepths(root) {
  // Write your code here.
	let queue = [root]
	let level = 0;
	let sum = 0

	while (queue.length > 0) {	

		let currentLength = queue.length;
		sum += queue.length * level;
		
		for (let i = 0; i < currentLength; i++) {
			let currentPosition = queue.shift();
			if (currentPosition.left) {queue.push(currentPosition.left);}
			if (currentPosition.right) {queue.push(currentPosition.right);}
		}
	level++
	}
	return sum
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
