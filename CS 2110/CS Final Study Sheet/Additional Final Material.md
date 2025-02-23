#### More Graphs
##### List of topics
1. [x] Given a diagram of a graph with edge weights and a starting node, state the order in which nodes are settled by Dijkstra’s shortest path algorithm.
2. [x] Given a diagram of a graph with edge weights and a starting node, state the contents of the frontier (that is, the nodes in the frontier, their candidate shortest-path distances, and their back pointers) immediately after a given node would be settled by the algorithm. That is, trace the execution of Dijkstra’s algorithm on a given graph, and write the state of the algorithm at a specified point.
3. [x] Given a table of destination nodes and back pointers produced by BFS or Dijkstra’s algorithm, construct the shortest path from the starting node to a destination.
4. [x] Given a snapshot of the frontier set (including distances and back pointers) during an execution of Dijkstra’s algorithm, state lower and upper bounds for the distances of the final shortest paths to each of the nodes in the set. Examples: Canvas quiz questions.
##### Important notes
1. 
    ![[Screenshot 2024-12-10 at 10.31.44 PM.png|500]]
2. ![[Screenshot 2024-12-10 at 10.32.44 PM.png]]
3. 
   ![[Screenshot 2024-12-10 at 10.35.12 PM.png|500]]
4. Lower bounds are the minimum possible distance that could exist for a given node from the starting node. Upper bounds are the current distance value stored for a node. 
#### Heaps
##### List of topics
1. [x] Given a diagram of a tree, state whether it is a valid min-heap or max-heap. If it is not, explain how it violates a heap’s invariants.
2. [x] Draw a diagram of a complete binary tree given its array representation. Or vice versa.
3. [x] Given the index of a node in a complete binary tree represented as an array, state the array indices of the node’s left and right children and of its parent.
4. [x] Given the contents of a heap (either as a tree diagram or as an array), draw the state of the heap after performing a sequence of “add” and “remove” operations.
5. [x] Given the fields of a heap class and its methods’ specifications, implement the “bubbleUp” and “bubbleDown” operations for a heap represented as an array. The heap may be a min-heap or a max-heap, and priorities may be compared as primitives, as `Comparable`s, or with a `Comparator`.
6. [x] Describe a situation in which the behavior of heapsort would be preferred over merge sort, or vice versa. Example: a situation calling for stability and/or constant space complexity.
7. [x] You are given code that implements an operation (examples: “add”, “remove”, “peek”) of a priority queue. The code uses a particular data structure (examples: heap, binary search tree, sorted linked list). You must determine and state the worst-case efficiency of the operation. Or, you are told what operation to implement and what data structure to use, and you must write the code yourself.
##### Important notes
1. shape invariant: it has to be left-leaning; order invariant: dependent on max and min heap.
4. 
   ![[Screenshot 2024-12-10 at 10.56.23 PM.png]]
   - For min heaps:
	   - `add()`: while the node is less than its parent, swap with the parent. 
	   - `remove()`: while the node is greater than its children, swap with the lesser child.
   - For max heaps: 
	   - `add()`: while the node is greater than its parent, swap with the parent. 
	   - `remove()`: while the node is less than its children, swap with the greater child
