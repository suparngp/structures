/**
 * Created by suparngupta on 2/23/14.
 */

var list = new (require("./lists/LinkedList"))({type: String, maxSize: 10});

list.add("Hello");
list.add("World");
list.add("World2");
list.add("World3");

list.remove(1);
console.log(list.toString());