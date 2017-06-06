var Queue = function(){
  this.finalArr = [];
  this.length = 0;
}

Queue.prototype.enqueue = function(newValue){
      this.finalArr[this.length] = newValue;
      this.length++;
      return this.finalArr;
  }
Queue.prototype.dequeue = function(){
    if (this.length === 0){
        return undefined
    }
    var newArr = [];
    for(var x = 1; x<this.length; x++){
        newArr[x-1] = this.finalArr[x];
    }
    var removedValue = this.finalArr[0];
    this.finalArr = newArr;
    this.length--
   return removedValue;
}

Queue.prototype.size = function(newValue){
    return this.length;
  }