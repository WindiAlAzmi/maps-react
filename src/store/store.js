import { configureStore } from "@reduxjs/toolkit";
import getAllProvinceSlice from "../redux/getAllProvinceSlice";
import getAddressSlice from "../redux/getAddressSlice";
import getWishlistSlice from "../redux/getWishlistSlice";


export const store = configureStore({
  reducer: {
    getAllProvinces:getAllProvinceSlice,
    getAddress:getAddressSlice,
    getWishlist : getWishlistSlice
  },
});
