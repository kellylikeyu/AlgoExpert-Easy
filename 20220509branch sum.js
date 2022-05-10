// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function branchSums(root) {
	 let sumArray = [];
	// return 
	branchSumsHelper(root, 0, sumArray);
	 return sumArray;
}
function branchSumsHelper(root,sumBranch,array) {
  // Write your code here.
	if(!root) {return array}
	
	sumBranch += root.value;
	if (root.left === null && root.right === null) {
	 	array.push(sumBranch);
		return array;
	}
		 // else if (root.left !== null) {
			branchSumsHelper(root.left,sumBranch,array);
		 // } else  {
			branchSumsHelper(root.right,sumBranch,array);
		 // }
	}
		


// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
