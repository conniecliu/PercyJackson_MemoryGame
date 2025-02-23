#### Generics
##### List of topics
1. [x] Parameterize a class on generic type(s), and use those types in the class’s fields, methods, and constructors. Example: define a class to represent a pair of values who have the same type, with fields for each value, a constructor to initialize the fields, two methods to get the values of the fields, and a `toString()` method to print the pair.
2. [x] Given access to an example (i.e., a reminder) of how to initialize an array of a generic type, write a new array initialization that works for a different generic type.
3. [x] Classify a concrete type as usable or not usable for instantiating a generic type parameter. Example: given a class `C<T> { … }`, classify each of these as legal or illegal: `C<int>`, `C<Integer>`, `C<int[]>`, `C<Integer[]>`.
4. [x] As a client of class with a generic type parameter, instantiate the parameter on a wrapper class and use it with primitive types. Example: given a class `C<T>`, create an object of type `C<Integer>`, and use values of type `int` as arguments to methods of `C`, and/or return values from methods of `C`.
##### Important notes
2. Call the `createArray()` method 
3. `C<int>` not legal; `C<Integer>` legal; `C<int[]>`not legal; `C<Integer[]` legal.
4. Cannot instantiate generic types as objects or arrays 
#### Exceptions
##### List of topics
1. [x] Given the signature for constructor of a subclass of `Exception`, write a `throw` statement that will throw that exception.
2. [x] Given a method that is written to return `-1` or some other such value to indicate an error, revise the method to instead throw a specified exception.
3. [x] Given a method signature and specification that states the possibility of an exception being thrown, write a `try` statement that attempts to invoke the method, catches the exception if it is thrown, and prints a friendly error message. Example: given the method signature and specification for a method that opens a file, print an apology if it couldn’t be opened because an exception was thrown.
4. [x] You are given a `try` statement containing several `catch` blocks; there might be nested `try` statements, too. There are several print statements throughout. Write the output of the code. Example: iClicker question in lecture.
##### Important notes
2. add a `throws [exception name]` to the method signature and replace the `return -1` with `throw new [exception name]();`
3. the statement outside of the try-catch block will still be printed after the catch block is caught.
#### Data Structures 
##### List of topics
1. [x] Given a written description that includes text, diagram(s), and/or code, classify the entity being described as either an ADT or a data structure.
2. [x] Name at least three kinds of data collections that are common examples of ADTs.
3. [x] Given a real-world example of some data collection, either in written form or as a picture, choose one of the following ADTs as the most appropriate representation: Bag, List, Stack, Queue. Examples: a coin purse, the line to order at the Mattin’s sandwich counter.
4. [x] You are given a real-world example of some data collection, either in written form or as a picture. You are also given one of the following ADTs: Bag, List, Stack, Queue. Identify one characteristic of the collection that makes the ADT unsuitable for representing it. Example: a coin purse and a List.
5. [x] Describe at least four operations that are part of a Bag ADT. The descriptions must include a Java method signature for the operation, and a single sentence describing the main task performed by the operation. Precise preconditions/postconditions are not required for the descriptions.
6. [x] Given a Java interface for a Bag, write a Java method that uses a Bag to perform a stated task. The method should contain no algorithmic errors. Example task: add the individual digits from a phone number to a Bag, then print the frequency of each digit in the number.
7. [x] State one advantage and one disadvantage for each of these approaches to implementing a Bag: an array, a dynamic array, a linked chain of nodes.
8. [x] Given the field declarations for a Bag implementation based on an array, write a class invariant that correctly constrains the relationships between the fields. Example: given fields for size, capacity, and an array, write an invariant that describes which indices of the array are non-null, and how those relate to the size field, and how the capacity field relates to the length of the array field.
9. [x] Given a Java class for a Node, write Java code to construct a chain of linked nodes that contain three different data values. Also write Java code to construct a chain of two other linked nodes that both point to a single, shared data value.
10. [x] Draw a node diagram representing a chain of linked nodes containing N different data values, where N is between 0 and 5 inclusive.
11. [x] You are given a node diagram of a chain of linked nodes. You are also given a new data value. Draw the new node diagram that results from adding a new node to the beginning of the chain. The new node should contain the new data value.
12. [x] Given the fields and class invariant for a Bag implementation (array or linked), and a specification for a Bag operation, implement that operation in Java in less than 5 minutes. The operation might be one we studied in class/readings, or it might be a new one. Example operations: add, contains, frequencyOf, remove a specified value, remove an unspecified value, etc.
13. [x] Given the fields and class invariant for a Bag implementation (array or linked), and a specification for a Bag operation, identify whether the running time required by the implementation would be dependent or independent of the number of items in the bag. Examples: for the array implementation of a Bag with a field that tracks the number of items in the bag, the “size” operation is independent of the number of items, and the “remove specific item” operation is dependent.
14. [x] You are given a series of operations performed on a List, and the specifications for those operations. The specifications identify whether the list uses 0-based or 1-based positioning. Draw the node diagram for the list at the end of that series. Example: `addFront(0)`, `addEnd(5)`, `addAt(2, 3)`, `remove(1)`.
15. [x] Given the fields and class invariant for a LinkedList implementation, and a specification for a List operation, implement that operation in Java in less than 10 minutes. The operation might be one we studied in class/readings/A3, or it might be a new one. Example operations: addAt, addFront, addBack, get, remove at a specific position, remove an unspecified value, etc.
16. [x] Given the fields and class invariant for a LinkedList implementation, and a specification for a List operation, identify whether the running time required by the implementation would be dependent or independent of the number of items in the bag. Examples: for the linked list implementation that has head and tail pointers, the “add at end” operation is independent; but if we had only a head pointer, that operation would be dependent.
17. [x] You are given a series of push and pop operations performed on a Stack, followed by a peek operation. State the value returned by the peek.
18. [x] You are given a series of enqueue and dequeue operations performed on a Queue, followed by a peek operation. State the value returned by the peek.
19. [x] You are given the fields and class invariant for a Stack or a Queue. One of the fields is a Node or a List. Implement in Java a stated operation according to its specification. Example: the Stack is represented by a List field that keeps the most recent item at the beginning, and you have to implement the push operation by adding to the front of the Stack.
##### Important notes
5. 4 operations that are a part of the Bag ADT: `public void add(E item)`, `public boolean remove(E item)`, `public boolean contains(E item)`, `public int size()`
7. 

