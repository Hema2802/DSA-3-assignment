

// Merge two sorted linked list

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

let head1=new Node(1);
let first1=new Node(2);
let second1=new Node(4);

let head2=new Node(1);
let first2=new Node(3);
let second2=new Node(4);

head1.next=first1;
first1.next=second1;
second1.next=null;

head2.next=first2;
first2.next=second2;
second2.next=null;

function printList(head) {
    let temp = head;
    let result = "";
    while (temp !== null) {
        result += temp.data + " -> ";
        temp = temp.next;
    }
    console.log(result + "null");
}


console.log("List 1:");
printList(head1);

console.log("List 2:");
printList(head2);

// Merge two linked list
function mergeTwoLinkedList(head1,head2){
    let temporary=new Node(0);
    let head=temporary;


    while(head1 && head2){
        if(head1.data<=head2.data){ //if list1 data is equal or less than list2
            temporary.next=head1;
            head1=head1.next; // move forward
        }else{
            temporary.next=head2; 
            head2=head2.next; // move forward
        }
        temporary=temporary.next; 
    }

    if(head1 != null){ // if list1 is not equal to null
        temporary.next=head1; 
    }else{
        temporary.next=head2;
    }

    return head.next;
}

let mergedHead = mergeTwoLinkedList(head1, head2);
console.log("Merged List:");
printList(mergedHead);