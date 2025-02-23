#### Inheritance
**ALWAYS implies an "is-a" relationship**
##### Commonality beyond interfaces 
- interfaces guarantee availability of behaviors 
	- however, interfaces can't provide fields or method bodies that depend on fields 
- this is where inheritance comes in: `extends` instead `implements`
	- subclasses inherit fields and method bodies from a parent/super class. 
	- also created a subtype relationship 
##### Accessibility in Inheritance Hierarchies 
- subclasses cannot see private members of parent class 
	- `private`: "don't mess with my invariants" (parent class has exclusive responsibility)
	- `protected`: "I'm trusting you" (derived classes have rights and responsibilities)
	- `public`: the client interface is also usable by derived classes
- **Specialization Interface**: defines how code can be extended in OO
##### Constructors in Inheritance 
- subclasses *must* call a parent class constructor in their constructor 
	- invoked using `super()`
	- must be the first statement in subclass constructor 
##### Overriding in Inheritance 
- a subclass method **overrides** a parent class method with the same signature (consequence of dynamic dispatch)
- it is impossible for a subclass's client to request a parent's implementation 
##### Object diagram (inheritance)
![[Screenshot 2024-09-15 at 2.38.04 PM.png]]
#### Abstract Classes
- cannot be constructed on their own 
	- must construct a subclass even though they may define a constructor 
- may have abstract methods 
	- method declarations without implementations 
- may also have concrete methods which are fully implemented with code 
- Difference between abstract and interfaces
	- abstract classes can have both concrete and abstract methods with instance variables, constructors, and provide partial implementations of common behaviors. 
	- interfaces can have default methods but cannot have instance variables or constructors 
#### Allowed relationships among subtypes
- Java only allows a single inheritance (only one superclass)
- Classes may implement multiple interfaces 
	- interfaces may extend other interfaces 
- All classes are a subtype of `Object`
	- Anything that implements an `interface` must be a subtype of `Object`
	- `interfaces` are not a subtype of `Object`
	- Some methods that may be override but provided by the `Object` class are `toString(), equals(), hashCode()`
##### Objects 
- **Referential equality (identity)
	- Test using the ==
	- Best avoided in most client code (let classes define their own equivalence relations)
- **Logical equality (state)
	- Test using `equals()`
		- defaults to referential equality 
			- may override the `equals()` to define equality. 
			- dangerous if class is mutable 
- **Equivalence relations 
	- Reflexive (you equal yourself)
	- Symmetric (If you equal someone, they equal you)
	- Transitive (If you equal someone and they equal someone else, you also equal someone else)
