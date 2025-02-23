Loops are getting more complex, how do we convince ourselves and others that loops are correct? 
![[Screenshot 2024-10-17 at 10.54.43 AM.png]]
- We can add a comment: 
```
//inv: 'count' is freq of 'item' in first 'i' elements of 'items'
```
This comment is called a loop invariant because it is the core idea of why the loop works and should never be false. Throughout the loop, count represents the number of times an item appears in items, therefore the invariant should always hold and is important enough to document.
#### Some helpful, concise notation (less English in specs)
![[Screenshot 2024-10-17 at 10.57.41 AM.png]]
- Updated loop invariant for the frequency method:
```
//inv: 'count' is freq of 'item' in 'items[..i)'
```
##### Loop Invariants 
- They are a specification that describes what is always true before and after a loop 
	- Aids in the development of a new loop
		- Understand whether a loop is correct 
- States the relationship between the important variables in a loop 
- You can assert a loop invariant during debugging like how you assert a class invariant 

> [!NOTE] The 4 Loopy Questions
> 1. Does it start right?
> 2. Does it maintain the invariant?
> 3. Does it end right?
> 4. Does it make progress?

