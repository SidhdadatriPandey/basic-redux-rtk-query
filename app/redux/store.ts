import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './features/counterSlice';
import { createWeatherApi } from './weatherApi';
import { getDefaultTarget } from 'expo/config';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [createWeatherApi.reducerPath]: createWeatherApi.reducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(createWeatherApi.middleware)
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