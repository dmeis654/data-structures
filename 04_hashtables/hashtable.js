var HashTable = function (){
    this.table = []
    this.numBuckets = 35;   
}

HashTable.prototype.set = function(key, val) {
    var tempObj = {};
    tempObj[key] = val;
    if (typeof(key) !== 'string') {
        throw TypeError('Keys must be strings');
    }
    if (this.table[this.hash(key)] === undefined) {
        this.table[this.hash(key)] = [];
        this.table[this.hash(key)].push(tempObj);
    }
    else {
        var overwritten = false;
        for (var i = 0; i<this.table[this.hash(key)].length; i++) {
            if (this.table[this.hash(key)][i][key] !== undefined) {
                this.table[this.hash(key)][i][key] = val;
                overwritten = true;
            }
        }
        if (!overwritten) {
            this.table[this.hash(key)].push(tempObj);
        }
    }
}

HashTable.prototype.get = function(key) { 
    if (this.table[this.hash(key)] !== undefined) {
        for (var i = 0; i<this.table[this.hash(key)].length; i++) {
            if (this.table[this.hash(key)][i][key] !== undefined) {
                return this.table[this.hash(key)][i][key];
            }
        }
    }
}

HashTable.prototype.hasKey = function(key) {
    if (this.get(key) !== undefined){
        return true
    } else {
        return false
    }
}

HashTable.prototype.hash = function(val){
  var sum = 0;
  for (var i = 0; i < val.length; i++){
    sum += val[i].charCodeAt(0);
  }
  sum = sum % this.numBuckets;
  return sum
}