| Data structure        | Advantages                         | Disadvantages                                               |
| --------------------- | ---------------------------------- | ----------------------------------------------------------- |
| Array                 | - add(): O(1)<br>- fast access     | - cannot resize<br>                                         |
| Dynamic Array         | - can be resized                   | - not space efficient <br>- add() complexity is worse: O(n) |
| Linked Chain of Nodes | - Good for insertions and removals | - requires more memory<br>- bad for random access (O(n))    |
10. ![[Screenshot 2024-12-09 at 4.06.51 PM.png]]
11. ![[Screenshot 2024-12-09 at 4.09.19 PM.png]]
12. `Arrays.copyOf(array, int)` can be used to resize the array 
13. For arrays, the size() and add() operations are O(1). Remove, contains, and frequency are all O(n). for Linked Lists, it is the same thing. 
14. ![[Screenshot 2024-12-09 at 4.42.37 PM.png]]
15. 
```
public void addAt(int index, T value) {
   Node newNode = new Node(value);
   // if the index is 0
   if (index == 0) {
      newNode.next = head;
      head = newNode;
   } else {
      Node currentNode = head;
      for (int i = 0; i < index - 1; i++) {
	      currentNode = currentNode.next; // iterates until the currentNode is right before the desired index in the LinkedList.
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;  
   }
   size++;
}
// method that prepends a node 
public void addFront(T value) {
	Node newNode = new Node(value);
	newNode.next = head;
	head = newNode;
	size++;
}

// method that appends a node
public void addBack(T value) {
	Node newNode = new Node(value);
	newNode.next = null;
	tail.next = newNode;
	tail = newNode;
	size++;
}

```
19. Same thing as nodes; for stacks, the push() add a new node at the top of the stack. The peek() returns the value at the top of the stack. The pop() method removes the node at the top of the stack. (relatively simple)
#### Efficiency 
##### List of topics
1. [x] Match each of these complexity classes to its common name: O(1), O(log⁡n), O(n), O(n2), O(2n). (Common names: constant, logarithmic, linear, quadratic, exponential.)
2. [x] Given the common names of several complexity classes, order them from smallest to biggest. Example (not in order): exponential, constant, linear.
3. [x] Given a growth-rate function, indicate which of several Big Oh sets it is in, and further indicate which of those is the tightest bound. Example: function is 42n2+3n+742n2+3n+7, sets are O(1), O(n), O(n2), O(2n).
4. [x] Use the definition of Big Oh to show that a growth-rate function is in O(n)O(n) or O(n2)O(n2) by stating suitable constants cc and NN. Example: show that 42n2+3n+742n2+3n+7 is in O(n2). Out of scope: a proof involving logarithms.
5. [x] Given an English description of an algorithm, state what quantity describes the problem size, and state the algorithm’s worst-case time complexity using Big Oh notation. Example: compute the sum of the integers stored in an array.
6. [x] Variants of the above skill: Java code instead of an English description; best-case instead of worst-case; space instead of time.
7. [x] Out of scope: Big Omega and Big Theta notation. The exam will use only Big Oh, but we do expect you to be able to give the tightest Big Oh bound for both best and worst cases.
##### Important notes
1. O(1): constant, O(logn): logarithmic, O(n): linear, O(n logn): linearithmic, O(n^2): quadratic, O(2^n): exponential 
2. $$
 f(n) \le c \cdot g(n)
