import { createSlice } from '@reduxjs/toolkit';

export interface productDetailsState {
  size?: string;
  color?: string;
  price: number;
  allPrices: [];
  name: string;
  brand: string;
  id: string;
  gallery: string[];
  allColors?: [];
  allSizes?: [];
  inStock: boolean;
  quantity: number;
}

const initialState: productDetailsState = {
  size: '',
  color: '',
  price: 0,
  name: '',
  brand: '',
  id: '',
  gallery: [],
  allPrices: [],
  allColors: [],
  allSizes: [],
  inStock: false,
  quantity: 1,
};

interface setColorDetails {
  payload: string;
}
interface setSizeDetails {
  payload: string;
}
interface setPriceDetails {
  payload: number;
}
interface setNameDetails {
  payload: string;
}
interface setBrandDetails {
  payload: string;
}
interface setIdDetails {
  payload: string;
}
interface setGalleryDetails {
  payload: string[];
}
interface setAllPrices {
  payload: [];
}
interface setAllColors {
  payload: [];
}
interface setAllSizes {
  payload: [];
}
interface setStock {
  payload: boolean;
}

export const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState,
  reducers: {
    setProductColor: (state: productDetailsState, action: setColorDetails) => {
      state.color = action.payload;
    },
    clearDetails: (state: productDetailsState) => {
      state = initialState;
    },
    setProductPrice: (state: productDetailsState, action: setPriceDetails) => {
      state.price = action.payload;
    },
    setProductSize: (state: productDetailsState, action: setSizeDetails) => {
      state.size = action.payload;
    },

    setProductName: (state: productDetailsState, action: setNameDetails) => {
      state.name = action.payload;
    },
    setBrandName: (state: productDetailsState, action: setBrandDetails) => {
      state.brand = action.payload;
    },
    setProductId: (state: productDetailsState, action: setIdDetails) => {
      state.id = action.payload;
    },
    setProductGallery: (
      state: productDetailsState,
      action: setGalleryDetails,
    ) => {
      state.gallery = action.payload;
    },
    setProductAllPrices: (state: productDetailsState, action: setAllPrices) => {
      state.allPrices = [...action.payload];
    },
    setProductAllColors: (state: productDetailsState, action: setAllColors) => {
      state.allColors = [...action.payload];
    },
    setProductAllSizes: (state: productDetailsState, action: setAllSizes) => {
      state.allSizes = [...action.payload];
    },
    setProductStock: (state: productDetailsState, action: setStock) => {
      state.inStock = action.payload;
    },
  },
});

export const {
  setProductColor,
  setProductSize,
  setProductPrice,
  setProductName,
  setProductId,
  setBrandName,
  setProductGallery,
  setProductAllPrices,
  setProductAllColors,
  setProductAllSizes,
  setProductStock,
  clearDetails,
} = productDetailsSlice.actions;
