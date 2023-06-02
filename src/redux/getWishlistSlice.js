import { createSlice } from "@reduxjs/toolkit";
// import PutToIDBDatabase from "../../src/data/location-marker-idb";



// const putWishlistToIndexDB = async(data) => {
//   console.log('taruh wishlist ke index db', data);
//    await PutToIDBDatabase.setData("wishlist user", data)
// }

// const getWishlistFromIndexDB = async() => {
//   console.log('ambil data');
//   let data = await PutToIDBDatabase.getData('wishlist user');
//   console.log(data, 'ini data wishlist dari indexdb');
//   return data;
// }

const initialState = {
  dataWishlist : [],
  dataFilterWishlist : [],

};

export const getWishlistSlice = createSlice({
  name: "getWishlist",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
        console.log("tambahkan wishlist", action.payload);

        //1.validasi 1 --> cek apakah ada data 
        if(action.payload){
            
            //2. validasi 2 --> cek apakah ada  judul dalam data tsb
            if(action.payload.title){

              //3. validasi 3 --> cek apakah ada data yg sama 
                     let checkData = state.dataWishlist.some(
                       (item) => item.title === action.payload.title
                     );

                     console.log(checkData, "cek data");

                     if (!checkData) {
                       console.log("tidak ada data sama");
                        state.isThereDataWishlist = false;
                       state.dataWishlist.push(action.payload);
                     } else {
                       console.log("ada data sama", checkData);
                       state.isThereDataWishlist = true;
                     }
              
            }else {
              console.log('data tidak lengkap')
            }

        }else{
          console.log('tidak ada data')
        }
   
    },
    removeWishlist: (state, action) => {
      console.log('remove wishlist untuk', action.payload.title);
      //1. validasi 1 --> apakah ada data yg ingin dihapus
      if(action.payload){
        console.log('ada data');

        //2. validasi 2 --> mencari index dari object yang ingin dicari
        const findDataIndex = state.dataWishlist.findIndex((item) => item.title === action.payload.title);
        // const deleteData = state.dataWishlist.filter((item) => item.title !== action.payload.title);
        // if(deleteData){
        //   console.log('hapus data', deleteData);
        //   state.dataWishlist = [...deleteData];
        // }else{
        //   console.log('tidak bisa hapus')
        // }

        if(findDataIndex !== -1){
          console.log('ada data sama berdasarkan index');
           state.dataWishlist.splice(findDataIndex, 1);
        }else {
          console.log('tidak ada data sama berdasarkan index');
        }

      }else{
        console.log('tidak ada data')
      }
    },
    filterWishlist: (state, action) => {
      console.log('filter wishlist');
      state.dataFilterWishlist = action.payload;
    },
    sortWishlist: (state, action) => {
      console.log('sort wishlit');
       state.value += action.payload;
    },
    changeInterface : (state, action) => {
       console.log("change interface wishlit");
       state.value += action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const dataStateWishlist = (state) => state.getWishlist.dataWishlist;
export const dataStateFilterWishlist = (state) => state.getWishlist.dataFilterWishlist;
export const { addWishlist, removeWishlist, filterWishlist, sortWishlist, changeInterface} = getWishlistSlice.actions;

export default getWishlistSlice.reducer;
