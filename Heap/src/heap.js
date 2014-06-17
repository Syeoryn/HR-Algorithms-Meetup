var Heap = function(comparator) {
    this._data = [];
};

// Helper methods.
Heap.prototype._leftChildOf = function(index) {
    return 2*index + 1;
};
Heap.prototype._rightChildOf = function(index) {
    return 2*index + 2;
};
Heap.prototype._parentOf = function(index) {
    return index ? Math.floor((index - 1)/2) : undefined;
};
Heap.prototype._hasElementAt = function(index) {
    return typeof this._data[index] !== "undefined";
};
Heap.prototype._swap = function(index1, index2) {
    var temp = this._data[index1];
    this._data[index1] = this._data[index2];
    this._data[index2] = temp;
};
Heap.prototype.show = function(noLog) {
    if (!noLog) {
        console.log(this._data);
    }
    return this._data;
};

// For you to complete:
Heap.prototype.peek = function() {
    return this._data[0];
};

Heap.prototype.insert = function(element) {
  var i = this._data.length;
  this._data.push(element);
  var parentIndex = this._parentOf(i)
  console.log(element)
  while( element < this._data[parentIndex] ){
    this._swap(i, parentIndex);
    i = parentIndex;
    parentIndex = this._parentOf(i);
  }
};

Heap.prototype.extract = function() {
  var last = this._data[0];
  this._data[0] = this._data.pop();
  var left = this._leftChildOf(0);
  var right = this._rightChildOf(0);
  var low = this._data[right] < this._data[left] ? right : left;
  var index = 0;
  while( this._data[index] > this._data[low] ){
    this._swap(index,low);
    index = low;
    left = this._leftChildOf(index);
    right = this._rightChildOf(index);
    low = this._data[left] < this._data[right] ? left : right;
  }

  return last;
};

