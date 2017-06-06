var Node = function(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
};

var LinkedList = function() {

};

LinkedList.prototype.empty = function() {
    return (typeof(this.head) === 'undefined' && typeof(this.tail) === 'undefined');
};

LinkedList.prototype.addToTail = function(value) {
    if (!value){
         return undefined;
    }
    var n = new Node(value);
    if (this.empty()) {
        this.head = n;
    } else {
        n.previous = this.tail;
        this.tail.next = n;
    }
    this.tail = n;
};

LinkedList.prototype.addToHead = function(value) {
    var n = new Node(value);
    if (this.empty()) {
        this.tail = n;
    } else {
        n.next = this.head;
        this.head.previous = n;
    }
    this.head = n;
};

LinkedList.prototype.removeHead = function() {
    if (this.empty()) {
        return;
    }
    var n = this.head.value;
    if (this.head === this.tail) {
        delete this.head;
        delete this.tail;
        return n;
    }
    this.head = this.head.next;
    this.head.previous = null;
    return n
};

LinkedList.prototype.removeTail = function() {
    if (this.empty()) {
        return;
    }
    var n = this.tail.value;
    if (this.tail === this.head) {
        delete this.head;
        delete this.tail;
        return n;
    }
    this.tail = this.tail.previous;
    this.tail.next = null;
    return n
};

LinkedList.prototype.search = function(value) {
    var n = this.tail
    if (typeof value === "string"){
        while(n) {
            if(n.value === value) {
                return n.value
            }
            n = n.previous;
        }
        return null
    }
     if (typeof value === "function") {
        
        while(n) {
            if(n.value === value) {
                return n.value
            }
            n = n.previous;
        }
        return null
    }
}
    
    // if (typeof value === 'string') {
    //     while(n.previous !== null){
    //         if (n.previous.value === value){
    //             return value
    //         }
    //         n = this.tail.previous
    //     }
            
    // }

  
  
   


    // if (this.empty()){
    //      return null;
    // }
    // if (typeof value === "string"){
    //     //if (this.head.value === value || this.tail.value === value){
    //     if (this.heada === this.tail && this.head === value){
    //         return value
    //     }
    //     if (this.head.next === value){

    //     }
    // }
    // // //if (this.head === this.tail && this.head === value){
    
