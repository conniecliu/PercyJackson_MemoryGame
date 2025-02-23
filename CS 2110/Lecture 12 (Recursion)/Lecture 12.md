#### Rules of Recursive Functions 
1. Must have a **base case** 
	1. Without a base case, the program will recursive infinitely 
2. In other cases, assume you know the answer to any "smaller" version of the same problem 
	1. Call yourself to get those answers 
	2. Only look at the specs, don't think about implementation 
3. Don't think too hard 
	1. Abstraction barrier means you don't have to understand how the smaller problems get solved as long as you obey the specs 
![[Screenshot 2024-10-03 at 10.40.09 AM.png]]
1) The smaller subproblem is the substring of the first and last removed 
2) The answer to the smaller subproblem can be used to check if the first and last letters are equal 
	1) `return word.charAt(0) == word.charAt(word.length()-1) && isPalindrome(word.substring(1, word.length() - 1);`
3) When we should not recurse: the length of the substring is less than 1 
	1) If we reach the base case, the answer should be true 
	2) `if (word.length() <= 1) {return true;}`
#### Recursive Data Structures 

![[Screenshot 2024-10-03 at 10.54.10 AM.png]]
![[Screenshot 2024-10-03 at 10.55.14 AM.png]]
- The correct answer is B because if `head.data` is not the target, then the remainder list has a total of the full list's length minus 1. That means, the position found in the remainder list should correspond to the position + 1 in the full list. 
##### Recursive Methods (OOP)
- a method's inputs include the object it was invoked on as well as its arguments 
#### Helper Methods and Encapsulation 
- `Node<T>` shouldn't be public!
- Recursive methods using Nodes expose implementation details 
#### Tracing Recursion 
- Recursive algorithms are best developed by acting as the client to their specs 
- Tracing, however, helps when analyzing efficiency and explain error messages when things go wrong in the program because of recursion. 
##### The call stack 
- every function call in Java is pushed onto a stack 
	- the bottom of the stack is `main()`
##### Recursion vs Iteration
- Recursion is more powerful than simple loops and more convenient than loops 
- Recursion uses more space than simple loops 
	- Tail recursion: if the last instruction in the recursive case is a recursive call, can rewrite as a simple loop 
- Tracing recursive calls is trickier than tracing iteration 