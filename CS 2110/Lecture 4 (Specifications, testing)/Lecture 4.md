#### Specifications
##### Specification vs Implementation 
- a **specification** says what a class or field represents or what a method should accomplish
	- they define what it means to be a bug.
	- checks that code satisfies spec at particular input values
- an **implementation** dictates how some behavior is achieved 
	- it is impossible to verify an implementation without a spec. 
##### Good specs: methods 
- **Returns**: what is special about the return value? 
	- **Creates**: the return value is a new object 
- **Requires**: what is assumed about its target or arguments? 
- **Modifies/effects:** how does the method mutate its target or arguments 
- interpret *every* parameter 
`/** Return the area of a regular polygon with nSides of length sideLength. Requires nSides is at least 3, sideLength is non-negative. */`
##### Good specs: fields 
- fields are private, so their specs are for the implementer 
- explains how fields represent the logical state 
- capture invariants 
`/** The denominator. Must be positive, and the GCD with num must be 1. */
##### Preconditions and postconditions 
- **Preconditions**: 
	- assumed to be true at start of method 
	- responsibility of the client 
	- this is represented by the **Requires** clause. 
	- Implicit (class invariant is true)
- **Postconditions:
	- promised to be true at end of method 
	- responsibility of implementer 
	- **Returns** and **Modifies/Effects** clauses represent this
	- Implicit (class invariant is true)
#### Testing 
##### JUnit 
- `assertEquals`
- `assertTrue`
- `assertFalse`
##### Black box testing 
- verify method postconditions against their spec
	- does not look at method implementation 
1) Read the spec
2) Think of a scenario (satisfying the preconditions)
	1) create supporting objects and call the method with arguments 
3) Deduce properties of the output/effects implied by the postcondition 
4) Assert that these properties are true 
	1) write JUnit assertions 
ex) 
- Given I have 100 shares of MSFT stock 
	- And I have 150 shares of APPL stock
	- And the time is before close of trading 
- When I ask to sell 20 shares of MSFT stock
- Then I should have 80 shares of MSFT stock
	- And I should have 150 shares of APPL stock
	- And a sell order for 20 shares of MSFT stock should have been executed. 
##### Glass box testing 
1) Look at implementation; choose inputs to trigger different branches 
	1) can measure "line coverage"
	2) any code not covered is code where your customer will be the first person to ever run it. 

![[Screenshot 2024-09-15 at 2.09.28 PM.png]]