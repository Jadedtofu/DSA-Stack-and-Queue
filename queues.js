// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }

    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }

   peek() {
       if (!this.first) {
           console.log(`Queue is empty!`);
       }
       console.log(`Queue has: ${this.first.value}`);
   }
}

const starTrekQ = new Queue();

starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

starTrekQ.dequeue();  // will remove Kirk, not Spock ... 


function isEmpty(queue) {
    if (!queue.first) {
        return 'Queue is empty'
    } eles {
        return 'Queue is not empty'
    }
}
console.log(isEmpty(starTrekQ))

function display(queue) {
    let current = queue.first;
    while (current) {  // while current is not null? 
        console.log(curren.value);
        current = current.next;
    }
}

display(starTrekQ);


