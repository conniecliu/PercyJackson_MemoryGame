![[Screenshot 2024-09-17 at 10.13.41 AM.png]]
- it's ok for Jet to not have the name() because Jet is abstract. 
- U2 does not have a toString() method but it inherits one from the Jet method. 
#### Exceptions 
- Expecting the unexpected 
	- Specifications should define what happens in "exceptional" situations 
	- Can't disallow in preconditions (client can't always predict the problem), or return a special value (client might not be checking the value or no what it means)
	- Thus, we throw an **exception 
- New syntax:
	- `throw` statement: reports a problem 
		- followed by a Throwable object 
		- method execution will immediately end and will not yield a value. 
		 ![[Screenshot 2024-09-17 at 10.54.18 AM.png]]
	- `try-catch` blocks: respond to a problem 
		- wrap operations that might throw an exception in a `try` block 
		- if an exception is thrown, control will exit the try block and jump to appropriate catch block. 
			- if no matching catch clause, exception propagates. 
		- `e` is the exception object. 
		- the *first* catch block that catches a super type  of the dynamic type of the thrown object will be executed. ![[Screenshot 2024-09-17 at 11.07.22 AM.png]]
	- `throws` clause: disclose that problems might arise and goes in method *declarations*
		- informs clients that there are ways this method could fail 
			- lists which types of exceptions they should be prepared to handled 
			- exceptional circumstances should be elaborated in the specs 
		 ![[Screenshot 2024-09-17 at 11.08.46 AM.png]]
#### Exception classes
![[Screenshot 2024-09-17 at 11.12.26 AM.png]]
- **Checked**: must disclose and prepare for 
	- must add `throws` clause to method declaration 
	- cannot throw new kinds of checked exceptions if overriding 
- **Unchecked**: invisible in most code 
	- may throw or allow to propagate without warning 
#### (Auto) Boxing 
##### Wrapper classes 
- Each primitive type has an associated class 
	- also home to useful utility functions 
- An instance represents a single, immutable value 
- Can be used anywhere `Objects` are expected 
- Java will automatically convert between primitives and wrapper objects when needed. 