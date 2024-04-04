import {configureStore} from '@reduxjs/toolkit';
import {rootReducers} from "@/state/rootReducer";


const store = configureStore({
    reducer: rootReducers,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
