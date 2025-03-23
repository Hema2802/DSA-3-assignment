

// remove nth node from end of list

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

let head=new Node(1);
let first=new Node(2);
let second=new Node(3);
let third=new Node(4);
let fourth=new Node(5);

head.next=first;
first.next=second;
second.next=third;
third.next=fourth;
fourth.next=null;

 function removeNode(head, n) {
    if(head==null || head.next== null ){
        return null;
    }
    let first=new Node(-1);
    first.next=head;
    let second=first;

    for(let i=0;i<n;i++){
        if(!second.next){
            return head;
        }
        second=second.next;
    }
    while(second.next){
        first=first.next;
        second=second.next;
    }
    if(first.next==head){
        head=head.next;
        return head;
    }
    first.next=first.next.next;
    return head;
    
}

const list=removeNode(head,2);

function printList(list){
    let current=list;
    while(current !=null){
        console.log(current.data);
        current=current.next;
    }
}
printList(list);
