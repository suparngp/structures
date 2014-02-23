/**
 * Created by suparngupta on 2/23/14.
 * Generic Interface for a list.
 */

'use strict';

function ArrayList(options){
    if(!options || !options.type){
        throw new TypeError("List type must be defined");
    }

    this.init(options);
}

var prototype = ArrayList.prototype;
prototype.init = function(options){
    this.type = options.type;
    this.length = 0;
    this.currentPos = -1;
    this.storage = [];
    this.maxSize = !options.maxSize ? null: options.maxSize;
};

prototype.add = function(obj){
    if(obj.constructor != this.type){
        throw new TypeError("Object type mismatch, expected " + this.type );
    }

    if(this.maxSize && this.length === this.maxSize){
        throw new RangeError("List size exceeded");
    }
    this.storage.push(obj);
    this.length++;
    this.currentPos++;
};


prototype.remove = function(index){
    if(!index){
        throw new TypeError("Must specify an index");
    }
    if(index >= this.length){
        throw new RangeError("Index out of range");
    }

    this.length--;
    this.currentPos--;
    return this.storage.splice(index, 1);
};

prototype.size = function(){
    return this.length;
};

prototype.toString = function(){
    return this.storage.toString();
};

module.exports = ArrayList;
