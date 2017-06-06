var BinarySearchTree = function(starter){
    this.mag = 1
    this.value = starter
    this.left = null
    this.right = null
}

BinarySearchTree.prototype.insert = function(num){
    this.mag ++
    var newNode = new BinarySearchTree(num)
    if (num <= this.value){
        if (this.left === null){
            this.left = newNode
        } else {
            this.left.insert(num)
        }
    }
    if (num > this.value){
        if (this.right === null){
            this.right = newNode
        } else {
            this.right.insert(num)
        }
    }
}

BinarySearchTree.prototype.contains = function(num){
    if (num === this.value){
        return true
    }
    if (num < this.value && this.left !== null){
        return this.left.contains(num)
    }
    if (num > this.value && this.right !== null){
        return this.right.contains(num)
    }
    return false
}

BinarySearchTree.prototype.depthFirstForEach = function(func, type){
    var finalArr = []
    if (type === "in-order" || arguments[1] === undefined){
       if (this.left !== null){
            this.left.depthFirstForEach(func, type);
            
        }
        func(this.value);
        if (this.right !== null) {
            this.right.depthFirstForEach(func, type);
        }
    }

    if (type === "pre-order"){
       func(this.value);
       if (this.left !== null){
            this.left.depthFirstForEach(func, type);
            
        }
        if (this.right !== null) {
            this.right.depthFirstForEach(func, type);
        }
    }

    if (type === "post-order"){
       if (this.left !== null){
            this.left.depthFirstForEach(func, type);
            
        }
        if (this.right !== null) {
            this.right.depthFirstForEach(func, type);
        }
        func(this.value);
        
    }
}

BinarySearchTree.prototype.breadthFirstForEach = function(func){
    var current = this
    var queue = [];
    var i = this.mag;
    queue.push(current);
    while(i > 0) {
        if(current.left !== null) {
            queue.push(current.left)
        }
        if (current.right !== null) {
            queue.push(current.right)
        }
        func(queue[0].value);
        queue.shift();
        current = queue[0];
        i--;
    }
}

BinarySearchTree.prototype.size = function(){
    return this.mag
}

