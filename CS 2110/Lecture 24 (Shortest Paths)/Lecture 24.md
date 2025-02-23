#### Unweighted graphs and BFS 
- "Shortest" means "smallest path length" (fewest edges)
- Shortest path length = BFS layer 
	- the undiscovered paths are in layer `n+1`
	- the discovered paths are in layer `n` or `n-1`
##### Algorithm
- Keep track of each node's layer
	- only update when node is first discovered 
![[Screenshot 2024-11-19 at 10.22.35 AM.png|500]]
##### Paths
- Whenever a new vertex is discovered, we need to record the path taken to get there 
	- most edges, however, have redundant paths 
- Back pointers
	- only need to store the edge from our discovery predecessor 
	- by following edges backwards, we can reconstruct a path 
![[Screenshot 2024-11-19 at 10.31.26 AM.png|500]]
##### Reconstructing paths 
```
static List<String> pathTo(String end, Map<String, PathInfo> pathInfo) {
	List<String> path = new LinkedList<>();
	String pred = pathInfo.get(end).pred;
	path.add(end); // adds the last vertex 

	while (pred != null) {
		path.add(0, pred); // prepend pred 
		pred = pathInfo.get(pred).pred; // updates pred
	}
	return path;
}
```
#### Dijkstra's Algorithm 
Shortest path to any undiscovered vertex can't be shorter than the smallest candidate path to a vertex in the frontier. 
- therefore, the smallest candidate path in the frontier must be the shortest possible path to the vertex 
##### Invariant and theorem 
Theorem: if f is a vertex in the frontier with the smallest candidate path, then that path is shortest possible path from start to f. 
##### Algorithm 
- Like BFS but tracks the distances (weight) instead of the layers 
- we don't need to explicitly track the settled set 
- use **priority queue** instead of FIFO queue for the frontier 
	- ADT for priority queue: 
		- `add`
		- `removeMin`
		- `udpatePriority`
##### Complexity analysis 
Self Cost: 1 
Total Cost: v (number of vertices)

![[Screenshot 2024-11-21 at 10.30.30 AM.png]]
