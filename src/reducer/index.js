const assign = (previous, next) => Object.assign({}, previous, next);

module.exports = (state = {}, action) => {
  console.log('RUN: the reducer function is called with action of type:', action.type);

  switch (action.type) {
    case 'CLASSIC_REDUX_ACTION': {
      return assign(state, {
        classicReduxActionDispatched: (state.classicReduxActionDispatched || 0) + 1,
      });
    }

    case 'REDUX_SAGA_ACTION': {
      return assign(state, {
        reduxSagaActionDispatched: (state.reduxSagaActionDispatched || 0) + 1,
      });
    }

    default: {
      return state;
    }
  }
};
