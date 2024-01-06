import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from './Slices/CartSlice'
// import CounterSlice from './Slices/CounterSlice'

export const store = configureStore({
  reducer: {
    // counter: CounterSlice
    cart:CartSlice.reducer

  },
})