#### Linked Data Structures 
- best of both worlds (unbounded capacity and efficiency independent from size)
![[Screenshot 2024-09-24 at 10.40.32 AM.png]]
- Think of it as a scavenger hunt (nodes are pointing to other nodes)
##### Specialized object objects for nodes 

![[Screenshot 2024-09-24 at 10.42.26 AM.png]]
- left node is `data:T`
	- points to the data stored inside of the node 
- right node is `Node<T>`
	- points to the next node 
	- cross the right side once we reach the end of the chain and there are no more nodes to point to.

![[Screenshot 2024-09-24 at 11.14.41 AM.png]]