$$
5. Worst-case time complexity for computing the sum of the integers stored in an array: O(n)

#### Recursion
##### List of topics
1. [x] Given the implementation of a recursive function, describe its base case in your own words.
2. [x] Given a recursive function and some argument values, write the sequence of calls to the function and the output it returns from each call.
3. [x] Variant of the above skill: draw the call stack at a given point of execution, or state the maximum depth of recursion.
4. [x] Given a recursive function, state its space complexity in Big Oh notation as a function of its parameters.
5. [x] Given a recursive `static` function operating on a data structure, convert the function to an instance method in the data structure’s class (or vice versa).
6. [x] Implement a specified function using recursion. The problem to be solved can be broken into identical but smaller problems. Example: determine the number of ‘7’ digits in a number’s decimal form, leveraging the quotient and remainder when the number is divided by 10.
7. [x] Given a function’s implementation, draw the contents of its activation record (excluding the program counter / return address) in object diagram notation.
##### Important notes
4. trace the depth of the recursion to find space complexity 
5. To convert a static function to an instance method, remove the `static` keyword, and modifying the method's call to variables. Same thing from instance to static methods. 
6. 
```
// Determines the number of `7` digits in a number's decimal form
public void numSevens(int num) {
	// base case
	if (num == 0) {
		return 0;
	}

	// recursive case
	int lastDigit = num % 10;
	if (n == 7) {
		return 1 + numSevens(num / 10)
	} else {
		return numSevens(num / 10)
	}
}
```
![[Screenshot 2024-12-09 at 10.14.36 PM.png]]
7. Activation records + object diagrams for recursion
	![[Screenshot 2024-12-09 at 10.19.23 PM.png|500]]
#### Trees
##### List of topics
1. [x] Given a diagram of a tree, circle examples of the following: leaf, parent and child, subtree, root, interior node, siblings and descendants and ancestors of a given node.
2. [x] Given a diagram of a tree, state its size and height.
3. [x] Given the size of a binary tree, state its minimum and maximum possible height.
4. [x] Given a diagram of nodes connected by edges, state whether it is a tree.
5. [x] Given a diagram of a tree, state whether it is a binary tree.
6. [x] Given a diagram of a binary tree, state whether it is a valid binary search tree (BST).
7. [x] Given a diagram of a tree with children ordered left to right, enumerate the nodes visited by a preorder or postorder traversal.
8. [x] Given a diagram of a binary tree, enumerate the nodes visited by an inorder traversal.
9. [x] Given a recursive algorithm for processing a tree, state whether it is a “counting” or “searching” algorithm. Examples: methods in A4.
10. [x] Given the declaration of a “tree node” class for a general tree, implement a recursive method to query the tree in a specified way. Example: return the depth of a node containing a given value.
11. [x] Given the declaration of a BST node class, implement a recursive or iterative method for a specified operation. The operation might be familiar from the textbook or lecture, or it might be new. Examples: “contains”, “add”, find the minimum value in the tree, or find the largest value below some limit. Node values may be primitive types or subtypes of `Comparable`, or a `Comparator` may be provided.
12. [x] Using Big Oh notation, state the time and/or space complexity of a general tree or BST operation in terms of the tree’s size or height.
##### Important notes
1. ![[Screenshot 2024-12-09 at 10.37.00 PM.png]]
2. 
   ![[Screenshot 2024-12-09 at 10.38.50 PM.png|500]]
   size = leftSide + rightSide + 1
   height = max(leftSide, rightSide) + 1
