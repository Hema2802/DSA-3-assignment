
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

let head=new Node(4);
let first=new Node(5);
let second=new Node(1);
let third =new Node(2);

head.next=first;
first.next=second;
second.next=third;
third.next=null;

function deleteNode(node){
    if (node == null || node.next == null) {
        console.log("Cannot delete the last node");
        return;
    }
    node.data=node.next.data;
    node.next=node.next.next;
}

deleteNode(first);

function printList(head){
    let current=head;
    while(current !=null){
        console.log(current.data);
        current=current.next;
    }
}
printList(head);