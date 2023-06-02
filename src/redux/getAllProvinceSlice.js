import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";


const initialState = {
    allCity:[

    ],
    allProvinces : [],
    allKecamatan : [

    ],
    loadingProvinces:false,
    errorProvinces:''
}

export const fetchDataKecamatan = createAsyncThunk(
  "getAllProvinces/fetchDataKecamatan",
  async (initialPost) => {
    console.log(initialPost, "ini id");

    const response = await Axios.get(
      `https://cors-anywhere.herokuapp.com/https://emsifa.github.io/api-wilayah-indonesia/api/districts/${initialPost}.json`
    );

    if (response?.status === 200) return response.data;

    return `${response?.status} : ${response?.text}`;
  }
);


export const fetchDataKota = createAsyncThunk(
  "getAllProvinces/fetchDataKota",
  async (initialPost) => {
    console.log(initialPost, 'ini id');

      const config = {
        method: "get",
        url: `https://cors-anywhere.herokuapp.com/https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${initialPost}.json`,
        headers: {
          Origin: "http://corsanywhere.localhost:5177",
        },
      };

      const response = await Axios(config);
    //  const response = await Axios.get(
    //    `https://cors-anywhere.herokuapp.com/https://emsifa.github.io/api-wilayah-indonesia/api/regencies/${initialPost}.json`
    //  );

    if (response?.status === 200) return response.data;

    return `${response?.status} : ${response?.text}`;
  }
);


export const fetchData = createAsyncThunk(
  "getAllProvinces/fetchData",
  async () => {
      const config = {
        method: "get",
        url: `http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`,
        // headers: {
        //   Origin: "http://corsanywhere.localhost:5176",
        // },
      };


    // const response = await Axios.get(
    //   `https://cors-anywhere.herokuapp.com/http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`
    // );
    const response = await Axios(config);
    if (response?.status === 200) return response.data;

    return `${response?.status} : ${response?.text}`;
  }
);


const getAllProvincesSlice = createSlice({
  name: "getAllProvinces",
  initialState,
  reducers: {
    removeAllStateRegion : (state) => {
      state.allCity = [];
      state.allKecamatan = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loadingProvinces = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.allProvinces = [...action.payload];
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.erroProvinces = action.payload;
      })
      .addCase(fetchDataKota.fulfilled, (state, action) => {
        state.allCity = [...action.payload];
      })
      .addCase(fetchDataKecamatan.fulfilled, (state, action) => {
        state.allKecamatan = [...action.payload];
      });

    
  },
});


export const dataStateProvinces= (state) => state.getAllProvinces.allProvinces;
export const dataStateCity = (state) => state.getAllProvinces.allCity;
export const dataStateKecamatan = (state) => state.getAllProvinces.allKecamatan;
export const {
  removeAllStateRegion
} = getAllProvincesSlice.actions;

export default getAllProvincesSlice.reducer;