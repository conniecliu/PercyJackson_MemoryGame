![[Screenshot 2024-10-22 at 10.13.53 AM.png]]
The loop invariant would be `j < k` because we cannot have `j = k` in our loop. 
#### Selection Sort 
Analogy: find the shortest remaining (unsorted) book, and move it just after all the already sorted book 

3 1 4 1 5; i = 0
1 3 4 1 5; i = 1
1 1 4 3 5; i = 2
1 1 3 4 5; i = 3
1 1 3 4 5; i = 4

![[Screenshot 2024-10-22 at 10.32.53 AM.png]]
- Invariant states that the array is sorted 
	- the objective is to move the bar to all the way to the end of the array so that the entire array can be sorted 
- The complexity of this sort is N(N-1)/2
	- i = 0: N-1 comparisons 
	- i = 1: N-2 comparisons 
	- i = 2: N-3 comparisons 
	- ...
	- i = N-2: 1 comparison 
	- The complexity in Big Oh Notation **is always O(n^2)** 
#### Insertion Sort 
Analogy: left hand holds cards that have already been sorted, then take next card from right hand, insert it where it belongs in left hand 

3 1 4 1 5; i = 0
1 3 4 1 5; i = 1
1 3 4 1 5; i = 2
1 1 3 4 5; i = 3
1 1 3 4 5; i = 4
![[Screenshot 2024-10-22 at 10.46.22 AM.png]]
- Additional invariant: a[j] < a[j+1..i]
- time complexity: 
	- i = 1: 1 comparison
	- i = 2: <= 2 comparisons 
	- i = 3: <= 3 comparisons 
	- ...
	- i = N: <= N - 1 comparisons 
	- The time complexity is also O(N^2) 
- If array is already sorted, the complexity would be O(N)

Insertion sort is stable because elements only move right-to-left and stop when they hit a duplicate. On the other hand, selection sort is *not* stable because long-range swaps can can change order. 
![[Screenshot 2024-10-22 at 10.55.44 AM.png]]
#### Merge Sort 
Given two sorted sequences, how hard is it to merge them? 
- We can just repeatedly take the smaller of what's left of the two sequences 
- Complexity: O(N)
##### Divide and Conquer 
1. sort left half of the array (using merge sort)
2. sort right half of the array (using merge sort)
3. merge left and right subarrays 
![[Screenshot 2024-10-22 at 11.03.02 AM.png]]
- Merge sort is faster than O(N^2) but slower than O(N)
	- They have a time complexity of O(log(n))
	- We have linear space complexity 
![[Screenshot 2024-10-22 at 11.17.40 AM.png]]
#### Quicksort 
1. partition array about a "pivot"
2. sort the subarray of values less than the pivot
3. sort the subarray of values greater than the pivot 


> [!NOTE] Algorithm Properties
> Selection Sort: 
> 	Best case time: O(N^2)
> 	Worst case time: O(N^2)
> 	Space: O(1)
> 	Unstable 
> 	
> Insertion Sort: (**more efficient for smaller data**)
> 	Best case time: O(N)
> 	Worse case time: O(N^2)
> 	Space: O(1)
> 	Stable
> 	
> Merge Sort: (**more efficient for larger data**)
> 	Best case time: O(N log N)
> 	Worse case time: O(N log N)
> 	Space: O(N)
> 	Stable 
> 	
> Quick Sort: 
> 	Best case time: O(N log N)
> 	Worse case time: O(N^2)
> 	Space: O(logN)
> 	Unstable
