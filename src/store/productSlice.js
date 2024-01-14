const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

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
        // setProducts(state, action) {
        //     /*
        //     Don't do this
        //     const res = await fetch('https://fakestoreapi.com/products');

        //     because reducer synchronously call hoti hai
        //     aur yeh pure function hote hai jiske koi side effect nahi hote
        //     esa krne se side effect ho skta hai
        //      */
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = STATUSES.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
    }
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;


export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data
})

// createAsyncThunk create to better error handling



// THUNKS


// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProducts(data));
//             dispatch(setStatus(STATUSES.IDLE))
//         } catch (err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }

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