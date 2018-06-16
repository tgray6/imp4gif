// import {createStore, applyMiddleware} from 'redux'

// import {impReducer} from './components/reducers/impReducer';
// import thunk from 'redux-thunk';

// export default createStore(impReducer,applyMiddleware(thunk));




import {createStore, combineReducers, applyMiddleware} from 'redux'

import {impReducer} from './components/reducers/impReducer';
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';
import {loadAuthToken} from './components/local-storage';
import {authReducer} from './components/reducers/authreducer';
import {protectedReducer} from './components/reducers/protectedReducer';
import {setAuthToken, refreshAuthToken} from './components/actions/auth';

// const reducers = {
// 	form: formReducer,
// 	auth: authReducer,
//     imp: impReducer,
//     protectedData: protectedReducer
// }

// const reducer = combineReducers(reducers);

// export default createStore(reducer, applyMiddleware(thunk));




const store = createStore(
    combineReducers({
		form: formReducer,
		auth: authReducer,
   		imp: impReducer,
    	protectedData: protectedReducer
    }),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;