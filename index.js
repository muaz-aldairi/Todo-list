// To do list 

// 1. create A class to include construbtor to difind node 
// 2. create class for linked list 
// 3. include push method 
// 4. include pop method 
// 5. include get method 
// 6. include set method 
// 7. define a list 

class linkedList {
    constructor(){ 
        this.head= this.tail= null
    } 
    append(value) {
        if (!this.tail){
            this.head=this.tail=new Node(value)
        }
    
    else { 
        let oldTail=this.tail
        this.tail=new Node(value)
        oldTail.next=this.tail
        this.tail.prev=oldTail
    }
}

prepend(value) {
    if (!this.head){ 
        this.head=this.tail=new Node(value)
    }
    else {
        let oldHead=this.head
        this.head=new Node(value)
        oldHead.prev=this.head
        this.head.next=oldHead
    }


}

deleteHead() {
    if(!this.head) {
      return null
    }

    else {
        let removeHead=this.head
        if(this.head===this.tail){
            this.head=this.tail=null
        }
        else { 
            this.head=this.head.next
            this.head.prev=null
        }
        return removeHead.value
    }

}

deleteTail() {
    if(!this.tail) {
      return null
    }

    else {
        let removeTail=this.tail
        if(this.head===this.tail){
            this.head=this.tail=null
        }
        else { 
            this.tail=this.tail.prev
            this.tail.next=null
        }
        return removeTail.value
    }

}

search (value) {let currentNode=this.head
while (currentNode){ 
if (currentNode.value===value) {
    return currentNode
}
currentNode=currentNode.next
}
return null 
}

}
class Node {
    constructor(value, prev, next) {
        this.value=value
        this.prev=prev || null
        this.next=next || null 
    }
    
}

let list = new linkedList()

list.append(1776)


list.append("lincoln")

list.prepend("one")

console.log(list)

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