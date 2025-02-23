Core Bag operations were to add an item (duplicates allowed), remove an item, and literature over all items (**ordered unspecified**)
#### Queue 
- First-in, first-out ordering 
- waiting in line, conveyer belt 
##### Generalized queue ADT
- Add
- Push
- Offer
- Give
- Enqueue 
- Remove
- Pop
- Poll
- Take 
- Dequeue 
- Peek
- Head
##### What "Next" means 
- "Next" implies some ordering among the items in the collection 
	- most recently added item 
	- oldest element 
	- compares as first (sorting); order of importance 
##### Linked Queue Implementation 
- want fast access to both ends (remove from front, but add to back)
- queue classes can store two Node references 
- easier to remove from the front than the back because it might violate class invariants 
##### Array-based queue 
- **Circular Buffer**: a fixed-size circular data structure that behaves like a queue. However, it wraps around to the start when the pointer reaches the end of the queue 
#### Stack 
- Last-in, first-out ordering 
	- similar to stacking exams in a box so the last exam we put in the box is the first one out of the box later. 
- **a stack is not a list, it is an abstraction**
##### Linked Stack Implementation
- Push(new item)
	- prepend a node with the new item to the current chain (similar to the Bag's)
- Pop()
	- Remove the first node from the chain (second node becomes first)
	- returns the old first node's data 
##### Array-based stack 
- to implement `push`, appending the item is more efficient than prepending it. 
#### List 
##### Essential characteristics 
- collection of items 
- copies/duplicates are relevant 
- order is relevant 
- there is a position type relationship between the items 
##### Position vs Index 
- arrays in Java start at index 0 
- lists start at position 1 (for the textbook and this course)

