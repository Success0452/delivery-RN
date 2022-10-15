import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  restuarant: {
    id: null,
    imgUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    long: null, 
    lat: null
  },
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestuarant: (state, action) => {
      state.restuarant = action.payload;
    }
  },
})

export const { setRestuarant } = restaurantSlice.actions;

export const selectRestuarant = (state) => state.restuarant.restuarant;

export default restaurantSlice.reducer