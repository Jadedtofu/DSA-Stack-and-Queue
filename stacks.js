// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek() {
        // if nothing is in the stack:
        if(!this.top) {
            console.log('Stack is empty!');
        } // return the value otherwise
        console.log(this.top.value);
    }
}

// let starTrek = new Stack();
// starTrek.push('Kirk');
// starTrek.push('Spock');
// starTrek.push('McCoy');
// starTrek.push('Scotty');

// starTrek.pop('McCoy');

 
// function is_palindrome(s) { // a word, phrase or number that's the same backwards & forwards
//     s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//     // Your code goes here
//     let newStack = new Stack();
//     s.split('').foEach((char) => {
//         newStack.push(char); // add each character to the stack after splitting
//     });
//     let reverseString = ''; // start with empty string
//     let count = 0;
//     while (count < s.length) {
//         count++;
//         reverseString += newStack.pop(); // pop out each character
//     }
//     return s = reverseString;
// }

// // True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

// match parenthesis and sort stack ... ? ?? 