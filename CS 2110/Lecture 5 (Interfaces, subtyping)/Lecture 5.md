#### Interfaces 
- Mechanism by which two parties work together, decided ahead of time. 
	- Parties don't need to know each other's details. 
- Guarantee to clients what a type can do, without committing to details (a contract)
	- Method signatures (name, param types)
	- Method return types
	- Method specs 
- Method declarations are implicitly `public`
##### Subtypes 
- implementing an `interface` establishes a subtype relationship 
	- ex) TwoPtInterval **<:** Interval 
		- A TwoPtInterval can do anything an Interval can do. 
		- A TwoPtInterval can be used anywhere an Interval is expected. 
#### Polymorphism 
| Static Type                                                                              | Dynamic Type                                                                                      |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| - types declared for variables and return values, derived for expressions (compile-time) | - the type of an object being referenced (runtime)<br>- determines the behavior: Dynamic dispatch |
ex) Should a client be able to call `p.canCastle()` when the dynamic type of the object referenced by `Piece p` is a `King`?
- No, because clients can only request behaviors supported by the target's **static** type. 
##### Casting 
- `k = (King) p`: down-casting (going from a super to subtype)
	- allowed but could fail at runtime 
- `p = (Piece) k`: up-casting (going from subtype to super)
	- allowed but unnecessary since every `k` piece is a `p` piece already 
- `k = (King) r; k = (King) f;`: side casting 
	- not allowed (impossible)
- `k = (King)(Piece) r;`
	- allowed but will fail at runtime 
##### Checking dynamic types before casting 
- `instanceof` operator 
	- runtime type queries are useful but are usually a sign of poor OO design
	- When possible, specify common behavior in a super type, then leverage dynamic dispatch for polymorphism. 