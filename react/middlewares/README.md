originally from: git@github.com:StephenGrider

This is an example of creating a redux middleware, using something like redux thunk.

How it works:

if the incoming action payload is a promise rather than regular data, let the promise resolve, then fire the action again.
Without this, if you used something like axios to get your data, the promise it's self would be passed on as the action's payload
since the promise needs to get resolved to get to the data.

```
	> npm install
	> npm start
```
