function Node(data, next) {
    this.data = data;
    this.next = next;
}

function LinkedList(headData) {
    var head = new Node(headData, null);
    this.head = head;
    this.tail = head;
}

LinkedList.prototype = (function () {
    'use strict';

    var reverseInternal = function (previous, current) {

            var originalNextNode = current.next;
            if (originalNextNode == null) {
                current.next = previous;
                return;
            }

            current.next = previous;
            return reverseInternal(current, originalNextNode);
        },
        reverse = function () {
            reverseInternal(null, this.head);
            var currentHead = this.head;
            this.head = this.tail;
            this.tail = currentHead;
        },
        append = function (data) {
            var newNode = new Node(data, null);
            this.tail.next = newNode;
            this.tail = newNode;
        },
        toArray = function () {
            var node = this.head;
            var result = [];
            while (node) {
                result.push(node.data);
                node = node.next;
            }
            return result;
        };

    return {
        reverse: reverse,
        append: append,
        toArray: toArray
    }
}());


describe('Singly Linked List', function () {
    describe('append', function () {

        it('will append a new node to the tail of the list', function () {
            var list = new LinkedList(1);
            list.append(2);
            expect(list.tail.data).toBe(2);
        });

    });

    describe('reverse', function () {

        it('will return the same list when only one node is present', function () {
            var list = new LinkedList(1);
            var head = list.head;

            list.reverse();

            expect(list.head).toBe(head);
        });

        it('will reverse a list of two items', function () {
            var list = new LinkedList(1);
            list.append(2);

            list.reverse();
            var result = list.toArray();

            expect(result).toEqual([2, 1]);
        });

        it('will reverse a list of three items', function () {
            var list = new LinkedList(1);
            list.append(2);
            list.append(3);

            list.reverse();

            var results = list.toArray();
            expect(results).toEqual([3, 2, 1])

        });
    });

});