7. 
   ![[Screenshot 2024-12-09 at 10.58.55 PM.png]]
9. Counting algorithms would include recursion that counts some property of the tree of its nodes. Searching notes, however, would have a recursive algorithm that looks for a specific value in the tree. 
	1. Counting key features: does the algorithm aggregate results? 
	2. Searching key features: terminates as soon the value is found. 
10. 
```
public int findDepth(TreeNode root, int target) {

	// Base case: if the node is null
	if (root == null) {
		return -1;
	}
	// Recursive case: when the target is found
	if (root.value == target) {
		return 0;
	} else {
		for (TreeNode child : node.children) {
			int childDepth = findDepth(child, target);
			if (childDepth != -1) {
				return childDepth + 1;
			}
		}
	}
	return -1;
}
```
11. 
```
public boolean contains(BSTNode root, T target) {

	if (root == null) {
		return false;
	}

	if (root.value.equals(target)) {
		return true;
	}

	if (target.compareTo(root.value) < 0) {
		return contains(root.left, target);
	} else {
		return contains(root.right, target);
	}
}
public T findMin(BSTNode root) {

	if (root == null) {
		throw new IllegalArgumentException("Tree is empty");
	}

	BSTNode current = root;
	while (current.left != null) {
		current = current.left;
	}
	return current.value;
}

public T largestBelow(BSTNode root, T limit) {

	if (root == null) {
		return null;
	}

	if (root.value.compareTo(limit) >= 0) {
	// If the root is larger or equal to the limit, traverse the left tree.
		return largestBelow(root.left, limit); 
	} else {
	// If the value is less than the limit, traverse the right to find the largest value below the limit.
		T result = largestBelow(root.right, limit);
		if (result == null) {
			return root.value;
		} else {
			return result;
		}
	}
}
```
12. BST time complexity: O(size); BST space complexity: O(height)
#### Loop Invariants and searching
##### List of topics
1. [x] From memory, state the “loop checklist” aka “the four loopy questions.” In your own words, explain what each question means.
2. [x] Given a range notation, state the numbers contained in the sequence it identifies. Examples: [1..5], (1..5), a[..5), a[1..]. In the latter examples, a is an array.
3. [x] Given an array diagram, and an index, state what properties must hold of the array element at that index according to the diagram.
4. [x] Given a precondition and postcondition, and an English description of the intuition for a loop-based algorithm, state a loop invariant that would correctly implement the algorithm. Example: precondition is “array is unsorted”, postcondition is “array is sorted”, intuition is “a sorted segment of the array grows from the left to the right; an unsorted segment of the array likewise shrinks from the left to the right; nothing is known about the elements in the unsorted segment.” (That is insertion sort, by the way.)
5. [x] Continuing the above skill: also state a loop variant, that is, a function that decreases with each loop iteration and cannot decrease infinitely.
6. [x] Given some Java code for a loop, possibly with some pieces missing, draw a dot at the points where the loop invariant must hold, and where it might not.
7. [x] You are given some Java code for a loop, with some pieces missing. You are given the precondition, postcondition, loop invariant. Fill in the missing pieces to make the loop correct. Or, the loop code is complete, but the invariant is missing; state the invariant that makes the loop correct. Or, select which of several loop invariants would be correct.
8. [x] You are given the Java code for a loop, the precondition, the postcondition, and the loop invariant. Explain in your own words why the loop checklist (aka the four loopy questions) is satisfied.
	1. [x] Note that the last two skills above for loop invariants could be instantiated with a linear or binary search loop, or a tweak on one of those.
