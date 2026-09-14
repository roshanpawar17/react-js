## How to install react.js using vite?

### Full Installation:

#### Step 1: Create a React + Vite project

1. npm create vite@latest <my-react-app-name>

2. Vite will ask you:

◇ Select a framework:
  React

◇ Select a variant:
  JavaScript / TypeScript

#### Step 2: Go into the project

cd <my-react-app-name>

#### Step 3: Install dependencies

npm install

#### Step 4: Start the development server

npm run dev


**---------------------**


### Quick Installation:

#### For React + JavaScript:

1. npm create vite@latest <my-react-app-name> -- --template react
2. cd <my-react-app-name>
3. npm install
4. npm run dev

#### For React + TypeScript:

1. npm create vite@latest <my-react-app-name> -- --template react-ts
2. cd <my-react-app-name>
3. npm install
4. npm run dev


**---------------------------------------------------------------------**

## Most important JSX rules to remember

1. Return one parent

<>
  ...
</>

 2. JavaScript goes inside {}

<h1>{name}</h1>

3. Use className

<div className="container">

4. Events use camelCase

<button onClick={handleClick}>

5. Close all tags

<img src="..." />
<input />

6. Components start with uppercase

<User />

7. Lists need keys

{users.map(user => <li key={user.id}>{user.name}</li>)}


**---------------------------------------------------------------------**

## Components

### 05_fragment:

1. In React, Fragments let you group multiple JSX elements without adding an extra DOM element.
2. React components need to return elements in a valid structure. Instead of adding an unnecessary wrapper:


**---------------------**


### 06_map-method:

1. In React, JavaScript's map() method is commonly used to render a list of items dynamically.
2. When rendering lists, React expects a key:

The key helps React identify which items were added, removed, or changed.


**---------------------**

### 07_conditional-rendering:

#### Logical Operator:

{condition && <Component />}

1. If condition is true → component is displayed.
2. If condition is false → nothing is displayed.


**---------------------**

### 08_props:

1. In React, props (short for properties) are used to pass data from a parent component to a child component.
2. Props can contain many kinds of JavaScript values:

<User
  name="Alex"                 // string
  age={25}                    // number
  isAdmin={true}              // boolean
  hobbies={["Coding", "Gym"]} // array
  user={{ id: 1, name: "Alex" }} // object
  onClick={handleClick}       // function
/>

3. Pass props as attribute and received as argument.

4. The key idea is:

Parent → props → Child

**---------------------**

### 08_module-css:

1. CSS Modules is a way to write CSS where class names are automatically scoped to a specific component.
2. Why use CSS Modules?

* Without CSS Modules:

  /* Header.css */
  .title {
    color: red;
  }

* Another component could also have:

  /* Dashboard.css */
  .title {
    color: blue;
  }

-> Both .title classes can conflict because they are global.
-> With CSS Modules:

className={styles.title}

-> React/Vite generates a unique class name internally, something like:

title_abc123

-> So the styles remain isolated.

3. The important naming convention is:

ComponentName.module.css