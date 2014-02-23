structures
==========

A node based basic data structures library with type safety. Following data structures are currently supported.

1. [Array List](#arraylist "Array List")
2. [Linked List](#linkedlist "Linked List")
3. [Doubly Linked List](#doublylist "Doubly Linked List")

## How to use

For example to create a LinkedList, use the following snippet:

<pre><code>

var structures = require("all-structures");
var list = new structures.LinkedList({type: String, maxSize: 4});

</code></pre>

<a name="arraylist"></a>
## ArrayList
An array list is a simple list data structure with an array implementation underneath.
While creating an array list, following options are supported:

<pre>
<code>
{
    maxSize: 10, //the maximum size of the list, defaults to machine specific maximum
    type: String //type of the objects to be added to the list. Required option!
}
</code>
</pre>

#### Supported Functions
1. add()

    list.add("Hello")

2. remove()

    list.remove(0);

3. size()

    list.size();

4. toString()

    list.toString();

5. get()

    list.get(0);

<a name="linkedlist"></a>

## LinkedList

A Linked list is a Singly LinkedList implementation
While creating a linked list, following options are supported:

<pre>
<code>
{
    maxSize: 10, //the maximum size of the list, defaults to machine specific maximum
    type: String //type of the objects to be added to the list. Required option!
}
</code>
</pre>

#### Supported Functions
1. add()

    list.add("Hello")

2. remove()

    list.remove(0);

3. size()

    list.size();

4. toString()

    list.toString();

5. get()

    list.get(0);

6. next() - gets the next node. Returns undefined if reached to end.

    list.next();

<a name="doublylist"></a>

## DoublyLinkedList

A doubly linked list can be traversed in both directions.
While creating a doubly linked list, following options are supported:

<pre>
<code>
{
    maxSize: 10, //the maximum size of the list, defaults to machine specific maximum
    type: String //type of the objects to be added to the list. Required option!
}
</code>
</pre>

#### Supported Functions
1. add()

    list.add("Hello")

2. remove()

    list.remove(0);

3. size()

    list.size();

4. toString()

    list.toString();

5. get()

    list.get(0);

6. next() - gets the next node. Returns undefined if reached to end.

    list.next();

7. prev() - gets the previous node. Returns undefined if reached to start.

    list.prev();

## Running Tests

Install dependencies

<pre>
<code>
$ npm install
</code>
</pre>

Run the mocha test cases

<pre>
<code>
$ mocha
</code>
</pre>