9. [x] In your own words, describe the linear and binary search algorithms.
##### Important notes
1. Four loopy questions: Does it start right? Does it maintain it? Does it end right? Is there progression? 
4. For insertion sort, we observe that at each step the array[0, i - 1] is sorted and the part from array[i, size - 1] is unsorted.  
	1. For selection sort: the array[0, i-1] contains the smallest `i` elements and the array[i, n-1] is unsorted. 
	2. For merge sort: the left and right subarrays are sorted and the merged array consists of the smallest elements in sorted order; it splits it in half 
	3. For quick sort: the array[low, i - 1] contains less than the pivot; the array[i, j] contains elements greater than or equal to the pivot; array[j + 1, high] contains elements greater than the pivot; the pivot is placed in array[j] once the partitioning is complete. 
	![[Screenshot 2024-12-10 at 2.49.12 PM.png|500]]
5. The loop variant for an insertion sort, for instance, is the number of elements left unsorted. It needs to decrease since with each iteration, `i` increases, so the number of unsorted elements decreases. The loop will terminate once `i` reaches `n` (number of elements in the array), as all elements are sorted. 
	1. For selection sort: the variant is the size of the unsorted portion; it terminates when `i` reaches `n-1` and the array is fully sorted.
	2. For merge sort: the variant is the level of recursion or the size of the subarrays being merged. In each recursive step, the size of the subarrays are being sorted in halves; we track the size of the subarrays that are being merged. It starts at 1 and double each time until it reaches the size of the entire array. It decreases with each recursive call so the recursion depth reduces and will terminate when the subarrays are reduced to a single element. 
	3. For quick sort: the variant is the size of the subarrays being sorted (the range between the low and high indices); it reduces because the pivot elements are placed in their correct positions. The range decreases in each recursive step. 
	![[Screenshot 2024-12-10 at 2.49.37 PM.png|500]]
6. Invariants should hold before the loop starts, at the beginning of the iteration, and at the end of the loop. ![[Screenshot 2024-12-10 at 2.58.25 PM.png]]
7. Ensure to check when the invariant is being held 
9. Linear search checks every element in a collection one by one until it finds the target value. Binary search ONLY WORKS ON SORTED COLLECTIONS. It divides the search range in half and eliminates half of the remaining elements at each step. 
10. 

|                  | Binary Search                           | Linear Search             |
| ---------------- | --------------------------------------- | ------------------------- |
| Time complexity  | Best: O(1)<br>Worse: O(logn); iterative | Best: O(1)<br>Worse: O(n) |
| Space complexity | Best: O(1)<br>Worse: O(logn); recursive | O(1)                      |

