import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice';
import { createWeatherApi } from '../weatherApi';
import { getDefaultTarget } from 'expo/config';
import { pokemonApi } from '../pokimon';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [createWeatherApi.reducerPath]: createWeatherApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(createWeatherApi.middleware)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }).concat(pokemonApi.middleware,createWeatherApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// export default store

// import { configureStore, createSlice } from '@reduxjs/toolkit'
// // ...

// export const store = configureStore({
//   reducer: {
//    counter: createSlice
//   },
// })