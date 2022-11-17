import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  navCart:0,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      console.log(state.value);

    },
    decrement: (state) => {
      state.value -= 1;
    


    },
    dispatchtByAmount: (state, action) => {
      state.navCart = action.payload;
        console.log(state.navCart);
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, dispatchtByAmount } = CartSlice.actions

export default CartSlice.reducer