1. 
```
import java.util.Comparator;

public class Heap<T> {
    private T[] heapArray;
    private int size;
    private Comparator<? super T> comparator;
    private boolean isMinHeap;

    public Heap(int capacity, Comparator<? super T> comparator, boolean isMinHeap) {
        heapArray = (T[]) new Object[capacity];
        this.comparator = comparator;
        this.isMinHeap = isMinHeap;
        size = 0;
    }

    // Utility methods
    private int parent(int index) {
        return (index - 1) / 2;
    }

    private int leftChild(int index) {
        return 2 * index + 1;
    }

    private int rightChild(int index) {
        return 2 * index + 2;
    }

    // Comparator-based heap property check
    private boolean compare(T a, T b) {
        if (isMinHeap) {
            return comparator.compare(a, b) < 0;
        } else {
            return comparator.compare(a, b) > 0;
        }
    }

    // Add element to the heap
    public void insert(T element) {
        if (size == heapArray.length) {
            throw new IllegalStateException("Heap is full");
        }

        heapArray[size] = element;
        bubbleUp(size);
        size++;
    }

    // Remove the root (min or max) element
    public T remove() {
        if (size == 0) {
            throw new IllegalStateException("Heap is empty");
        }

        T root = heapArray[0];
        heapArray[0] = heapArray[size - 1];
        size--;
        bubbleDown(0);
        return root;
    }

    // Bubble up (heapify up) to maintain heap property
    private void bubbleUp(int index) {
        while (index > 0) {
            int parentIndex = parent(index);
            if (compare(heapArray[index], heapArray[parentIndex])) {
                // Swap if the heap property is violated
                T temp = heapArray[index];
                heapArray[index] = heapArray[parentIndex];
                heapArray[parentIndex] = temp;
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Bubble down (heapify down) to maintain heap property
    private void bubbleDown(int index) {
        int leftIndex = leftChild(index);
        int rightIndex = rightChild(index);
        int largestOrSmallest = index;

        // Find the index of the child with the higher (or lower) priority depending on the heap type
        if (leftIndex < size && compare(heapArray[leftIndex], heapArray[largestOrSmallest])) {
            largestOrSmallest = leftIndex;
        }

        if (rightIndex < size && compare(heapArray[rightIndex], heapArray[largestOrSmallest])) {
            largestOrSmallest = rightIndex;
        }

        // If heap property is violated, swap and continue bubbling down
        if (largestOrSmallest != index) {
            T temp = heapArray[index];
            heapArray[index] = heapArray[largestOrSmallest];
            heapArray[largestOrSmallest] = temp;
            bubbleDown(largestOrSmallest);
        }
    }
}
```
6. Heaps are preferred for their constant space complexity (storing large amounts of data where memory usage is crucial) and when we don't need to worry about their performance. 
	1. Merge sorts are preferred when we want better performance and stability (for working withe external data sets)
7. 
   
| Data Structure       | peek()  | remove()               | add()   |
| -------------------- | ------- | ---------------------- | ------- |
| Unsorted Linked List | O(N)    | O(N)                   | O(1)    |
| Sorted Array         | O(1)    | O(1) (ascending order) | O(N)    |
| Balanced BST         | O(logN) | O(logN)                | O(logN) |
- `add()` would simply be adding an element to the current heap and bubbling up 
- `remove()` would be moving the root to the next element, and then bubbling down. 
- `peek()` would be just returning the root. 
#### Design Patterns
##### List of topics
1. [x] Write a recommendation for whether it would be appropriate to deploy a particular design pattern to address a programming challenge. The pattern might be one of “Iterator” or “Factory method”, or a description of a new pattern may be provided.
2. [x] Write a `while`-loop to perform an operation on every element contained in an `Iterable` collection.
3. [x] Given the implementation of a collection, write the methods of an `Iterator` class to yield the collection’s elements in a specified order. Examples: preorder or level-order traversal of a tree.
##### Important notes
1. The purpose of the Iterator is to sequentially access elements without exposing its internal structure. It is useful for we need collection traversal, multiple iterators, and want abstraction. 
	1. the purpose of a factory method is to define an interface for creating objects (subclasses). It is good for object creation abstraction, hierarchies, and polymorphism. 
2. `while (iterator.hasNext())`
	1. `Iterable` is the interface and `iterator` is the class that implements it and has a `hasNext()` method and a `next()` method. 
3. For preorder iterator (DFS), use a stack and visit the nodes by root, left, and right. For level-order, use a queue (BFS).
		1. both iterators implement the `Iterator` and have `hasNext()` and `next()`