#### Sorting and comparisons
##### List of topics 
1. [x] Among selection sort, insertion sort, merge sort, and quicksort, identify which algorithms are stable, and explain why.
2. [x] State the best-case time complexity for insertion sort and quicksort and describe the conditions in which it is achieved.
3. [x] State the worst-case time complexity for selection sort, insertion sort, merge sort, and quicksort.
4. [x] State the best-case space complexity for selection sort, insertion sort, merge sort, and quicksort.
5. [x] Given some properties about an array to be sorted, along with performance constraints, select the most appropriate sorting algorithm. Example: which algorithm would be preferred if it is known that only a couple of elements are out of order?
6. [x] Given a loop invariant in array range or array diagram notation, state whether it is consistent with the outer loop of selection sort, the outer loop of insertion sort, an insertion procedure for insertion sort, or a partitioning algorithm for quicksort.
7. [x] Implement selection sort, insertion sort, and a partition procedure for quicksort, given relevant loop invariants. Values may be primitive types or subtypes of `Comparable`, or a `Comparator` may be provided.
8. [x] Implement merge sort and quicksort, given the specifications for “merge” and “partition” methods (which you do not need to implement).
9. [x] Given a class with two fields, implement the `Comparable` interface for it so that instances are ordered first by one field, then, in the case of a tie, by the other field.
10. [x] Given a class with two observers, declare and implement a `Comparator` that orders instances of the class first by one observable, then, in the case of a tie, by the other.
##### Important notes
2. Insertion sort best time: O(n); when the collection is already sorted. Quick sort best time: O(nlogn); when the recursive calls to the partitions are just bisecting 
3. Worst cases are O(n^2), O(n^2), O(nlogn), O(n^2), respectively. 
4. Best cases are O(n^2), O(n), O(nlogn), O(nlogn), respectively.
5. Insertion sorts 
7. 
```
   import java.util.Comparator;

public class SortAlgorithms {

    // Selection Sort implementation
    public static <T> void selectionSort(T[] arr, Comparator<? super T> comparator) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (comparator.compare(arr[j], arr[minIndex]) < 0) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                T temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }

    public static <T extends Comparable<? super T>> void selectionSort(T[] arr) {
        selectionSort(arr, Comparator.naturalOrder());
    }

    // Insertion Sort implementation
    public static <T> void insertionSort(T[] arr, Comparator<? super T> comparator) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            T key = arr[i];
            int j = i - 1;
            while (j >= 0 && comparator.compare(arr[j], key) > 0) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key;
        }
    }

    public static <T extends Comparable<? super T>> void insertionSort(T[] arr) {
        insertionSort(arr, Comparator.naturalOrder());
    }

    // Partition procedure for Quick Sort
    public static <T> int partition(T[] arr, int low, int high, Comparator<? super T> comparator) {
        T pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (comparator.compare(arr[j], pivot) <= 0) {
                i++;
                T temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        T temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }

    public static <

```
8. Use recursion in both the merge sort and quick sort methods. 
9. Comparable is the interface with the `a.compareTo(b)` method. Comparator is the class with the `compare(a, b)` method 
#### Dictionaries and hashing 
##### List of topics
1. [x] Given an “entry” class, implement a dictionary’s “put” and “get” operations using a binary search tree data structure.
2. [x] State the worst-case time complexity of a dictionary’s “put” and “get” operations if entries are stored in a sorted or unsorted list.
3. [x] Evaluate a proposed `hashCode()` method in terms of collision avoidance and consistency with `equals()`.
4. [x] Given a key’s hash code and the length of a hash table array, state which element of the array the key should be stored under if indices are derived by taking the positive remainder mod the table length.
5. [x] Given a key’s hash code and the contents of a hash table array, state which element an entry with that key would be stored in if linear probing is used to resolve collisions.
6. [x] Given the contents of the buckets of a hash table using chaining and the hash codes of all keys stored in it, draw the table and its buckets’ contents after the table is resized to a given new size, assuming indices are derived by taking the positive remainder mod the table length.
7. [x] Given the contents of a hash table, compute its load factor.
8. [x] Given the load factor of a hash table using chaining, state the expected number of comparisons needed to search for a random key.
##### Important notes
1. Recursion for both methods 
2. `put()` best would be O(1) and worse would be O(n); `get()` would be O(n) regardless.
3. `hashCode()`and `equal()` should be modified the same time to prevent collisions. 
5. Linear probing: if the index calculated is taken, place the element in the next available index in the table. 
7. Load factor: # keys / # buckets (dependent on the table's current state)
8. Expected # of comparisons would be (1 + load factor)/2 
#### GUI
##### List of topics
1. [x] Given an interface, state whether a lambda expression could be used to provide that interface. Example: `ActionListener`, which declares one abstract method named `actionPerformed()`.
2. [x] Write a JUnit assertion to check that a given expression results in an exception being thrown.
3. [x] Write a lambda expression to be passed as an argument to a method expecting a functional interface. Examples: write an expression for an `ActionListener` to print a message when a button is pressed; write an expression for a `Comparator` to order students by age when sorting them.
4. [x] Match a picture of a standard GUI widget to its name. Widgets could include labels, buttons, text fields, sliders, radio buttons, progress bars, and scroll bars.
5. [x] Given a picture of a window containing bordered panels and standard widgets, sketch a hierarchy of how the components could be contained within one another (the frame will be at the root).
6. [x] Given a sketch of a GUI with labels indicating variable names that reference each widget, write the code to cause a component to react in a specified way. For example, make a button change the text of a label when clicked. A sufficient subset of the Swing API will be provided for reference.
7. [x] Given a snippet of Swing code that registers an event listener, identify the the event source, the event object, and the listener.
8. [x] Given a desired outcome (example: notify Swing that a component’s appearance needs to change), circle which painting-related method (e.g. `repaint()`, `paintComponent()`) should be called or overridden.
##### Important notes
2. Example: `assertThrows(ArithmeticException.class, ()-> {calculator.divide(10/0)})`
3. 
```
// With the ActionListener 
button.addActionListener(e -> System.out.println("Pressed"));

// With Comparator (compare() method)
(Student1, Student2) -> Integer.compare(Student1.age, Student2.age);
```
- Curly brackets are only used if there are multiple lines of logic in the lambda expression 
5. Frame --> Panel --> everything else 
6. 
```
button.addActionListener(e -> label.setText("Changed text!"));
```
7. Event source: the component that generates the event; Event Object: the object that holds the information about the event; Listener: the object that listens and reacts to the event. 
8. `repaint()`; doesn't immediately paint. It schedules a paint request. `paintComponent(Graphics g)` is used to customize a component to paint (usually is overriden); `paint()` is not recommended. 
#### Concurrency 
##### List of topics
1. [x] Given two sequences of instructions (in pseudocode or Java) that are executed concurrently and require exclusive access to one or more shared resources, state whether deadlock is possible. If so, propose an alteration to one of the sequences that eliminates this possibility while preserving the desired behavior of the original instructions.
2. [x] Given two or more sequences of Java statements that are executed concurrently and that access shared objects, state whether a race condition may be encountered, and what class invariants might be invalidated because of the race condition. Or, add synchronization to the code to prevent race conditions.
3. [x] Given two sequences of Java statements that are executed concurrently and that increment a shared `int` variable with or without synchronization, state which numbers are possible final values for the variable after both sequences have completed execution.
4. [x] Given the implementation of a method that employs synchronization, state which object is serving as the mutex.
5. [x] Given the implementation of a method that employs synchronization, circle which statements could cause a thread to block, and for each such statement, describe what another thread could do to cause the first thread to become unblocked.
6. [x] Given an abbreviated reference for the API of Java’s `Thread` class, write code to execute a function on a new thread.
7. [x] Given a sequence of addition and removal operations made to a circular buffer with a specified capacity, draw the contents of its backing array after those operations have completed.
8. [x] Given a specification for the desired behavior of a class, and a partial implementation of the class, add code that uses condition variables (i.e., `wait` and `notifyAll`) to complete the implementation. The code you add causes threads to correctly synchronize by making some threads block and wait for others. Example: `Barrier` from DIS.
##### Important notes
1. 
   ![[Screenshot 2024-12-10 at 8.49.48 PM.png|500]]
   There is deadlock here when Process 1 uses F1 but Process 2 tries to acquire F1. To fix this, we should swap the first two statements in Process 2. 
