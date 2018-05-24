import React from 'react';
import { compose } from 'react-apollo';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

import TaskQuery from './Task.query.jsx';
import Task from './Task.jsx';
import state from './reducers';


const store = createStore(
  state,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const GQLComp = compose(TaskQuery)(Task);

const ConnectedQuery = connect(state => state)(GQLComp)

const TaskIndex = () => (
  <Provider store={store}>
    <ConnectedQuery/>
  </Provider>
);

export default TaskIndex;
