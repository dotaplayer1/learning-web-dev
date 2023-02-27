function Node(value = null, next = null) {
    this.value = value;
    this.next = next;
}

function linkedList(head = null) {
    this.head = head;
    
    this.append = function(value) {
        if (this.head === null) {
            this.head = new Node(value);
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new Node(value);
    }

    this.prepend = function(value) {
        let newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;
    }

    this.size = function() {
        if (this.head === null) {
            return 0;
        }
        let current = this.head;
        let count = 1;
        while (current.next !== null) {
            count += 1;
            current = current.next;
        }
        return count;
    }

    this.getHead = function() {
        return this.head.value;
    }

    this.getTail = function() {
        if (this.head === null) {
            return this.head;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current.value;
    }

    this.at = function(value) {
       if (this.head === null) {
            return 0;
        }
        let current = this.head;
        let count = 0;
        while (count !== value && current !== null) {
            count += 1;
            current = current.next;
        }
        if (count <= value && current !== null) {
            return current.value; 
        } else {
            return "Out of bounds";
        }
    }

    this.pop = function() {
        if (this.head === null ) {
            return;
        }
        if (this.head.next === null) {
            this.head = null;
            return;
        }
        let listSize = this.size();
        let count = 1;
        let current = this.head;
        while (count !== listSize - 1) {
            count += 1;
            current = current.next;
        }
        current.next = null;
    }

    this.contains = function(value) {
        if (this.head === null) {
            return false;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        if (current.value === value) {
            return true;
        } else {
            return false;
        }
    }

    this.find = function(value) {
        if (this.head === null) {
            return null;
        }
        let indexOfValue = 0;
        let current = this.head;
        while (current.next !== null) {
            if (current.value === value) {
                return indexOfValue;
            }
            indexOfValue++;
            current = current.next;
        }
        if (current.value === value) {
                return indexOfValue;
        }
        return null;
    }
    
    this.toString = function() {
        if (this.head === null) {
            return "null";
        }
        let current = this.head;
        let listStr = "";
        while (current.next != null) {
           listStr = listStr + current.value + " -> "; 
           current = current.next;
        }
        listStr = listStr + current.value + " -> null";
        return listStr;
    }
}

let linkedList1 = new linkedList();
linkedList1.append(1);
linkedList1.append(2);
linkedList1.append(3);
linkedList1.prepend(4);
console.log(linkedList1);
console.log("Linked list size: " + linkedList1.size());
console.log("Linked list head value: " + linkedList1.getHead());
console.log("Linked list tail value: " + linkedList1.getTail());
console.log(linkedList1.at(1));
console.log(linkedList1.at(3));
console.log(linkedList1.at(4));
// linkedList1.pop();
// linkedList1.pop();
// linkedList1.pop();
// linkedList1.pop();
// console.log(linkedList1);
console.log(linkedList1.contains(4)); // true
console.log(linkedList1.contains(5)); // false
console.log(linkedList1.contains(3)); // true
console.log(linkedList1.find(4));
console.log(linkedList1.find(1));
console.log(linkedList1.find(2));
console.log(linkedList1.find(3));
console.log(linkedList1.find(5));
console.log(linkedList1.toString());