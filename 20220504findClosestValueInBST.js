let closest = Infinity;
function findClosestValueInBst(tree, target) {
  // Write your code here.
	
	if (Math.abs(tree.value - target) < Math.abs(closest - target)) {
		closest = tree.value;
	}
	if (tree.right && tree.value < target) {
		findClosestValueInBst(tree.right, target);
	} else if (tree.left && tree.value > target) {
		findClosestValueInBst(tree.left, target);
	}return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
