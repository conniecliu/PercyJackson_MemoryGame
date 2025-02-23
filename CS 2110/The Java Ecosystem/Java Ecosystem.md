1. What is wrong with implementing a Map using a basic BST? 
	1. gives O(N) performance time 
	2. BST is sorted with a lesser left tree and a greater right tree and searching through that is not efficient 
2. avoid implementing hash table resizing by allocating a huge table to start with 
	1. "huge" might not be huge enough 
	2. "huge" might also be too huge and it wastes space 
3. resolve hash collisions by doubling the table size 
	1. collisions could be a result of two items in a table having the same hash code. Doubling the table size does not resolve this issue. 

