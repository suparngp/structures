structures
==========

A node based basic data structures library with type safety. Following data structures are currently supported.

1. [Array List](#arraylist "Array List")
2. [Linked List](#linkedlist "Linked List")

<a name="arraylist"></a>
## Array List
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


<a name="linkedlist"></a>

## Linked List

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
