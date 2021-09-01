import {createStore} from "redux";
import rootReducer from './reducers/root-reducer'

//redux-persist
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const storeFunction = () => {
    const store = createStore(rootReducer)
    return {
        store
    }
}

export default storeFunction