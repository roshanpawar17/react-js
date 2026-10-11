### Context API

> The Context API in React helps you share data between multiple components without passing props manually through every component.

#### How does Context API work?

1. Create Context
Define the shared data channel using createContext().

2. Create a Provider
Use a Provider to supply the current value to child components.

3. Consume Context
Read shared data and actions using useContext().

#### The three important React APIs are:

API	                     Purpose

1. createContext()	 -   Creates a Context object.
2. Provider	         -   Makes a value available to descendant components.
3. useContext()	     -   Reads the nearest matching Provider's value.