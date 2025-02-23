![[Screenshot 2024-10-29 at 11.00.21 AM.png]]
When adding a component to a frame, we use: `frame.add()`

For instance, if we want to add a label to the frame, the syntax would be:
```
frame.add(new JLabel("Hello"), BorderLayour.NORTH)

// the BorderLayour.NORTH assigns the loction of the JLabel on the frame.
```
![[Screenshot 2024-10-29 at 11.02.08 AM.png]]

A few more common components include `JTextField, JTextArea, JButton, JCheckBox, JScrollPane`
- `JScrollPane`: constructs scroll pane around the text area, then add scroll pane to the frame 