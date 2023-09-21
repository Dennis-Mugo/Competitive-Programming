var MyQueue = function() {
    this.myStack = [];
    this.helperStack = [];
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.myStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while (this.myStack.length != 0) {
        this.helperStack.push(this.myStack.pop());
    }
    let res = this.helperStack.pop();
    while (this.helperStack.length != 0) {
        this.myStack.push(this.helperStack.pop());
    }
    return res;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    while (this.myStack.length > 0) {
        this.helperStack.push(this.myStack.pop());
    }
    let n = this.helperStack.length;
    let res = this.helperStack[n-1];
    while (this.helperStack.length > 0) {
        this.myStack.push(this.helperStack.pop());
    }
    return res;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.myStack.length == 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
