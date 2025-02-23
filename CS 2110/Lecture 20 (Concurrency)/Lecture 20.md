#### Warmup: Lambda Expressions

![[Screenshot 2024-11-05 at 10.12.33 AM.png]]
##### Answer Explanations

A. Is a lambda expression 
B. Is a lambda expression 
C. The static type is Comparator, however we do not know the dynamic type. The static type of the function is `int`. The Comparator is looking for a function with formal parameters, therefore, C. is a lambda expression. 
**D. It is just a function call so it returns an `int`, but it does not have parameters. Therefore, D does NOT implement `Comparator<Integer>`**
E. the syntax `::` is the shorthand way of writing a lambda expression 

#### Dialogs
##### JFileChooser
Standard dialogs for opening and saving files 
- "show" methods will block until user closes dialog 
- "modal" dialog -- cannot interact with parent frame 
- returns whether user "approved" or clicked "cancel"
- `getSelectedFile()`
##### JOptionPane
Standard dialogs for getting quick input or showing messages 
- static methods for most common dialogs 
- also modal and blocking 
#### Threads
##### Concurrent Execution 
Programs, like a computer, can perform multiple different tasks at once. These tasks are performed by "threads" and coordinated by sharing variables 
##### Division of Labor 
- Vehicle simulator 
	- during each period, autopilot and physics are independent, may execute concurrently 
##### Advantages and Disadvantages of Concurrency 
| Advantages                                                             | Disadvantages               |
| ---------------------------------------------------------------------- | --------------------------- |
| More responsive. It separates interactive code from long calculations. | New kings of bugs           |
| Higher performance                                                     | Difficult to test and debug |
#### Computer Structure 
##### Memory (RAM)
- different programs are not allowed to see each other's memory 
- different threads in the same program can all access that program's memory 
##### CPU Cores 
- each core works on one sequence of instructions at a time 
##### Threads of execution 
- a thread encapsulates work to be performed by a CPU core 
	- sequence of instructions 
	- stack of call frames 
- each program starts with one thread running `main()`
	- bottom frame on stack 
	- arguments are the program arguments 
- additional threads can start running any function 
	- can be given references to existing objects when created 
	- objects are now shared between threads  
###### Example: 
Main thread would create the String object, create the object that represents a task (define using a lambda expression), create an start helper thread, do own work, and then wait for helper to finish. 

The Helper thread would create a new call stack, starting with a given task, and execute the given task. 
#### Java Thread API 
##### Abstractions 
- A thread is an abstraction for a sequence of instructions 
	- to realize a thread on a computer requires low-level interaction with OS 
	- job of OS scheduler is to execute instructions on a CPU core 
- A Java thread is an object to manage threads of execution at a high level 

![[Screenshot 2024-11-05 at 10.51.52 AM.png]]
##### Starting and stopping threads 
- Constructing a thread does not start it running; must call `start()`
	- start() returns immediately, so calling thread can proceed with other work 
- When `run()` returns, thread stops 
	- if run() throws an uncaught exception, thread stops 
	- no return value, no one is notified 
	- other threads can wait for it to stop by calling `join()` on Thread object 
		- join() is a blocking method 
- When all threads stop, program exits
##### Waiting for things to happen 
Waiting for time to pass, we can use this static method: `Thread.sleep()`
- stops executing code for a specified amount of time 

Waiting for other code to do something, we use: `Object.wait()`
- stops executing code, and release locks, until notified by another thread 

Both throws an `InterruptedException`
#### Event Dispatch Thread (EDT)
- in general, it is not safe for two threads to access the same object at the same time 
- This is why we use thread confinement, which can only be accessed by the EDT 

![[Screenshot 2024-11-05 at 11.05.10 AM.png]]

1. Yes because it includes an event handler 
2. No because it does not interact with any event objects 
3. No because we are not interacting with any swing widgets/objects 
4. Yes because we are updating a swing object/widget 
5. Yes because we are updating a swing object/widget 
#### Race Conditions 
##### Shared mutable state 
When a (mutable) object is shared between threads, its state may change unexpectedly. The sequential logic no longer guarantees correctness 
- invariants can be violated by someone else's actions 
#### Coordinating multiple threads 
- easy to give data to a thread when it is created. It's safe for multiple threads to read the same immutable data 
- to get data back from a thread, we need to share mutable data 
	- **safe if only one thread can possibly use it at a time**        
##### New implicit precondition 
Unless otherwise specified, a method on an object may only be called if no other thread is currently executing a method of that same object 
- assumes thread-unsafe by default 