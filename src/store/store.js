import { configureStore } from "@reduxjs/toolkit";
import getAllProvinceSlice from "../redux/getAllProvinceSlice";
import getAddressSlice from "../redux/getAddressSlice";


export const store = configureStore({
  reducer: {
    getAllProvinces:getAllProvinceSlice,
    getAddress:getAddressSlice
  },
});
