![[Screenshot 2024-09-19 at 10.12.41 AM.png]]
- It does not always preserve the class invariant because when the class is full, count would be left 1 more than the roster's length. This violates the invariant that states that count should equal to the number of students enrolled (length of roster).

> [!NOTE] 
>  **Assert the invariants before throwing the exception.**

#### Collections 
##### Collections of data 
- we often interact with groups of related things. Groups can be organized, interacted with differently. Thus, programs should be able to model these structures. 
	- **Bag**: grabbing randomly from a group of unordered things  
	- **List**: ordered group of things 
	- **Graph**: different nodes with different paths and routes 
	- **Tree**: hierarchies 
	- **Stack**: add to top and take from top 
	- **Queue**: add to back and take from front 
	- **Dictionary**: also known as maps 
##### Abstract data types (ADTs)
- operations, restrictions, and guarantees for a collection of objects 
	- can be expressed as an interface with its specifications 
- independent of programming language and can be implemented in multiple ways. 
##### Bag: Essential Characteristics 
- collection of items 
- copies/duplicates of items (relevant)
- order (irrelevant)
#### Cost/Efficiency 
- **Count**: the number of times the operation reads/writes from memory 
- **Determine**: is that number independent of the number of items in the bag? Or dependent?
- **Analyze**: what is the impact as the size of the bag increases? ![[Screenshot 2024-09-19 at 11.16.59 AM.png]]
#### Parameterization
- a parameter indicates something unknown at time of definition, but that will be supplied at time of use. 
- classes can be parameterized on types:
	- `class C<T>`
#### Generic Types 
- more broadly known as parametric polymorphism 
	- parametric: parameterized 
	- polymorphic: capable of taking many forms 
- **Generic types must be instantiated with reference types, not primitive types 
- Java uses wrapper classes to represent primitive values as objects 
	- `Integer` and `Double`