/**
 * Created by suparngupta on 2/23/14.
 * Generic Interface for a list.
 */

'use strict';

function LinkedList(options){
    if(!options || !options.type){
        throw new TypeError("List type must be defined");
    }

    this.init(options);
}

var prototype = LinkedList.prototype;

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
        next: null
    };

    if(this.length === 0){
        this.head = item;
    }
    else{
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
        this.length--;
    }
};

prototype.size = function(){
    return this.length;
};

prototype.toString = function(){
    var current = this.head;
    var output = [];
    do{
        output.push(current.value.toString());
        current = current.next;
    }while(current);

    return output;
};


module.exports = LinkedList;
