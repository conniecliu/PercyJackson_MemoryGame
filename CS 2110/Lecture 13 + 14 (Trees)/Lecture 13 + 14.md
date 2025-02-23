#### Rules for Trees 
1. composes of nodes 
2. one root node (no parent)
3. other nodes have exactly one parent and are reachable from the root 
4. no loops are allowed (can't have an ancestor as a child)
##### Terminology 
![[Screenshot 2024-10-08 at 10.35.04 AM.png]]
- Leaves: nodes that don't have descendants 
- Parent/child: parent is the root and the children are children of the root. They are siblings. 
- Ancestors/descendants
- Subtree
- Height/depth ("level")
##### Restricted Trees 
1. General tree 
	1. each node may have any number of children 
	2. might not be ordered 
2. Binary tree 
	1. each node has **at most** 2 children, distinguished as "left" and "right"
Trees are recursive. They have a value, a left subtree, and a right subtree. They are an extension of linked list Node but they add a second "next" pointer. 
##### Node class and recursive operations 
- leaf nodes: left and right subtrees are null 
- do not look at the children's values 
#### Complexity 
##### `size()` (number of nodes) and `height()` (number of levels in the tree)
- Time complexity 
	- must visit every node 
	- constant amount of work per node 
	- O(size)
- Space complexity 
	- will accumulate stack frames until reaching a leaf 
	- stack will be popped between left and right subtrees 
	- O(height)
#### Binary Search Trees (BST)
##### Searching 
- binary search finds things quickly in by eliminating half of the array 
- decision trees reach conclusion quickly by eliminating many possibilities from consideration from each step 
- since we can't always use an array (not always the best data structure to use), we can impose an invariant on subtrees to let us eliminate one of them each step of the way 
##### BST Invariant 
1. All values in the left subtree are less than this node's value 
2. All values in the right subtree are greater than this node's value 
3. No duplicate values 
4. Invariant applies to entire subtree, not just the parent and the children 
##### Operations (`contains()`)
- Base case 
	- the current node's data matches the target 
	- next subtree to search is empty 
- Recursive case 
	- if the target is less than the current node's data, recurse left 
	- if the target is greater than the current node's data, recurse right 
```
static boolean contains(BstCharNode subtree, char target) {
	if (subtree == null) {
		retun false;
	} else if (subtree.data() == target) {
		return true;
	} else if (target < substree.data()) {
		return contains(subtree.left(), target);
	} else {
		return contains(subtree.right(), target);
	}
}
```
##### Operations (`add()`)
- same as contains(), but tweak base action 
	- if next subtree to search is empty, replace it with a new node containing the new value 
##### Complexity 
- time complexity: 
	- worse-case base case: stop at the leaf 
	- only visited leaf's ancestors
	- number of nodes along path from root is the leaf's depth 
	- worst-case (maximum) depth is tree's height
	- O(height)
- space complexity: 
	- one recursive call per invocation until base case 
	- can be written iteratively 
	- O(height)
- **We want balance: sibling subtrees should have the same height as one another**
#### Set Implementation using a BST
- state: root node (null if set is empty)
- operations: add, contains, size 
	- remove and iterator would make our data structure easier to use 
- time efficiency 
	- add: O(height)
	- contains: O(height)
##### The Set ADT
- may contain at most 1 copy of each element (no duplicates)
- no ordering among the elements 
- optimized for `contains()` queries (faster than linear time)
##### What if elements aren't primitive? 
Binary search trees require that elements be ordered. However, we can't compare Objects with the < or > operators 
- In that case, we can cast the `Object` in the parameter to the object class we are writing the method in
- for the `compareTo()` method, if an object's value is less than another object's value, it returns a negative number. The value of that number does not matter it is the sign that matters. Otherwise, if the object's value is greater than the other's, return a positive number.
	- very useful for implementing `sort` methods for objects 
#### Traversal 
##### Traversal: in order 
- to visit nodes in order, we can traverse the left subtree, visit the self, and then traverse the right tree 
- can be implemented recursively 

> [!NOTE] 
> Left, Self, Right

##### Alternative: preorder traversal 
- visit the self, traverse the left subtree, and then traverse the right subtree 

> [!NOTE] 
> Self, Left, Right

##### Alternative: postorder travel 
- traverse left subtree, traverse right subtree, and then visit the self ![[Screenshot 2024-10-10 at 10.52.00 AM.png]]
- the answer is B because we start from the bottom and up in this tree. 
	- we can't go to K without first visiting M which is the root node 

> [!NOTE] 
> Left, Right, Self

#### Expression Trees 
- 3 * (1 + 4 * 1) / 5
- postorder traversal becomes very useful here: 
![[Screenshot 2024-10-10 at 10.54.13 AM.png]]
#### Polymorphic Recursion 
##### Trees without `null`
- Interface used: OOTree
- Classes: Empty, Non-Empty 
![[Screenshot 2024-10-10 at 10.58.31 AM.png]]

- if the node is empty, the size and height should be 0 

> [!NOTE] If the node is not empty:
> 1. The size should be `leftSide + rightSide + 1` 
> 2. The height should be `max(leftSide, rightSide) + 1`

