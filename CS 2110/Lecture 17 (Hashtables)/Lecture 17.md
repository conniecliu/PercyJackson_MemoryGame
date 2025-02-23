#### Dictionaries 
Also known as Map or Associative Array
##### ADT 
- Given a word, return its definition 
- Given a contact's name, return their phone number 
- Given a student's ID number, return their NETID
- `key` and `value`
##### Dictionary Interface
![[Screenshot 2024-10-24 at 10.53.34 AM.png]]
![[Screenshot 2024-10-24 at 10.53.53 AM.png]]
#### Hash codes and indices 
##### Two-step process: 
1. Hash a key into an `int` ("hash code")
2. Turn a hash code into an array index 

- Object defines a `hashCode()` method 
	- any Java object can be used as a key 
	- Implementer must ensure hash code is consistent with equality
		- if overriding `equals()`, you MUST override `hashCode()` too 
- Keys should be *immutable*
	- If hash code changes, entries will be at the wrong index 
##### Evaluating hash functions 
A good hash code function returns values distributed over an entire range of ints. This means that the most "arbitrary" method or the one that would never produce the same identifier or hash function would be the best option. 
#### Collisions 
- Multiple hash codes could have the same remainder, yielding the same index 
- Multiple keys could have the same hash code 
	- Collisions are unavoidable 
##### Collision resolution 
###### Chaining 
- treat array elements as buckets storing a collection of entries (linked list)
- finding the right bucket is O(1) but searching it will be slower 
- key -> hash code -> table index -> bucket 
###### Probing 
- Array elements point directly to entries 
- If desired element is occupied, pick the next element to try according to the probing sequence 
###### Complexity analysis: Get(k)
- Best case: no collisions; bucket is either empty or contains a list of length 1
	- total cost: O(1)
- Worst case: everything collides 
	- either array is too small or hash function is very poor
	- bucket contains linked list of length N
	- linear search O(N)
- Average cost to look up a key in buckets 
##### **Load factor ($\lambda$)**: number of elements/number of buckets**
Aka O($\lambda$)
- Is this good?
- if array size if fixed, no because the numerator would grow linearly 
	- **Must use dynamic array for good performance**
#### Resizing 
- Goal: keep load factor ~ 0.75
	- when load factor exceeds target, double the size of the array 
	- **Cannot simply copy old array elements; must re-hash the keys**
- Cost of resizing: O(N)
	- Cost can be amortized over many "put" calls before resizing is needed again 
#### Linear Probing 
##### Put()
1. Computer key's hash code 
2. Derive table index 
3. Check whether table entry is empty 
	1. if yes, put the key and value there. Otherwise, search for the next available entry 
##### Get()
1. Computer key's hash code
2. Derive table index 
3. Examine table entry 
	1. If empty, return "no value"
	2. If equal to key, return value 
	3. Otherwise, go to next entry and repeat 
Ex) 
![[Screenshot 2024-10-29 at 10.22.52 AM.png]]
Critique of linear probing: it causes clusters. 

If we remove "Brenda", then ask whether set contains "Stacy":
- It *should* return yes, according to the ADT. However, because of our `Get()` method, Brenda gets removed and index at 7 is null. Stacy, however, is supposed to be at index 7. Therefore, the program would return no, instead. 
##### Deletions 
- Need a third "state" that an element could be in: null, entry, or "vacant"
	- Aka "tombstones"
- Tombstones count towards load factor, slowing things down but can be cleared when resizing 
- When we reach vacant elements, probing has these functions: 
	- `contains()`: skip and keep going
	- `add()`: skip when checking for existing key. Replace with Entry if the key is new 
#### Conclusion:
- Chaining is less sensitive to load factor and accommodates deletions better. However, it requires more memory than probing and the element access is less direct 
- Probing is more sensitive to load factor; vulnerable to "clustering" and deletions deteriorate performance. However, it requires less memory and element access is more direct. 