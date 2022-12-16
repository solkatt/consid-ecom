import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 0,
	cartItems: [],
	cartTotalAmount: 0,
	drawerOpen: false,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const itemInCart = state.cartItems.find(
				(item) => item.id === action.payload.id
			)
			if (itemInCart) itemInCart.quantity++
			else state.cartItems.push({ ...action.payload, quantity: 1 })
		},
		removeFromCart: (state, action) => {
			const removeItem = state.cartItems.filter(
				(item) => item.id !== action.payload.id
			)
			state.cartItems = removeItem
		},
		clearCart: (state) => {
			state.cartItems = []
		},
	},
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export const selectValue = (state) => state.cart.value
export const selectCartItems = (state) => state.cart.cartItems

export default cartSlice.reducer
