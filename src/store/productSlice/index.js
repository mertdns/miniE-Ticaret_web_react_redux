import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [],
    selectedProduct: [],
    isLoading: false,
    ProductCount: 0,
    basketProductsCount: 0,
    basket: []
}

export const GetAllProducts = createAsyncThunk("GetAllProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
});

export const GetSelectedProduct = createAsyncThunk("GetSelectedProduct", async (id) => {
    const response = await fetch("https://fakestoreapi.com/products/" + id);
    const data = await response.json();
    return data;
})

export const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        clearSelectedProduct: (state) => {
            state.selectedProduct = [];
        },
        incrementBasketProductCount: (state) => {
            state.ProductCount += 1;
        },
        decrementBasketProductCount: (state) => {
            if (state.ProductCount > 0) {
                state.ProductCount -= 1;
            }
        },
        addToBasket: (state, action) => {
            const product = state.basket.find(p => p.id === action.payload.id);//state ten referans alır burası değişirse state deki değerde değişir.
            if (action.payload.count > 0) {
                if (product) {
                    product.count += action.payload.count;
                }
                else {
                    state.basket.push(action.payload);
                }
            }
        },
        getAllProductsCount: (state) => {
            let total = 0;
            state.basketProductsCount = 0;
            state.basket.forEach(product => {
                total += product.count;
            })
            state.basketProductsCount = total;
            
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetAllProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
            state.isLoading = false;
        })
        builder.addCase(GetAllProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(GetSelectedProduct.fulfilled, (state, action) => {
            state.selectedProduct = action.payload;
            state.isLoading = false;
        })
        builder.addCase(GetSelectedProduct.pending, (state) => {
            state.isLoading = true;
        })
    }
});

export const { clearSelectedProduct, incrementBasketProductCount, getAllProductsCount, addToBasket, decrementBasketProductCount } = productSlice.actions

export default productSlice.reducer