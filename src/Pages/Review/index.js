import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { compose } from 'react-apollo';
import Query from './components/Query/Query.jsx';
import Review from './Review.jsx';
import state from './reducers'

const store = createStore(state);
const WrpCmp = compose(Query)(Review);

const ReviewIndex = (props) => (
    <Provider store={store}>
        <WrpCmp {...props} />
    </Provider>
);

export default ReviewIndex;
