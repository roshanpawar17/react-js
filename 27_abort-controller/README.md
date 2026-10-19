#### AbortController in JavaScript

> AbortController is a built-in JavaScript API that allows you to cancel an ongoing operation, such as an HTTP request made using fetch().

> In simple words, imagine you start downloading data from an API, but you no longer need that data. You can use AbortController to cancel the request instead of waiting for it to finish.

1) Why do we need AbortController?

-> Suppose you search for users in a React application.

1. You type R.
2. An API request starts.
3. You quickly type Ro.
4. Another API request starts.
5. The first request is still running, even though you no longer need its result.

- AbortController lets you cancel the first request when the second one makes it unnecessary.

-----

2) Basic example

const controller = new AbortController();

fetch("https://jsonplaceholder.typicode.com/users", {
  signal: controller.signal,
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Request was cancelled");
    } else {
      console.error(error);
    }
  });

// Cancel the request
controller.abort();

=> Let's understand the important parts.

1. Creates an AbortController instance.

const controller = new AbortController();

2. It gives you two important things:

- controller.signal — communicates the cancellation signal to an operation.
- controller.abort() — triggers cancellation.

3. Connects the fetch request to the controller.

signal: controller.signal

4. Cancels the connected fetch request if it is still in progress.

controller.abort();

5. If the request is aborted, the promise rejects with an error whose name is usually 'AbortError'.

*Important: In the example above, abort() is called immediately, so the request may be cancelled before it finishes. In a real application, you normally call it when a user action or another condition makes cancellation necessary.*

------

3) Important properties and methods

Property or method	            Purpose

1. new AbortController()	    - Creates a controller
2. controller.signal	        - Provides the cancellation signal
3. controller.abort()	        - Triggers cancellation
4. signal.aborted	            - Indicates whether the signal has been aborted
5. signal.reason	            - Gives the reason for cancellation

-> You can also provide a cancellation reason:

controller.abort("User navigated away");

console.log(controller.signal.aborted); // true
console.log(controller.signal.reason);  // "User navigated away"