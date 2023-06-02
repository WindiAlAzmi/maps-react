import { createSlice } from "@reduxjs/toolkit";

const storeProvinceInLocalStorage = (data) => {
  localStorage.setItem("province", data);
};

const storeCityInLocalStorage = (data) => {
  localStorage.setItem("city", data);
};

const storeDistrictInLocalStorage = (data) => {
  localStorage.setItem("district", data);
};

const clearLocalProvince = () => {
  localStorage.removeItem("province");
};

const clearLocalCity = () => {
  localStorage.removeItem("city");
};

const clearLocalDistrict = () => {
  localStorage.removeItem("district");
};

const initialState = {
  allForms: [
    {
      "id": 1,
      "name": "jessy",
      "telephone": "432567756",
      "district": "jatiasih",
      "city": "bekasi",
      "province": "jawa barat",
      "street": "jl perum asabri blok m26",
      "detail": "",
    },
    {
      "id": 2,
      "name": "yoona",
      "telephone": "646475",
      "district": "pondok bambu",
      "city": "jakarta timur",
      "province": "dki jakarta",
      "street": "jl pondok bambu timur 5",
      "detail": "",
    },
  ],
  oneDataAddress: [],
  province: "",
  city: "",
  district: "",
};

const getAddressSlice = createSlice({
  name: "getAddress",
  initialState,
  reducers: {
    getDataLocalAddress: (state) => {
        console.log("ini offline add address");
        let collection = JSON.parse(localStorage.getItem("userForms"));
        if(collection){
          state.allForms = collection;
          console.log(state.allForms, "ini all forms");
        }else{
          console.log('gagal');
        }
    },
    addAddress: (state, action) => {
      // state.allForms.push(action.payload);

         state.allForms.push(action.payload);
         console.log(state.allForms, 'ini all forms');
         localStorage.setItem("userForms", JSON.stringify(state.allForms));
      
    },
    changeAddress: (state, action) => {
      console.log(action.payload, 'ini action payloaddd');
      const isDataSame = state.allForms.find(
        (dt) => dt.id === action.payload.id
      );
      if (isDataSame) {
        const temptData = state.allForms.map((item) => {
          if (item.id === action.payload.id) {
            console.log('id sama');

            return {
              ...item,
              name:action.payload.name,
              telephone: action.payload.telephone,
              district:action.payload.district,
              city:action.payload.city,
              province:action.payload.province,
              street:action.payload.street,
              detail:action.payload.detail
            
            };
          } else {
            console.log('id beda');
            return item;
          }
        });

        state.allForms = temptData;
        console.log(temptData, 'ini data yg sudah diubah');
        localStorage.setItem("userForms", JSON.stringify(state.allForms));
        // storeAddressInLocalStorage(state.allDataAddress);
      }else {
        console.log('berbeda idnya');
      }
    },
    removeAddress: (state, action) => {
      const isNotSame = state.allForms.filter(
        (item) => item.id !== action.payload
      );
      state.allForms = isNotSame;
      //  storeAddressInLocalStorage(state.allDataAddress);
    },
    selectOneData: (state, action) => {
      console.log(action.payload, 'ga ada internet');
      let isSame = state.allForms.find(item => item.id == Number(action.payload));
      if(action.payload === 1){
        console.log('ini 1')
      }else {
        console.log('bukan');
        console.log(typeof(action.payload));
      }
      console.log(isSame, 'ini same');
      state.oneDataAddress = isSame;
      console.log(state.oneDataAddress, 'ini one data address');
      // storeAddressInLocalStorage(state.oneDataAddress);
    },
    putProvinceToLocalStorage: (state, action) => {
      state.province = action.payload;
      storeProvinceInLocalStorage(state.province);
      console.log(action.payload, "ini action payload provinsi dari belakang");
      console.log(state.province, "ini state provinsi dari belakang");
    },
    putCityToLocalStorage: (state, action) => {
      state.city = action.payload;
      storeCityInLocalStorage(state.city);
      console.log(state.city, "ini state city dari belakang");
    },
    putDistrictToLocalStorage: (state, action) => {
      state.district = action.payload;
      storeDistrictInLocalStorage(state.district);
      console.log(state.district, "ini state district dari belakang");
    },
    putAllInOne: (state, action) => {
      console.log("jalanlan putallinone");
      let { city, district, province } = action.payload;
      console.log(city, "ini city");
      state.district = district;
      state.city = city;
      state.province = province;
      storeProvinceInLocalStorage(state.province);
      storeCityInLocalStorage(state.city);
      storeDistrictInLocalStorage(state.district);
    },
    clearAllinOne: () => {
      clearLocalProvince();
      clearLocalDistrict();
      clearLocalCity();
    },
  },

  extraReducers: (builder) => {
    builder;
  },
});

export const dataStateForms = (state) => state.getAddress.allForms;
export const dataStateOneForms = (state) => state.getAddress.oneDataAddress;
export const selectDataFormsById = (state, postId) => state.getAddress.allForms.find((allForms) => allForms.id === postId);

export const {
  clearAllinOne,
  addAddress,
  changeAddress,
  removeAddress,
  removeAllStateRegion,
  selectOneData,
  putCityToLocalStorage,
  putDistrictToLocalStorage,
  putProvinceToLocalStorage,
  putAllInOne,
  getDataLocalAddress
} = getAddressSlice.actions;
export default getAddressSlice.reducer;
