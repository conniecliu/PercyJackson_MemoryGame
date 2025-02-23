#### Where do inputs come from, where do outputs go?
##### Batch application
- Input: command-line arguments, files 
- output: files 
##### Interactive command-line application
- Input: user typing (`System.in`)
- Output: console (`System.out`)
##### Graphical User Interface (GUI)
- Input: mouse, keyboard, gamepad 
- Output: formatted text, images, animations 
- Fundamentals: **W**(Window) **I**(Icons) **M**(Menus) **P**(Pointer)
#### Separation of concerns 
##### Model
- Represents the applicate state 
##### View 
- Displays model to users 
	- Multiple view could show the same model state 
##### Controller 
- Responds to events 
- Can mutate model or rearrange view 
#### Java GUI Frameworks
The principles apply to any GUI technology, including the web (HTML/CSS/JS)
##### AWT (Abstract Window Toolkit)
- used "native" (OS-specific) GUI elements, but only lowest-common-denominator of features supported y all platforms 
##### JFC/Swing (1998)
- Drawing and events all handed by Java ("lightweight")
- Builds on AWT abstractions 
##### SWT (2003)
- Invented for Eclipse 
- Uses native widgets but more features than AWT
##### JavaFX (2008)
- Modern alternative to Swing, leverages web technologies 
- Not included with Java by default 
#### Java Swing Syntax/Functions
##### Making windows
```
javax.swing.JFrame
```
This is the primary application window and has many properties with getters and setters. 

Note: Methods of Swing components are `public`
- This means poor encapsulation, but convenient for prototypes 
###### Steps: 
1. Make a frame
2. Set its title 
3. Specify what happens when close button is clicked 
4. [[Add content ]]
5. Determine optimal size 
6. Make visible 
##### Component Hierarchy 
GUIs are built from component objects with a tree structure. The root of the tree is `JFrame`
- A `JComponent` object has its data. They extend `Container` which declares `getComponents(): Components[]`
	- In Swing, the dynamic type of these components would be `JComponent`
	- Children are ordered

`JFrame` is NOT a child of `JComponent` since it is the root of the tree. It instead comes from `JPanel`
- `JPanels`are good for adding borders, grouping widgets, and a good base class for custom components 
- [Layout Managers](https://docs.oracle.com/javase/tutorial/uiswing/layout/visual.html)
#### Responding to Events 
##### GUI Logic
Interactivity requires new programming techniques 
- reactive, event-driven programs; inversion of control 
	- code is executed in response to mouse clicks, keyboard input, etc. 
	- involves multiple **threads** of execution 
	- can perform background calculation while updating animation 
##### Listeners 
When an event occurs, the source of the events notifies registered listeners 
- it is an object with a method appropriate for responding to the event 
- listeners must be registered with event sources (added to their list of listeners), often separately for each event type 

![[Screenshot 2024-10-31 at 10.24.32 AM.png]]
##### Action Events
- Buttons and menu items trigger `ActionEvents` when selected 
- Anything that implements the interface `ActionListener`, will be able to access the ActionEvent itself with the `actionPerformed()` method 
- The same thing for `JButton`
##### Inversion of control 
- Client writes a function to respond to an event, but they don't do it themselves 
	- To give someone else a function that they can call later, give them an object that's guaranteed to have a function with a particular signature 
		- make an interface 
- **Executable**: an interface with only one method of `execute()`
	- used to throw exceptions 
#### Lambda expressions (Anonymous Functions)
##### Syntax:
```
(params) -> {
	body; 
}

// example 
(ActionEvent e) -> {
	print("Action handled");
}
```

Lambda expressions can capture local variables. **If an interface only declares a single method, then a lambda expression can be used wherever that interface is expected.** 
##### Functional interfaces
![[Screenshot 2024-10-31 at 10.49.20 AM.png]]
##### Lambda expressions as listeners 
- Since `ActionListener` is an interface with only one method, it can use a lambda expression 
- However, some listener interfaces have multiple abstract methods and thus cannot used lambda expressions 

![[Screenshot 2024-10-31 at 10.55.48 AM.png]]
##### Inversion of control, under the hood 
- Hollywood principle: "Don't call us; we'll cal you"
	- user and environment dictate when things happen 
- Single-threaded, but not the "main" thread 
	- event loop: waits for events to happen, then executes code in response 
	- avoid race conditions by queueing events to do your work: 
		- `SwingUtilities.invokeLater()`
- When does program exit?
	- `main()` must return, all windows are disposed, and nothing is generating events in the background 
	- OR call `System.exit(0)` but it is NOT nice to your code so try not to use it 
#### Custom Painting 
##### Custom components 
- Extend `JComponent` 
- `Override paintComponent(Graphics G)`
- Attach event listeners 
##### Clarifying paint methods 
- `repaint()`: Request that this component be redrawn at the next opportunity 
	- Most of your GUI code runs in event handlers (you are not in control)
	- multiple events might necessitate repainting before the next screen refresh 
- `paint()`: "Event handler" for "it's time to draw yourself" events 
	- declared in `java.awt.Component`
	- Overriden by JComponent 
##### Drawing with a `Graphics` object 
- set color first, then draw it 
- Useful methods include `setColor(), fillRect(), fillOval(), drawLine(), setFont(), drawString()`
- Coordinates: 
	- (0,0) is upper-left corner 
	- +y means down 
	- integers: gridlines between pixels  
	- "draw": pixel southeast of grid-point  
