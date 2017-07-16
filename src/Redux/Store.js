import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AsyncStorage } from 'react-native';
import { autoRehydrate, persistStore } from 'redux-persist';
import logger from 'redux-logger';

import Redux from '/src/Redux';
import RootSaga from '/src/Redux/Sagas';


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

const store = createStore(
    Redux,
    undefined,
    compose(
        applyMiddleware(...middleware),
        autoRehydrate()
    )
);

sagaMiddleware.run(RootSaga);

persistStore(store, { storage: AsyncStorage });

export default store;
