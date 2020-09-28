import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppNavigation } from './src/components/AppNavigation';
import { rootReducer } from "./src/store";
import { devToolsEnhancer } from 'redux-devtools-extension';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import asyncStorage from '@react-native-community/async-storage';

const AppWrapper = () => {
    const persistConfig = {
      key: "todoList",
      storage: asyncStorage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);
    let store = createStore(persistedReducer, devToolsEnhancer());
    let persistor = persistStore(store);

  return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigation />
            </PersistGate>
        </Provider>
    )

};

export default  AppWrapper;
