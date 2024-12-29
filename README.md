# Infinite Loop in React useEffect Hook

This repository demonstrates a common error in React applications: an infinite loop caused by improperly using the `useEffect` hook.  The `useEffect` hook in `bug.js` attempts to update the state within the effect itself, creating a continuous loop of renders and state updates. This example showcases the problem and its solution using `useRef`. 