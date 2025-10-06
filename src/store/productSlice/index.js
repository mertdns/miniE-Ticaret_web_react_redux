import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  selectedProduct:[]
}

export const GetAllProducts = createAsyncThunk("GetAllProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
});

export const GetSelectedProduct = createAsyncThunk("GetSelectedProduct", async(id) => {
    const response = await fetch("https://fakestoreapi.com/products/" + id);
    const data = response.json()
    return data;
})

export const productSlice = createSlice({
    name : "productSlice",
    initialState,
    reducers:{
        clearSelectedProduct: (state) => {
            state.selectedProduct = [];
        }
    },
    extraReducers:(builder) => {
        builder.addCase(GetAllProducts.fulfilled, (state , action) => {
            state.allProducts = action.payload;
        })
        builder.addCase(GetSelectedProduct.fulfilled, (state , action) => {
            state.selectedProduct = action.payload;
        })
    }
});

export const { clearSelectedProduct } = productSlice.actions

export default productSlice.reducer