2. Deadlock is when two threads are waiting on each other (circular), but race condition is when multiple threads are sharing the same resource (synchronization).  
	1. fix deadlocks by making sure locks are acquired at the same time
	2. fix race conditions by synchronizing with `synchronized` or locks 
4. the mutex for instance methods is the instance of the object itself (`this`). The mutex for static methods is the class object itself. The mutex for synchronized blocks is the object passed into the block's parameter.
5. ![[Screenshot 2024-12-10 at 9.18.35 PM.png]]
6. Use a `Runnable` object, pass it inside the `Thread` object, and then `start()` the thread. Or use a lambda expression `new Thread(() -> executeFunction().start())`
7. Circular buffers: 
	1. `add()` adds an element to the index pointed to by the tail: `tail = (tail + 1) % capacity`
	2. `remove()` removes the element at the index pointed to by the head: `head = (head + 1) % capacity`
	3. ![[Screenshot 2024-12-10 at 9.31.47 PM.png]]
8. Use `wait()` until the condition is fulfilled, and `notifyAll()` otherwise. `synchronized` the method. 
	1. only use `notifyAll()` if there are more than one thread trying to complete a task
		1. use `notify()` if you want to wake up one thread. 
#### Graphs
##### List of topics
1. [x] Given a drawing of a graph, perform the following tasks:
    1. [x] Write the set of vertices, write the set of edges, state whether the graph is directed or undirected. Or vice-versa, given the vertex and edge sets, draw the graph, and state whether it is directed or undirected.
    1. [x] State whether a given sequence of vertices is a legal path in the graph. Or, write down all the paths in the (small) graph, and their lengths.
    1. [x] Redraw the graph, which now must be undirected, as a directed graph with the same set of vertices and paths.
    1. [x] State the length and/or weight of a given path in the graph.
    1. [x] Circle which of several adjacency list representations corresponds to the drawing. Or vice-versa, given a representation, draw the graph, or circle which drawing is correct. Likewise, do the same for adjacency matrix representations.
