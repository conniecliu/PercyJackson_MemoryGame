#### Why Efficiency?
Dependent on size is not as reliable when it comes to efficient programming with data structures. ![[Screenshot 2024-10-01 at 10.30.04 AM.png]]
- the dependency on size does not fully capture the amount of work done 
#### Linear Search
- searching an array from front to back in order 
#### Binary Search 
- narrowing the search region by halving it 
- requires the array to be sorted 
#### Efficiency of Summing numbers up to n 
![[Screenshot 2024-10-01 at 10.49.04 AM.png]]
##### Mind-bender 
- the cost of Algorithm 2 is its own answers 
	- the number of iterations of a triangular nested for loop is the equation used for Algorithm 3 
- **when seeing a nested for loop dependent on size, it will, at the worse case scenario, perform the equation in Algorithm 3.**
#### Theory of Efficiency 
##### What we should measure 
- basic operations:
	- primitive piece of computation in a program 
	- focus on the most significant contributors to total time requirements 
	- often involve reading or writing from memory or asking the CPU to compute 
- size:
	- some representation of how "big" the input is 
##### Simplifying running times 
- Ignore the low-order terms 
	- only the "biggest" parts matter as size grows asymptotically 
	- ex)
$$
	O(n^2 + n) \to O(n^2)
$$
- Ignore the constant factor of high-order term 
	- for algorithms, constants are irrelevant because growth and efficiency do not change constantly or have a linear relationship 
		- ex) 2n steps in Java might be 100n steps in machine code 
$$
	O(2n) \to O(n)
$$
#### Big Oh Notation 
##### Defining Big Oh
- a function f(n) is O(g(n)) if there exist positive numbers *c* and *N* such that: 
$$
n \ge N
$$
- and the following inequality is true:
$$
 f(n) \le c \cdot g(n)
$$
- Big O notation helps you quantify how scalable and efficient an algorithm is as the input size grows.
- **in other words: c times g(n) is an upper bound on f(n) when n is large
	- Big Oh is an asymptotic upper bound 
##### Proof of Big Oh 
Given a function f(n) and we want to show it is in O(g(n)):

$$
f(n) = 3n + 5
$$
The simplification of this equation for runtime efficiency would be:
$$
g(n) = n
$$
Because we ignore the constants. Since g(n) = n, we can deduce that n >= N and:
$$
3n+5 \le c \cdot n 
$$
To find our missing values of n and c, we can solve the inequality:
$$
\begin{align}
5 \le cn-3n \\
5 \le n(c-3)\\ 
\end{align}
$$
Since the right-hand side of the inequality depends on (c-3) for it to remain greater than or equal to 5, we must ensure that (c-3) is a positive number. This means that c cannot be less than or equal to 3. So:
$$
c > 3

$$
Thus, the closest value to c right now is 4. If we try 4, we find that n can be greater than equal to 5. This means that 5 is our value for N. 
$$
3n+5\le4n\ (for\ n\ge5)
$$

##### O(1): Constant 
- the "always independent on size"
- simple algorithms that have typically one step before ending. For instance, throwing an exception after checking there's no size left in an array (which is true) so there is only one step in the process.
##### O(log n)
- no need to include the base because we ignore constant factors 
- used in binary search algorithms 
![[Screenshot 2024-10-03 at 10.22.37 AM.png]]
##### O(n): Linear
- the "always dependent on size"
- generally similar but more complexities than constant
- has a few steps in the algorithm with conditions or for loops
	- more branches and outcomes to go into
##### O(n^2): Quadratic 
- the "not only dependent but runs considerably slower as size increases"
