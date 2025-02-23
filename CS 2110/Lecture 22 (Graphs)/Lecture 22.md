#### Warmup (Synchronization)

![[Screenshot 2024-11-12 at 10.12.44 AM.png]]
1. The `foo()` method sleeps for 10 seconds. So, if Thread A calls `x.foo()` and acquires a lock, and 2 seconds later, Thread B calls `x.foo()`, 10 seconds have not been up yet. 
	1. Thread A is still "using" `foo()`so Thread B cannot use the lock or acquire it yet 
2. Thus, the answer is `Thread B will be blocked on the lost list`
#### Graphs 
Vertices connected by edges 
- Graphs generalize trees 
#### Graphs as mathematical structures
##### Undirected graphs 
An undirected graph is a pair (V, E) where: 
- V is a set 
	- an element of V is called a vertex or node 
- E is a set (a set of sets)
	- an element of E is called an edge 
	- an edge contains a two-element set (path)
##### Directed graphs 
A directed graph is similar except the edges are pairs (order matters)
##### Paths 
A path is a sequence of vertices such that 0 <= i < p
- The length of a path is its number of edges 

> [!NOTE] Conversion between graphs
> **Can one convert an UNDIRECTED to DIRECTED graph?**
> 	Yes, we can replace each edge in the undirected graph with two edges 
> 	
> **Can one convert a DIRECTED to UNDIRECTED graph?**
> 	No, because we wouldn't be able to preserve the same set of paths. 
##### Labels 
Vertices and edges can optionally be labelled with any kind of data. When labelled with a number, it's called a weight. The weight of a path is the sum of the weights on its edges. 
#### Graphs as data structures 
##### Adding desirable operations 
If we mimic the math, the design of a graph in the mathematical sense is not a good design. It's not ergonomic, and not very efficient 

So, we can add desirable operations: 
1. `Edge` class (directed)
	1. get destination (`Vertex)
	2. get weight 
2. `Vertex` class 
	1. get label 
		1. iterate over outgoing `Edges`
		2. count out degree 
3. `Graph` class
	1. iterate over `Vertices`
	2. count vertices 
	3. count edges 
	4. get `Vertex` from label 
	5. query whether two vertices are neighbors (given labels)
	6. creation/mutation 
		1. add vertex (with label)
		2. connect vertices with edge 
##### Graph data structures 
- Vertices u is adjacent to vertex v if there is an edge from v to u 
	- the vertices adjacent to v are the vertices you can reach from b by following one edge 
- Common graph data structures: 
	- **Adjacency list**
	- **Adjacency matrix**
	
		![[Screenshot 2024-11-12 at 11.02.57 AM.png|500]]
##### OO Representation 
- Each vertex contains a set of the vertices that are adjacent to it 
- The graph contains a map of labels to vertices 
- "object graph" resembles represented graph 

![[Screenshot 2024-11-12 at 11.10.43 AM.png]]
#### Efficiency of Representations 
##### Adjacency list vs Adjacency matrix 
###### Space to store 
- Adjacency List: O(|V| + |E|)
- Adjacency Matrix: O(|V|^2)
###### Time to visit all the edges 
- List: O(|V| + |E|)
- Matrix: O(|V|^2)
###### Time to determine whether edge from v1 to v2 exists 
- List: O(|V| + |E|)
- Matrix: O(1)
![[Screenshot 2024-11-14 at 10.17.04 AM.png|500]]