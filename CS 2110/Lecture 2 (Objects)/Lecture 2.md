#### Class Diagrams
##### State
- what distinguishes one value of a type from another. 
- essentially the data stored in a value. 
##### Behavior 
- the methods in a class.
- the functions of the program. 
##### Classes and Objects 
- Classes: blueprints for objects. 
	- defined a type for specifying state and behavior. 
		- values of those types are called **instances** of the class. 
			- instances of classes are called **objects 
- Objects: the house built according to those blueprints. 
- **Classes are defined at compile-time, objects exist at runtime.

![[Screenshot 2024-09-14 at 5.22.15 PM.png]]
##### Fields and Methods 
- Fields: variables that will live inside objects. They are the attributes of an object. 
- Methods: functions that can access an object's fields. 
- **`this.`** refers to the object a method was invoked on. 

#### Shadowing 
- method parameters and local variables may have the same name as fields. 
- local variable takes precedence when it is in scope. 
	- field would then be shadowed. 
- to refer to a shadowed field, use `this.`

![[Screenshot 2024-09-14 at 5.29.44 PM.png]]

#### Object Diagrams
##### Rules 
- Rectangular boxes: **variables
	- Primitive values go directly in variable boxes 
- Rounded boxes: **objects
	- object boxes contain **fields (or a string representation)
	- variable boxes point to objects with arrows, or are crossed out if null (never empty).
- Variables NEVER point to other variables. 
![[Screenshot 2024-09-14 at 5.37.35 PM.png]]![[Screenshot 2024-09-14 at 5.37.56 PM.png]]