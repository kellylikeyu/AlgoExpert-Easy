// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
	if(linkedList.next === null) {
 		return linkedList;
 	}
	 let currentNode = linkedList;
	 // let nextNode = linkedList.next;
	while(currentNode.next){
		if(currentNode.value === currentNode.next.value) {
			// let temp = currentNode.next.next;
			// currentNode.next = temp;
			currentNode.next = currentNode.next.next;
		} else {
			currentNode=currentNode.next;
		}
	}return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
