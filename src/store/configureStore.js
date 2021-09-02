import {createStore, applyMiddleware} from "redux";
import rootReducer from './reducers/root-reducer'
import {logger} from "redux-logger/src";

//redux-persist
// import {persistStore, persistReducer} from "redux-persist";
// import storage from 'redux-persist/lib/storage'
//
// const persistConfig = {
//     key: 'root',
//     storage,
// }

//const persistedReducer = persistReducer(persistConfig, rootReducer)

const storeFunction = () => {
    const store = createStore(rootReducer, applyMiddleware(logger))
    return {
        store
    }
}

export default storeFunction