const { createSlice } = require('@reduxjs/toolkit')

// const initialState = [];  //sabse pehle initial state declare krnahai

export const STATUSES = Object.freeze(
    {
        IDLE: 'idle',
        ERROR: 'error',
        LOADING: 'loading'
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE, //idle,loading,error
    },
    reducers: {
        setProducts(state, action) {
            /*
            Don't do this
            const res = await fetch('https://fakestoreapi.com/products');
            
            because reducer synchronously call hoti hai
            aur yeh pure function hote hai jiske koi side effect nahi hote
            esa krne se side effect ho skta hai
             */
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    }
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;


export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE))
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}

/* 
thunks middleware hai redux ke andar
two type of thunks
thunks is like a function


export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE))
        } catch (err) {
            console.log(err);
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}
*/