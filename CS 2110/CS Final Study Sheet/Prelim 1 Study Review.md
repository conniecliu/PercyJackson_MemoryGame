#### Procedural programming
##### List of topics
1. [x] Translate a short, 1-line mathematical formula into a Java expression that computes the formula. The formula could involve integers, floating-point numbers, and booleans, as well as arithmetic, logical, and relational operators.
2. [x] Given the name of a type, classify it as either a primitive type or a reference type.
3. [x] Given a type `boolean`, `int`, `double`, or `char`, and a value of that type, write a variable initialization statement that causes the variable to be assigned that value.
4. [x] Given a few lines of code, predict the result of adding or removing keyword `final`.
5. [x] Given a short expression that contains a mixture of types `int` and `double`, correctly predict the effect of any widening or casting operations. Examples: `1.8 * 10`; `(double) 1 / 4`.
6. [x] Given the name of a variable and a one-sentence specification of the new value it should contain, write an assignment statement that satisfies the specification. Examples: “increment `x` by 1”; “assign `foo` the result of calling function `bar` on arguments `baz` and `quux`”; “initialize `next` to `null`”.
7. [x] Implement a short `static` method that satisfies a given specification. The specification is stated in a mixture of math and English. Implementing the method requires the use of `if` statements, ternary operators, `for` loops (standard or enhanced), and/or `while` loops. Examples: the methods on A1.
8. [x] Write a short method that manipulates a string using the `length()` and `charAt()` methods and the `+` operator. Examples: return the next-to-last character (if any) of a string, return the concatenation of the first and last characters (if any) of the string. Or, given such a method without its name or specification, predict the result of running the method on a given input.
9. [x] Write a short method that uses arrays to accomplish a specified task. The task might require declaring an array, initializing an array, getting the array’s length, indexing into the array, and/or looping over the array. Example: create an array named `smallInts` of length 10 that contains the integers `0` through `9` in increasing order. Or, given such a method without its name or specification, predict the result of running the method on a given input.
##### Important notes
2. Primitive types are the most basic types (ints, doubles, booleans)
	1. They're pre-defined and contain the actual value 
	2. Reference types are references to objects 
4. Adding `final` in front of a variable means that the variable's value cannot be changed after being assigned the first time. Removing `final` would make the variable open to change. 
5. `1.8 * 10` would be `18.0` (double) and `(double) 1 / 4` would be `0.25` 
7. Static methods can be called by the class itself while instance methods can only be called after creating an object of the class
9. Declaring an array: `int[] numbers = new int[5]` 
	1. Initializing an array: `int[] numbers = {1, 2, 3, 4, 5}`

#### Compile-time and run-time 
##### List of topics
1. [x] Classify a short program as containing a compile-time error, a run-time error, or no errors. The program could contain any of the Java features mentioned elsewhere in this study guide.
2. [x] State the static type of an expression, given information about the types of variables occurring in it. The expression could contain any of the Java features mentioned elsewhere in this study guide.
3. [x] State the dynamic type of an expression, given information about the values of variables occurring in it. The expression could contain any of the Java features mentioned elsewhere in this study guide.
4. [x] Draw the **object diagram** that results at run-time from executing a short program. The object diagram must correctly use square versus rounded boxes, and the arrows in it must start and end at the correct places. Names and types must be labeled in the correct locations. Fields of objects must be correctly enclosed in the object. Null references must be correctly depicted, as must strings and arrays. The program could use a mixture of primitive types and reference types, with the corresponding value and reference semantics. Example: the `Counter` code and diagram from lecture.
##### Important notes
1. Classes are defined at compile-time, objects exist at runtime 
	1. types declared for variables and return values are also determined at compile-time
	2. types of objects being referenced are determined at runtime 
	3. Casting for inheritance: 
		1. down-casting (going from a super to subtype): runtime failure 
		2. up-casting (going from subtype to super): allowed; won't fail but unnecessary 
		3. side-casting: not allowed 
		4. double casting: runtime failure 
2. Static type: the type declared at the start of the declaration. The dynamic is the part after.
	1. ex) `Animal animal = new Cat() // Animal = static, Cat = dynamic`
3. Object diagram example:
		![[Screenshot 2024-09-14 at 5.37.56 PM.png]]
