#### Class Invariants 
- **Invariant**: a statement that should always be true. 
	- **class invariant**: relationship among fields; its truthfulness should not be affected by calling methods. 
		- ex) `counts` is non-negative.
	- **loop invariants**: relationship between local variables; truthfulness not affected by loop iterations. 
- Typically, invariants are expressed as comments *but the comments are not invariants themselves.*
- invariants should also specify how fields should be interpreted. 
#### Encapsulation 
##### Dividing responsibilities 

| Client                                                                                                                                                                                                  | Implementer                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| - uses classes to solve problems. They construct objects, invoke methods, can could be writing code anywhere.<br>- client should be able to use class for any purpose and never get incorrect behavior. | - implements a class's behavior in terms of its state.<br>- writes code in class's "java" file. <br>- might be a client of other classes to get the job done.<br>- implementer must maintain class invariant and provide correct behavior. |
| - could be anyone.                                                                                                                                                                                      | - an assigned duty.                                                                                                                                                                                                                        |
##### Access modifiers 
- `public`: anyone can access fields/invoke methods
- `private`: only the class implementation can access fields/invoke methods. 
	- protects the name of the field not the actual object. 
- If class is `public`, fields should always be `private`
	- Helper methods should be `private`

![[Screenshot 2024-09-15 at 11.30.05 AM.png]]

#### Defensive Programming 
##### Java's `assert` statement
- `assert` < boolean expression >; crashes program if condition is false. It should be **asserted at the end of every method.

