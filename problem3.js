

//palindrome linked list

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
let head=new Node(1);
let first=new Node(2);
let second=new Node(2);
let third=new Node(1);

head.next=first;
first.next=second;
second.next=third;
third.next=null;

function palindromeList(head){


if (!head || !head.next) { 
    return true;
}

let slow = head; 
let fast = head;
while (fast && fast.next) {  
    slow = slow.next;  
    fast = fast.next.next; 
}
let previous = null; 
let current = slow;
while (current) {
    let nextNode = current.next;
    current.next = previous;
    previous = current;
    current = nextNode;
}


let firstHalf = head;
let secondHalf = previous;
    while (secondHalf) {
        if (firstHalf.data !== secondHalf.data) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
return true; 
}

const result=palindromeList(head);
console.log(result);