import { createSlice } from "@reduxjs/toolkit";
import { womenData } from "../../assets/WomenData";

const initialState = {
    data: [],
    products_data: [],
    filter_data: [],
    isError: false,
    isLoading: false,
    page: 0,
    totalProduct: 0,
    perPageData: 6,
    totalPages: 0,
    filters: [],
    filterObj: [],
    cartItems: [],
    singleProduct: {},
};

const womenSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        is_loading: (state) => {
            return {
                ...state,
                isLoading: true,
            };
        },
        get_women_products: (state) => {
            const all_data = womenData.women_products.data;

            let len = all_data.length;
            return {
                ...state,
                data: [...all_data],
                products_data: [...all_data],
                isLoading: false,
                isError: false,
                totalProduct: len,
                filters: [...womenData.women_products.filters],
                page: 1,
                totalPages: Math.ceil(len / state.perPageData),
            };
        },
        is_error: (state) => {
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        },
        upper_filter: (state, { payload }) => {
            let len = payload.length;
            return {
                ...state,
                products_data: [...payload],
                totalProduct: len,
                totalPages: Math.ceil(len / state.perPageData),
            };
        },
        update_data_with_filter: (state, { payload }) => {
            let len = payload.length;
            //   console.log(payload);
            return {
                ...state,
                products_data: [...payload],
                totalProduct: len,
                totalPages: Math.ceil(len / state.perPageData),
            };
        },
        change_variant_color: (state, { payload }) => {
            let changeData = [...state.products_data];
            changeData.map((el) => {
                return (
                    el.id === payload.id &&
                    el.variant.map((innerEl) => {
                        return innerEl.id === payload.variantID
                            ? (innerEl.status = true)
                            : (innerEl.status = false);
                    })
                );
            });
        },
        change_variant_size: (state, { payload }) => {
            let changeData = [...state.products_data];
            changeData.map((el) => {
                return (
                    el.id === payload.id &&
                    el.sizes.map((innerEl) => {
                        return innerEl.id === payload.variantID
                            ? (innerEl.status = true)
                            : (innerEl.status = false);
                    })
                );
            });
        },
        update_quantity: (state, { payload }) => {
            let changeData = [...state.products_data];
            // console.log(payload);
            changeData.map((el) => {
                return (
                    el.id === payload.id &&
                    el.variant.map((innerEl) => {
                        return innerEl.id === payload.variantID
                            ? (innerEl.quantity =
                                  innerEl.quantity - payload.quantity)
                            : innerEl.quantity;
                    })
                );
            });
        },
        update_cart_items: (state, { payload }) => {},
        change_filter: (state, { payload }) => {
            state.filters[payload].status = !state.filters[payload].status;
        },
        get_single_product: (state, { payload }) => {
            state.singleProduct = { ...payload.sProduct };
        },
        change_filter_2: (state, { payload }) => {
            const { mainIndex, primaryIndex } = payload;
            state.filters[mainIndex].options[primaryIndex].status =
                !state.filters[mainIndex].options[primaryIndex].status;
        },
    },
});

export const {
    is_loading,
    get_women_products,
    is_error,
    upper_filter,
    update_data_with_filter,
    change_variant_color,
    change_filter,
    change_filter_2,
    change_variant_size,
    update_quantity,
    update_cart_items,
    get_single_product,
} = womenSlice.actions;

export default womenSlice.reducer;
