//class: Data structure for creating single liked-list
const Node = class {
    constructor(data=null, next=null) {
        this.data = data
        this.next = next
    }
}

//function: print linked list
const printList = (msg, head) => {
    console.log(msg,' ')
    ptr = head
    while(ptr != null) {
        process.stdout.write(ptr.data + ' -> ')
        ptr = ptr.next
    }
    console.log('null')
}

//function : merge two sorted linked list
const sortedMerge = (a, b) => {

    let newList = tail = new Node()
    if(a == null) {
        return b
    } else if (b == null) {
        return a
    } else {
        if(a.data <= b.data) {
            tail = a
            a = a.next
        } else {
            tail = b
            b = b.next
        }
    }

    newList = tail
    while(a != null && b != null) {
        if(a.data <= b.data) {
            tail.next = a
            tail = a
            a = a.next
        } else {
            tail.next = b
            tail = b
            b = b.next
        }
    }

    if(a == null) tail.next = b
    if(b == null) tail.next = a

    return newList
}

// values to create linked list
const firstList = [2,5,8,9,15]
const secondList = [1,3,6,7,10]

let a = b = null

// create two sorted linked list
firstList.reverse().forEach((value) => {
    a = new Node(value, a)
})
secondList.reverse().forEach((value) => {
    b = new Node(value, b)
})

// print linked list
printList('First Linked List :', a)
printList('Second Linked List :', b)

// merge two sorted linked list
const head = sortedMerge(a, b)

// print merged linked list
printList('Sorted Merged Linked List :', head)