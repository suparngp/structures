/**
 * Created by suparngupta on 2/23/14.
 * Doubly Linked List
 */

'use strict';

function DoublyLinkedList(options){
    if(!options || !options.type){
        throw new TypeError("List type must be defined");
    }

    this.init(options);
}

var prototype = DoublyLinkedList.prototype;

prototype.init = function(options){
    this.type = options.type;
    this.length = 0;
    this.currentPos = -1;
    this.maxSize = !options.maxSize ? null: options.maxSize;
    this.head = null;
    this.current = null;
    this.tail = null;
};

prototype.add = function(obj){
    if(obj.constructor != this.type){
        throw new TypeError("Object type mismatch, expected " + this.type );
    }

    if(this.maxSize && this.length === this.maxSize){
        throw new RangeError("List size exceeded");
    }

    var item = {
        value: obj,
        next: null,
        prev: null
    };

    if(this.length === 0){
        this.head = item;
    }
    else{
        item.prev = this.current;
        this.current.next = item;
    }
    this.current = item;
    this.tail = this.current;
    this.length++;
    this.currentPos++;
};

prototype.remove = function(index){
    if(typeof index === undefined || index === null){
        throw new TypeError("Must specify an index");
    }
    if(index >= this.length || index < 0){
        throw new RangeError("Index out of range");
    }

    //if this is a head
    if(index === 0){
        if(this.length === 1){
            this.head = undefined;
            this.tail = undefined;
            this.current = undefined;
            this.currentPos = -1;
            this.length = 0;
        }

        else{
            this.head = this.head.next;
            this.head.prev = null;
            this.current = this.head;
            this.currentPos = 0;
            this.length--;
        }
    }

    else{
        this.currentPos = 0;
        this.current = this.head;
        while(this.currentPos < index - 1){
            this.current = this.current.next;
            this.currentPos++;
        }
        this.current.next = this.current.next.next;
        if(this.current.next)
            this.current.next.prev = this.current;
        this.length--;
    }
};

prototype.get = function(index){
    if(index < 0 || index > this.length){
        throw new RangeError("Index out of bound");
    }

    if(index === 0){
        this.current = this.head;
        this.currentPos = 0;
        return this.head.value;
    }

    else if(index === this.length - 1){
        this.current = this.tail;
        this.currentPos = index;
        return this.tail.value;
    }

    else if(index === this.currentPos){
        return this.current.value;
    }

    else {
        this.current = this.head;
        this.currentPos = 0;
        while(this.currentPos < index){
            this.current = this.current.next;
            this.currentPos++;
        }
        return this.current.value;
    }
};

prototype.next = function(){
    if(this.current.next){
        var value = this.current.next.value;
        this.current = this.current.next;
        this.currentPos++;
        return value;
    }
    else
        return undefined;
};

prototype.prev = function(){
    if(this.current.prev){
        var value = this.current.prev.value;
        this.current = this.current.prev;
        this.currentPos++;
        return value;
    }
    else
        return undefined;
};


prototype.size = function(){
    return this.length;
};

prototype.toString = function(){
    console.log("Called");
    var current = this.head;
    var output = [];
    do{
        output.push(current.value.toString());
        current = current.next;
    }while(current);

    return output;
};


module.exports = DoublyLinkedList;
