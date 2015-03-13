function StackQueue(){
    this.stack1 = new Array();
    this.stack2 = new Array();
}

StackQueue.prototype = (function() {
    var _moveStacks = function(source, destination) {
            var item = source.pop();
            while(item){
                destination.push(item)
                item = source.pop();
            }
        },
        enqueue = function(item){
            // add to stack 1
            this.stack1.push(item);
        },
        dequeue = function() {
            // move all of stack 1 over to stack 2
            _moveStacks(this.stack1, this.stack2);
            // pop from stack 2
            var item = this.stack2.pop();
            // move all back from stack 2 to stack 1
            _moveStacks(this.stack2, this.stack1);
            return item;
        };

    return {
        enqueue: enqueue,
        dequeue : dequeue
    }
})();

describe('StackQueue Testing',function(){

    it('should handle one item properly', function(){

        var queue = new StackQueue();
        queue.enqueue(1);

        var item = queue.dequeue();
        expect(item).toEqual(1);
    });

    it('should handle two items properly', function(){
        var queue = new StackQueue();
        queue.enqueue(1);
        queue.enqueue(2);

        queue.dequeue();
        var item = queue.dequeue();
        expect(item).toEqual(2);

    });

    it('should handle enq, enq, deq, enq, deq', function() {
        var queue = new StackQueue();
        queue.enqueue(1);
        queue.enqueue(2);

        queue.dequeue();

        queue.enqueue(3);

        var item = queue.dequeue();
        expect(item).toEqual(2)
    });

});