#### Classes
##### List of topics
1. [x] Given the code for a method, circle and label these parts: return type, parameters, specification, keywords, types, literals.
2. [x] Given the code for a short class, circle and label these parts: fields, methods, constructors, supertype (class or interface).
3. [x] Given a class diagram, circle and label these parts: name, state, behavior.
4. [x] Given the code for a short class, create the class diagram for it.
5. [x] Given the method specifications for a class, write the field declarations and class invariants that will suffice to implement the methods. Example: `Counter` and `Fraction` from lecture.
6. [x] State the default value to which a field will be initialized, given the type of the field.
7. [x] Given a constructor signature, write a `new` expression to instantiate an object with that constructor.
8. [x] Given fields and a class invariant, write a constructor that initializes an object by truthifying the class invariant. The parameters of the constructor might be given, or you might need to invent them yourself to satisfy a given specification. Examples: the constructors in A2.
9. [x] Given a method signature, write an expression that invokes that method. The arguments to the method might be given, or you might need to invent them yourself to satisfy a given specification.
10. [x] Given a method specification, fields, and the class invariant, write the (short) body of the method. Examples: the methods in A2.
11. [x] Given a piece of code, circle the parts of it where a given name is in scope.
12. [x] Predict the result of executing a piece of code that involves names that shadow each other. The shadowing could involve local variables, method parameters, fields, and expressions such as `this.field`.
13. [x] Given code involving a class, label the parts that are written by the client of the class vs. the implementer of the class.
14. [x] Circle and label the following parts of a given method specification: preconditions, postconditions, effects.
15. [x] Given a method specification containing a precondition and postcondition, and an invocation of that method with some arguments, but not given the method body, predict the result of the invocation. If the behavior would be undefined, suggest at least three possibilities of what might happen.
16. [x] Annotate a method body with an asterisk at each point where the class invariant is required to hold.
17. [x] Write defensive code to assert the preconditions of a method, given the method signature and specification.
##### Important notes
1. Example
```
/** 
* Calculates the square of an integer. 
* 
* @param number the integer to square 
* @return the square of the input integer
*/ 

public int square(int number) {
	return number * number; 
}
```
- Return type:` int`
- Parameters:` int number`
- Specification: the comment 
- Keywords: `public`, `return`
- Types: `int`
- Literals: No literals. Literals are fixed numbers in a method or program. 

2. ![[Screenshot 2024-09-14 at 5.22.15 PM.png]]
12. When two names are the same, the most locally defined one takes precedence. For instance:
```
public class Example {
    private int value = 10; // Field

    public void displayValue() {
        int value = 20; // Local variable shadows the field
        System.out.println(value); // Prints the local variable, not the field
    }
}

```
- In this case, the value would be 20. However, if we want to access the original field value, we call `this.value`

> [!Key takeaways]
> - **Local Variable Shadows Field**: Local variable takes precedence unless `this.field` is used.
> - **Method Parameter Shadows Field**: Parameter takes precedence, but `this.field` resolves the field.
> -  **Local Variable Shadows Method Parameter**: Most locally defined name takes precedence.
> -  **Inheritance Field Shadowing**: Field resolution depends on the **type of the reference**, not the object.
```
> public class Parent {
    public int value = 20;
}

public class Child extends Parent {
    public int value = 30; // Shadows the parent's field
}

public class Main {
    public static void main(String[] args) {
        Parent obj = new Child();
        System.out.println(obj.value); // Accesses Parent's field
    }
}
// 20 would be printed even though 30 shadows the parent's field. The static type is Parent so it'll return the Parent's value. 
```