2. [x] Given a representation (adjacency list or matrix), perform the following tasks:
    1. [x] State in Big Oh notation the space requirements to store a graph using that representation, based on the number of vertices and edges.
    1. [x] State the time and/or space complexity of an operation on the graph based on an English description of the operation, or on Java (pseudo)code implementing the operation. The operation might be one we studied, or it might be new. Your answer must be in the form of a Big Oh tightest bound.
    1. [x] Given the fields and class invariant for implementing the representation, and given a specification for an operation, write the Java code for that. The operation might be one we studied, or it might be new.
3. [x] Given some criteria—for example, about the size and density of the graph, and about which operations will be most frequent—choose the most suitable data structures to represent a graph. If an adjacency list representation is most suitable, that could include choosing data structures for the vertex set and adjacency lists.
4. [x] Given a diagram of a graph, state whether it is acyclic (no cycles). If not, trace a path that forms a cycle.
5. [x] Given a diagram of a directed acyclic graph, state a topological ordering of its vertices. Or, circle which of several sequences of vertices correspond to a topological ordering.
6. [x] Given a diagram of a graph, a starting node, and a rule for the order in which neighbors are iterated (for example, alphabetical order by vertex label), state the order in which nodes are visited during a breadth-first or depth-first traversal. Or, state the order in which nodes are settled during a depth-first traversal.
##### Important notes
2. E: edges; V: vertices 

|                                        | Adjacency List  | Adjacency Matrix |
| -------------------------------------- | --------------- | ---------------- |
| Time complexity for visiting all edges | O(\|V\|+ \|E\|) | O(\|V\|^2)       |
| Time complexity for finding an edge    | O(\|V\|+ \|E\|) | O(1)             |
| Space complexity                       | O(\|V\|+ \|E\|) | O(\|V\|^2)       |
3. Adjacency lists are represented by `List<List<Integer>>`. Adjacency matrices are represented by `boolean[][]`
```
import java.util.ArrayList;
import java.util.List;

public class Graph {
    private final int numVertices;
    private final List<List<Integer>> adjacencyList;
    private final boolean[][] adjacencyMatrix;
    private final boolean useAdjacencyList;

    /**
     * Constructor for the Graph.
     * @param numVertices Number of vertices in the graph.
     * @param useAdjacencyList Whether to use adjacency list representation.
     */
    public Graph(int numVertices, boolean useAdjacencyList) {
        this.numVertices = numVertices;
        this.useAdjacencyList = useAdjacencyList;

        if (useAdjacencyList) {
            // Initialize adjacency list
            adjacencyList = new ArrayList<>();
            for (int i = 0; i < numVertices; i++) {
                adjacencyList.add(new ArrayList<>());
            }
            adjacencyMatrix = null;
        } else {
            // Initialize adjacency matrix
            adjacencyMatrix = new boolean[numVertices][numVertices];
            adjacencyList = null;
        }

        checkInvariant();
    }

    /**
     * Class Invariant: Ensures the graph structure is valid.
     */
    private void checkInvariant() {
        if (useAdjacencyList) {
            assert adjacencyList.size() == numVertices : "Adjacency list should have a list for each vertex";
        } else {
            assert adjacencyMatrix.length == numVertices : "Adjacency matrix should match the number of vertices";
        }
    }

    /**
     * Adds an edge to the graph.
     * @param u One endpoint of the edge.
     * @param v The other endpoint of the edge.
     */
    public void addEdge(int u, int v) {
        if (useAdjacencyList) {
            adjacencyList.get(u).add(v);
            adjacencyList.get(v).add(u); // For undirected graphs
        } else {
            adjacencyMatrix[u][v] = true;
            adjacencyMatrix[v][u] = true; // For undirected graphs
        }
        checkInvariant();
    }

    /**
     * Checks if an edge exists between two nodes u and v.
     * @param u One endpoint of the edge.
     * @param v The other endpoint of the edge.
     * @return true if the edge exists; false otherwise.
     */
    public boolean edgeExists(int u, int v) {
        if (useAdjacencyList) {
            return adjacencyList.get(u).contains(v);
        } else {
            return adjacencyMatrix[u][v];
        }
    }
}
```
4. Lists are better for larger datasets and only stores existing edges. It traverses efficiently. However, lookups are slower. Matrices are easier for lookups (constant time), ideal for denser graphs, However, it has worse space complexity and less scalable. 
   ![[Screenshot 2024-12-10 at 10.07.37 PM.png]]
   
5. 
   ![[Screenshot 2024-12-10 at 10.10.04 PM.png|500]]