import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    cartLoad: (cart) => {
      cart.loading = true
    },
    cartSuccess: (cart, action) => {
      cart.list = action.payload
      cart.loading = false
    },
    cartFailure: (cart, action) => {
      cart.loading = false
      cart.error = action.payload
    },
  },
})

export const {
  cartRequest,
  cartSuccess,
  cartFailure
} = slice.actions

export default slice.reducer
