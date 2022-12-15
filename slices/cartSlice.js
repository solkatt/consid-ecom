import {
  createSlice
} from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  cartItems: [],
  cartTotalAmount: 0,
  drawerOpen: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cartItems.find((item) => item.id === action.payload.id)
      if (itemInCart) 
        itemInCart.quantity++
       else 
        state.cartItems.push({...action.payload, quantity: 1})
    },
    removeFromCart: (state, action) => {
      const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id)
      state.cartItems = removeItem;
    },
    // -------------------------------------------
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    toggleDrawer: (state) => {
      !state.drawerOpen 
    }
  },
})

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  addToCart,
  removeFromCart
} = cartSlice.actions

export const selectValue = state => state.cart.value
export const selectCartItems = state => state.cart.cartItems

export default cartSlice.reducer