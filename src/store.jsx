import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import registerReducer from './registerSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        register: registerReducer,
    },
});

export default store;