#### Testing
##### List of topics
1. [x] Given a method specification, invent at least three black box tests for it. The tests must not violate the method precondition. The tests must state the input and expected output. The tests do not have to be expressed in JUnit syntax.
2. [x] Given a method specification and implementation, invent at least three glass box tests for it. The tests must not violate the method precondition. The tests must state the input, expected output, and actual output. The latter two might differ if the method implementation is incorrect. The tests do not have to be expressed in JUnit syntax.
3. [x] Given a method specification and implementation, invent a set of glass box tests that achieve full line coverage. The set should include as few tests as possible. Example: `Counter` from lecture.
##### Important notes 
![[Screenshot 2024-09-15 at 2.09.28 PM.png]]
1. Blackbox testing is testing it under the assumption everything is properly coded. 
2. Glass-box testing is testing it with the intention of breaking to address potential corner cases. 
3. 
```
/**
 * Returns the absolute difference between two integers.
 * 
 * Precondition: `a >= 0 && b >= 0`
 * Postcondition: Returns `|a - b|`
 */
public int absoluteDifference(int a, int b) {
    if (a > b) {
        return a - b; // Line 1
    } else if (a < b) {
        return b - a; // Line 2
    } else {
        return 0; // Line 3
    }
}
```
- `absoluteDifference(5, 3)
- `absoluteDifference(2, 6)`
- `absoluteDifference(5, 5)`
#### Object-orientated Programming 
##### List of topics
1. [x] Given a class whose members are marked as either `public` or `private` (but not `protected` nor “default”), predict the result of compiling client code that attempts to access those members.
2. [x] Given a class with some fields and class invariants, where some field(s) are marked as `public`, write client code that invalidates the class invariant by exploiting that visibility.
3. [x] Given a class diagram and a skeleton implementation of that class (i.e., pieces such as method bodies or constructors or specifications may be missing), add `public` or `private` to each class member to encapsulate the state.
4. [x] Given an interface and a class that claims to implement the interface, predict whether the code compiles — that is, whether the class really does implement the interface.
5. [x] Given an interface containing at most about three methods (including signatures and specifications), write a class that implements the interface. The fields and class invariant might or might not be given. Example: the interface is for complex numbers and contains observers for the real and imaginary parts, and a method to add complex numbers. You invent two fields and implement the methods with them.
6. [x] Given two or three classes each containing one to four methods, write an interface that abstracts the common behavior they contain. Only the method signatures need to be written in the interface, not the specifications.
7. [x] State all the subtype (<:) relationships that exist in a provided class hierarchy. The hierarchy could be given in the form of a class diagram or code. Example: state all the subtype relationships between `Piece`, `Rook`, `King`, and `Fraction` as given in lecture.
8. [x] Apply the compile-time reference rule to answer whether a piece of code involving two or more class types will compile. Example: `Piece p = new King(); p.castle()`.
9. [x] You are given a piece of code that violates the compile-time reference rule. Insert a cast to make the code compile. Your cast must not cause a runtime error.
10. [x] Given a variable of static type `S`, perform a runtime check to determine whether it is of dynamic type `D`. If so, cast the object to type `D` and invoke a method that exists in `D` but not in `S`. Example: cast an `Object` to a `String` and invoke `length()`.
11. [x] Given a statement that uses a cast, classify the cast as one of the following: (i) allowed at compile-time but could fail at run-time, (ii) allowed at compile-time and will always succeed at run-time hence unnecessary, (iii) allowed at compile-time but will always fail at run-time, (iv) not allowed at compile-time.
12. [x] You are given a class `D` that extends another class `C`, where `D` overrides some of `C`’s methods but not others. Some of the methods contain print statements and/or `super` method invocations. You are also given some client code that creates objects of the two classes. Use the bottom-up rule to predict the result of the dynamic dispatch that results from invoking methods on the created objects. Specifically, state what is or is not printed as a result of the invocation. Example: `Parent`/`Derived`/`Child` iClicker question in lecture.
13. [x] Given a class `C`, write a class `D` that overrides a method in `C` to customize its behavior to a refined specification. Example: override `Object.toString()` to provide a meaningful string representation for a `Fraction` class.
14. [x] Write a short constructor that delegates some initialization to a superclass using `super()`, then finishes construction of its own class’s fields. Example: given classes for 2D and 3D points, write the 3D point constructor such that it delegates initialization of the `x` and `y` coordinates to the parent class, then initializes the `z` field itself.
15. [x] Write a short method that delegates some work to a superclass using `super`, and also performs some work of its own. Example: given classes for 2D and 3D points, and a 2D-point method that negates both coordinates, override that method in the 3D-point class, such that it negates its own `z` coordinate, and uses the superclass’s method to negate the other coordinates.
16. [x] Given a class hierarchy that contains some classes that are `abstract`, classify a `new` expression as allowed at compile time or not.
17. [x] You are given the code for a class. There is a method in the class that it is impossible to implement; it can only be meaningfully implemented in a subclass. Revise the class and method to be abstract. Strike through the code to be eliminated, and write the keywords or other code that must be added. Example: making `Piece` abstract in lecture.
18. [x] Given a class diagram, add class `Object` to it. Draw the arrows indicating what classes extend it. Write `toString()` and `equals()` in the box for `Object` with their types.
19. [x] You are given the code for a few classes. Some of them implement `equals()` and others do not. You are also given code that instantiates some objects of those classes and compares them with `==` and/or `equals()`. Predict the boolean return value of those comparisons.
20. [x] Given the implementation of a `equals()` method for a class, circle which of the following properties it satisfies, and cross out the properties it does not satisfy: reflexive, symmetric, transitive.
##### Important notes 
1. ![[Screenshot 2024-12-07 at 7.44.23 PM.png]]
3. Fields are always defaulted to `private` unless they need to be made `public`. Make methods `private` if they're helper methods. 
4. Ensure the class `implements` the interface, provides implementations for all the methods declared in the interface, method signatures must match exactly, must be `public` methods, have `@Override`
5. Example: (invent two fields and constructor)
```
   public interface ComplexNumber {
   // returns the real part of the complex number
   // @return the real part 
   double getReal();
   
   // returns the imaginary part of the complex number 
   // @return the imaginary part 
   double getImaginary();
   
   // adds another complex number to this complex number 
   // @param other complex number to add
   // @return the resulting complex number 
   ComplexNumber add(ComplexNumber other);   
   }
   
   // Class Implemtation
   /**
 * A class implementing the ComplexNumber interface.
 * Represents a complex number with real and imaginary parts.
 * 
 * Class Invariant:
 * - Fields `real` and `imaginary` accurately represent a complex number.
 */
