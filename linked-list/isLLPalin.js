// class : data structure to create single linked list
const Node = class {
    constructor(data = null, next = null) {
        this.data = data
        this.next = next
    }
}

//function : check if provided linked list is palindrome
const checkPalin = (head) => {
    if(head == null) return true
    midRight = findmid(head)

    const rrVal = []
    ptr = midRight
    while(ptr != null) {
        rrVal.push(ptr.data)
        ptr = ptr.next
    }
    midRR = createLL(rrVal.reverse())

    return compare(head,midRR)
}

//function : find mid of the linked list
const findmid = (head) => {
    let prev = null
    let slow = fast = head
    while(fast != null && fast.next != null) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    if(fast != null) slow = slow.next
    prev.next = null
    return slow
}

//function : compare two linked list
const compare = (firstLL, secondLL) => {
    if(firstLL == null && secondLL == null) {
        return true
    } else {
        return (firstLL.data === secondLL.data) && compare(firstLL.next, secondLL.next)
    }
}

//function : create single linked list
const createLL = (arrVal) => {
    let a = null
    arrVal.reverse().forEach((val)=>{
        a = new Node(val,a)
    })
    return a
}

//array values to create linked list
const llVal = [2,7,4,4,7,2]

//create single linked list
const sampleLL = createLL(llVal)

//check if provided linked list is palindrome
console.log(checkPalin(sampleLL))