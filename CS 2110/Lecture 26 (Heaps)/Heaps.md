#### Implementing a priority queue with data structures
##### Worst-case time complexity

| Data Structure       | peek()  | remove()               | add()   |
| -------------------- | ------- | ---------------------- | ------- |
| Unsorted Linked List | O(N)    | O(N)                   | O(1)    |
| Sorted Array         | O(1)    | O(1) (ascending order) | O(N)    |
| Balanced BST         | O(logN) | O(logN)                | O(logN) |

> [!NOTE] Balanced BST are always O(logN)
> The reason is because they are split into halves and each half is searched, producing a complexity of O(logN). **Unbalanced** BSTs would depend on the height 

#### Binary Heaps
##### Heap
- a binary tree (not BST) satisfying two additional properties:
	- every node is more important than its children (Heap-ordered/order invariant)
		- Min-heap: every node is <= its children (smallest on top)
			- shortest distance
			- earliest deadline
		- Max-heap: every node is >= its children (biggest on top)
			- largest reward 
	- completeness (shape invariant)
		- all levels must be filled and bottom level nodes need to be as far left as possible.
Number of nodes = 2^(level) - 1 
- a perfect binary tree with 2^k - 1 nodes has k levels. 
- adding one more node: 2^k nodes has k + 1 levels 
- height is O(logN) because it is always balanced 
##### Heap as priority queues 
- add(): O(logN)
- remove(): O(logN)
- peek(): O(1); better and simpler than balanced trees 
- There is no linear-time operations (better than lists)
##### poll() aka remove()
1. Save root element in a local variable 
2. Assign last value to root, delete the last node. 
3. While less than a child, switch with the bigger child (bubble down)

![[Screenshot 2024-12-03 at 11.24.08 AM.png]]