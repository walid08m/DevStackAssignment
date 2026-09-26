#Dev Stack
Dev Stack is a website where we can look at different development techns like React,Vue,Svelte etc and choose the ones you want

#Technologies Used
-React.js
-Tailwind CSS
-JavaScript 
-React Toastify
-JSON
-Vite

#Features
-Can view and choose between various techs
-Can add and remove technologies in thestack
-Does work on both desktop and mobile device

#React Questions

1.What is JSX, and why is it used in React?
-JSX lets us write HTML like code inside Js.It makes writing react components easier

2.What is the difference between props and state?
-State is used to store data that can change
Props are used to send data from one component to another


3.What does the `useState` hook do, and where did you use it in this project?
- The `useState` is used to store/change data. I used it to keep track of the technologies added to the stack

4.What does the `useEffect` hook do, and why did you need it to load the JSON data?
-`useEffect` lets the web run effects when the page loads.I used it to load the technology data from the JSON file

5.Why does every item in a `.map()` list need a unique `key` prop?
-The `key` helps React know which item is which when the list changes.

6.What is conditional rendering? Show one place you used it.
-Conditional rendering means showing something based on a condition.
I used it in the Your Stack section. If the stack is empty,it shows Your stack is empty. If there are items, it shows the selected techs.

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
-A parent sends data to a child using props. The child can send something back by using a function given to it 