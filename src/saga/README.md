# Explain Redux Saga

[Redux Saga](https://github.com/redux-saga/redux-saga) is a package that uses

- [ES6 generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators), and
- [Redux](https://github.com/reactjs/redux)

to create action pipelines.

With Redux Saga, one action dispatched via classic Redux store can cause a pipeline of actions, performed in synchronized manner using generators. In this example, dispatching a "CLASSIC_REDUX_ACTION" causes a saga to dispatch five more "REDUX_SAGA_ACTION" actions in response. This is the first step to understanding how they work.

To try this example, simply run it:

```bash
node ./src/index.js
```

or, use it in REPL!

```bash
node
> store = require('./src/index');
```

and use `store` as you could a normal Redux store.
