// To do list 

// 1. create A class to include construbtor to difind node 
// 2. create class for linked list 
// 3. include push method 
// 4. include pop method 
// 5. include get method 
// 6. include set method 
// 7. define a list 

class linkedList { // declaring Linked List class
    constructor(){ 
        this.head= this.tail= null // track is head or tail equals null
    } 
    // add to the end of list / tail
    append(value) {
        // if the list is empty 
        if (!this.tail){
            this.head=this.tail=new Node(value) // adds new value to the list if empty
        }
    
    else { 
        let oldTail=this.tail // capture current tail node
        this.tail=new Node(value) // set new value to tail
        oldTail.next=this.tail // old tail points to new tail
        this.tail.prev=oldTail // new tail points to old tail
    }
}
// add to beginning of list / head
prepend(value) {
    // if the list is empty 
    if (!this.head){ 
        this.head=this.tail=new Node(value) // adds new value to the list if empty
    }
    else {
        let oldHead=this.head // capture current head node
        this.head=new Node(value) // set new value to head
        oldHead.prev=this.head // old head points to new head
        this.head.next=oldHead // new head points to old head
    }


}
// removes the head of the list
deleteHead() {  // if the list is empty 
    if(!this.head) {
      return null // if no head - list is empty, return null
    }

    else {
        let removeHead=this.head // remove value of head from list
        // if just 1 node left in list
        if(this.head===this.tail) {  // if head is also tail, 1 node
            this.head=this.tail=null  // set to null
        }
        else { 
            this.head=this.head.next // clean up reference to next - sets the head to the previous head
            this.head.prev=null // removes previous pointer
        }
        return removeHead.value // removes the value of head
    }

}
// removes the tail of the list 
deleteTail() { // if the list is empty 
    if(!this.tail) {
      return null // if no tail - list is empty, return null
    }

    else {
        let removeTail=this.tail // remove value of tail from list
        // if just 1 node left in list
        if(this.head===this.tail){ // if head is also tail, 1 node
            this.head=this.tail=null // set to null
        }
        else { 
            this.tail=this.tail.prev // clean up reference to previous - sets the tail to the previous tail
            this.tail.next=null // removes previous pointer 
        }
        return removeTail.value // removes the value of tail
    }

}

search (value) {// searched the list
let currentNode=this.head // start at head then traverse through list 
while (currentNode){  // while have current node
if (currentNode.value===value) { // current node value is equal to value passed in
    return currentNode // return the value of current node
}
currentNode=currentNode.next // if not equal move on to the next node
}
return null  //  if traverse entire linked list and don't find value return null
}

}
class Node { // declaring Node class
    constructor(value, prev, next) { // node constructor takes 3 parameters
        this.value=value // initialise value
        this.prev=prev || null // previous node or null
        this.next=next || null // next node or null
    }
    
}

let list = new linkedList()

list.append(1) // adding elements to tail of LinkedList
list.append(2)
list.append(3)
list.append(4)
 
list.prepend(0) // adding elements to the head of LinkedList
list.prepend(-1)
 
console.log(list);
 
console.log(list.search(1));
console.log(list.search(3));
console.log(list.search(999));
 
console.log(list.deleteHead());
console.log(list.deleteTail());
 
console.log(list);
 
console.log(list.deleteHead());
console.log(list.deleteTail());
 
console.log(list);
 
console.log(list.deleteHead());
console.log(list.deleteTail());
 
console.log(list);
 
console.log(list.deleteHead());