public class SimpleComplexNumber implements ComplexNumber {
    private final double real;      // The real part of the complex number
    private final double imaginary; // The imaginary part of the complex number

    /**
     * Constructor to initialize the complex number.
     * @param real the real part
     * @param imaginary the imaginary part
     */
    public SimpleComplexNumber(double real, double imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    @Override
    public double getReal() {
        return real;
    }

    @Override
    public double getImaginary() {
        return imaginary;
    }

    @Override
    public ComplexNumber add(ComplexNumber other) {
        // Add the real and imaginary parts separately
        return new SimpleComplexNumber(this.real + other.getReal(), 
                                       this.imaginary + other.getImaginary());
    }

    @Override
    public String toString() {
        return real + " + " + imaginary + "i";
    }

    public static void main(String[] args) {
        // Test the implementation
        ComplexNumber num1 = new SimpleComplexNumber(3.0, 4.0);
        ComplexNumber num2 = new SimpleComplexNumber(1.5, -2.5);

        System.out.println("Number 1: " + num1); // Output: Number 1: 3.0 + 4.0i
        System.out.println("Number 2: " + num2); // Output: Number 2: 1.5 + -2.5i
        System.out.println("Sum: " + num1.add(num2)); // Output: Sum: 4.5 + 1.5i
    }
}

```
11. ![[Screenshot 2024-12-09 at 12.40.53 PM.png]]
12. Dynamic Dispatch: Java uses this to determine which method to run at runtime based on the object's actual type, not its reference type. In other words, it would depend on the dynamic type of the initialization expression. 
14. `super()` goes at the start of the constructor. 
15. ![[Screenshot 2024-12-09 at 12.48.26 PM.png]]
16. Abstract classes allow constructors but they cannot be instantiated. Abstract constructors are called by their subclasses. 
17. ![[Screenshot 2024-12-09 at 12.58.08 PM.png]]
18. ![[Pasted image 20241207193422.png]]
19. `==` compares the reference while `equals()` compares the content of the objects. If `equals()` is overrided, then `hashCode()` should be overrided as well. 
20.    
> [!NOTE] Equal properties
> **Reflexive**: for any non-null reference x, `x.equals(x)` should return true; object equals itself 
> **Symmetric**: if `x.equals(y)` returns true, `y.equals(x)` returns true too
> **Transitive**: if `x.equals(y)` returns true, and `y.equals(z)` returns true, then `x.equals(z)` should also return true too. 
![[Screenshot 2024-12-09 at 1.14.18 PM.png]]