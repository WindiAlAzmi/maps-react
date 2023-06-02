/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { DataCategory, DataService } from "../../../data/service-data";
import {
  addWishlist,
  dataStateWishlist,
  removeWishlist,
} from "../../../redux/getWishlistSlice";
import { useEffect, useState } from "react";

export default function Wishlist() {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedAllCategory, setSelectedAllCategory] = useState(true);
  const [itemProductSelected, setItemProductSelected] = useState([]);
  const [messageAlert, setMessageAlert] = useState({status:'tidak ada', message:'data blm ada'});
  const [layoutWishlist, setLayoutWishlist] = useState('row');

  console.log(layoutWishlist, "ini layout wishlist");

  const dispatch = useDispatch();
  const iniDataWishList = useSelector(dataStateWishlist);
  

  // console.log(selectedCategory, 'ini selected cateogry');
  // console.log(itemProductSelected, "ini item product selected");

  const itemProduct = DataService();
  const itemCategory = DataCategory();

  const saveToWishlist = (data) => {
 
    if(iniDataWishList.length > 0){ //validasi 1 --> jika ada data wishlist
       const checkData = iniDataWishList.find( 
         (item) => item.title === data.title 
       );
       if (!checkData) {  //validasi 2 --> jika tidak ada data yg sama
         console.log("data yg tidak sama");
         dispatch(addWishlist(data));
         setMessageAlert({
           status: "ada",
           message: "data berhasil dimasukkan",
         });
         setTimeout(() => {
           setMessageAlert({ status: "tiddak ada", message: "" });
         }, 1000);
       } else {
         console.log("data yg sama");
         setMessageAlert({
           status: "ada",
           message: "data sudah ada di wishlist",
         });
         setTimeout(() => {
           setMessageAlert({ status: "tidak ada", message: "" });
         }, 1000);
       }
    }else{
      console.log('tidak ada data wishlist', data);
        dispatch(addWishlist(data));
        setMessageAlert({
          status: "ada",
          message: "data berhasil dimasukkan",
        });
        setTimeout(() => {
          setMessageAlert({ status: "ada", message: "" });
        }, 1000);
    }
   
 
   
  };

  const removeToWishlist = (data) => {
    dispatch(removeWishlist(data));
      setMessageAlert({ status: "ada", message: "data berhasil dihapus" });
      setTimeout(() => {
        setMessageAlert({ status: "ada", message: "" });
      }, 1000)
  };

  const filterHandler = (data) => {
    //validasi 1 --> apakah ada data wishlist?
    if (iniDataWishList.length > 0) {

      //validasi 2 --> apakah ada data yg sama
      if (selectedCategory?.includes(data?.category)) {

        // setMessageAlert({ status: "ada data", message: "data sudah ada di wishlist" });
        const checkData = selectedCategory.filter(
          (item) => item !== data?.category
        );
        setSelectedCategory(checkData);
        setSelectedAllCategory(false);
        
      } else if (data === undefined) { //validasi 3 --> apakah data undefined
        //2.1.jika data undefined
        setSelectedCategory([]);
      } else if (data === true) {  //validasi 4 --> apakah data true, jika true maka munculkan all;
          setSelectedAllCategory(true);
          setSelectedCategory([]);
          // dispatch(removeIsThereDataWishlist());
      } else if(data === false){
          setSelectedAllCategory(false); //untuk mengganti warna filter bagian all
      }else {
        //2.2. jika tidak ada data yg sama

        setSelectedCategory([...selectedCategory, data?.category]);
        setSelectedAllCategory(false); 
    
      }
    } else {
   
      setMessageAlert({ status: "ada", message: "tidak ada data wishlist" });
    }
  };

  useEffect(() => {
    filterItem();
 
  }, [selectedCategory, selectedAllCategory, iniDataWishList]);




  const filterItem = () => {
    console.log('masuk ke function filterItem');
    //validasi 1 --> jika selected caterogy tidak 0
    if (selectedCategory.length > 0) {
      //validasi 2 --> cek apakah ada data wishlist
      // console.log("ada data wishlist");
      const checkData = selectedCategory.map((data) => {
        let findSimilarData = iniDataWishList.filter(
          (item) => item?.category.title === data
        );
        console.log(findSimilarData, "ini data yg similar");
        return findSimilarData;
      });

      if (checkData.length !== 0) {
        // console.log('ada data yg sama', checkData);
        setItemProductSelected(checkData.flat());
      } else {
        console.log("tidak ada data yg sama");
      }
    } else { //jika 0, maka masukkan ke itemproductselected
      console.log("sama dgn 0");
      setItemProductSelected(iniDataWishList);
    }
  
  };

  // const layoutWishlistHandler = (data) =>{
  //   console.log(data, 'ini data');
  // }

  
  return (
    <div>
      ini all product
      <div>
        {itemProduct?.map((dt, index) => {
          //ini data semua product
          return (
            <div key={index} onClick={() => saveToWishlist(dt)}>
              {dt.title}
            </div>
          );
        })}
      </div>
      <div className="mt-20">ini filter</div>
      <div>
        <div
          onClick={() => filterHandler(!selectedAllCategory)} // filter untuk all category
          className={`${selectedAllCategory === true && "bg-yellow-800"}`}
        >
          all filter
        </div>
      </div>
      <div>
        {itemCategory?.map((item, index) => {
          //filter untuk selected category
          return (
            <div key={index}>
              <div
                onClick={() => filterHandler(item)}
                className={`${
                  selectedCategory?.includes(item?.category) && "bg-yellow-800"
                }`}
              >
                {item.category}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-10 mb-4 ">
        pilih layout wishlist
        <div className="flex flex-col border border-black">
          <div onClick={() => setLayoutWishlist("row")}>row</div>
          <div onClick={() => setLayoutWishlist("column")}>column</div>
        </div>
      </div>
      <div className="mt-10">ini all data wishlist</div>
      <div>
        {messageAlert.status === "ada" && (
          <div
            className={`text-white ${
              messageAlert.status === "ada" ? "bg-green-800" : "bg-red-800"
            }`}
          >
            {messageAlert.message}
          </div>
        )}
      </div>
      <div>
        {iniDataWishList.length > 0 ? ( //validasi 1 --> jika ada data wishlist
          <>
            {selectedCategory.length > 0 ? ( //validasi 2 --> jika ada selected category
              <div
             
              >
                {itemProductSelected.length > 0 ? ( //validasi 3 --> jika ada item product yg dipilih
                  <div
                    className={`flex ${
                      layoutWishlist === "row" ? "flex-row" : "flex-col"
                    }`}
                  >
                    {itemProductSelected?.map((data, index) => {
                      return (
                        <div
                          key={index}
                          className="flex flex-row gap-4 border-black border"
                        >
                          <div>
                            {data.title} - category {data.category.title}
                          </div>
                          <div onClick={() => removeToWishlist(data)}>
                            delete wishlist
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div>
                    <div>tidak ada data filter</div>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div>tidak ada selected category</div>
                <div
                  className={`flex ${
                    layoutWishlist === "row" ? "flex-row" : "flex-col"
                  }`}
                >
                  {itemProductSelected?.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col border-black border"
                      >
                        <div>
                          {data.title} - category {data.category.title}
                        </div>
                        <div onClick={() => removeToWishlist(data)}>
                          delete wishlist
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        ) : (
          <div>pilih data produk dulu</div>
        )}
      </div>
    </div>
  );
}
