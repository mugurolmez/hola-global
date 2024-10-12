import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  // Redux Thunk'ı içe aktar
import rootReducer from './reducers';  // Reducer'ı içe aktar

const store = createStore(rootReducer, applyMiddleware(thunk));  // Thunk'ı store'a ekle

export default store;
