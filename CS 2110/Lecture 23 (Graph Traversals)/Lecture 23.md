#### Breath-first search 
Key idea: iteratively visit each unvisited "layer"
Space complexity: O(|V|)
##### Example
![[Screenshot 2024-11-14 at 10.50.51 AM.png]]
Answer: B; It explores all the nodes in one layer (1), then all the nodes in the next layer (2, 3, 4), and finally all the nodes in the last layer (5, 6, 7, 8) without repeating layers that have already been explored. 
##### BFS Code 
![[Screenshot 2024-11-14 at 11.01.54 AM.png]]

**Settlement and visiting order is the same.**
#### Depth-first search 
Time Complexity: O(|V| + |E|)
Space Complexity: O(|V|)
##### DFS Code 
![[Screenshot 2024-11-14 at 11.17.28 AM.png]]

There is no need to visit each layer. Unlike BFS, DFS searches exhaustively starting from one neighbor before searching starting from the next neighbor. In other words, instead of searching layer by layer, it goes as far as possible for a node's neighbors before going back to the top and resuming. 

**Settlement and visiting order is NOT the same. Settlement order for a node can only be considered when all neighbors of that node have been visited.**