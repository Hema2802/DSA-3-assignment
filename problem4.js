

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function hasCycle(head) {
    if (!head)
        {
            return false;
        }
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;        
        fast = fast.next.next;   
        if (slow === fast) {
            return true;  
        }
    }

    return false; 
}


function createLinkedList(arr, pos) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = null;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
        if (i === pos) {
            cycleNode = current;  
        }
    }

    if (cycleNode) {
        current.next = cycleNode;  
    }

    return head;
}


let head = createLinkedList([3, 2, 0, -4], 1);
console.log(hasCycle(head)); 
