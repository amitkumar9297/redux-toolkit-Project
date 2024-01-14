const { createSlice } = require('@reduxjs/toolkit')

// const initialState = [];  //sabse pehle initial state declare krnahai

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            //in previous version of redux we cann't directly mutate the state, so we return a new state . but in latest version of redux we directly mutate the state because its a createSlice feature. bydesfault ceate slice do same thing as previous version of react
            // create slice is a method of reduxjs/toolkit
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;