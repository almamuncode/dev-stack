
<!-- Dev Stack -->

Dev Stack is a modern and responsive web application that helps developers explore popular technologies and build their ideal development stack.

Choose technologies from different categories, compare your options, and create a personalized stack for your next project.

---

<!-- Technologies Used -->

React
TypeScript
Tailwind CSS
daisyUI
Vite
React Toastify
React Icons

---

<!-- Features -->

Explore Technologies

Browse a curated collection of frontend, backend, database, programming language, styling, and development tools.

Each technology includes useful information such as:

* Technology name
* Category
* Description
* Rating
* Difficulty level
* Technology badge

<!-- Build Your Stack -->

Add technologies to Your Stack and create a personalized development stack for your next project.

* Add technologies with one click
* Prevent duplicate selections
* Remove individual technologies
* Remove all selected technologies
* Visual feedback when a technology is added

<!-- Responsive Modern UI -->

Dev Stack is designed to provide a clean experience across different screen sizes.

* Responsive navigation
* Mobile-friendly layout
* Modern glass-style navbar
* Responsive technology cards
* Clean developer-focused interface
* Light theme with a vibrant brand gradient


<!-- Design -->

Dev Stack uses a modern developer-focused visual style with a vibrant gradient brand identity:

<!-- Orange → Pink → Purple -->

The interface focuses on readability, simplicity, and a clean workflow for discovering and organizing technologies.


<!-- Project Structure -->

public/
├── data.json
src/
├── assets/
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Technologies.tsx
│   ├── Technology.tsx
│   └── YourStack.tsx
├── data/
│   └── technologies.json
├── types/
│   └── types.ts
├── App.tsx
├── index.css
└── main.tsx


<!-- Getting Started -->

Clone the repository:

```bash
git clone https://github.com/almamuncode/dev-stack.git
```

Navigate to the project:

```bash
cd dev-stack
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev


# Questions Answers:
# What is JSX, and why is it used in React?
JSX means JavaScript XML. It allows us to write HTML-like code inside JavaScript.
----

# What is the difference between props and state?
Props are used to pass data from a parent component to a child component.
State is used to store and manage data inside a component that can change.
----

# What does the useState hook do, and where did you use it in this project?
useState is used to create and manage changing data in a React component.
In my project, I used it in Technologies.tsx to store the technologies selected by the user.
----

# What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect is used to perform side effects in a React component, such as fetching data.
I can use it to load the technology data from my JSON file when the component loads.
It helps me fetch the data and then store it in state so I can display the technologies.
----

# Why does every item in a .map() list need a unique key prop?
React needs a unique key to identify each item in a list.
----

# What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means showing different UI depending on a condition.

In my project, I used it in YourStack.tsx.
If there are no selected technologies, I show:

{selectedTechs.length === 0 ? (
    <p>Your Stack is empty</p>
) : (
    // Show selected technologies
)}
----

# How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
We pass data from parent to child using props.
A child can send something back to the parent by calling a function passed through props.

