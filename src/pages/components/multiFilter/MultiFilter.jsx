/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { DataCategory, DataService } from "../../../data/service-data"
export default function MultiFilter() {

   const itemCategory = DataCategory();
   const itemProductService = DataService();
   const [itemProduct, setItemProduct] = useState([itemProductService]);
   const [selectedCategory, setSelectedCategory] = useState([]);

   console.log(selectedCategory, 'ini selected category');

    const getSelectedData = (data) => {

        if(selectedCategory.includes(data?.category)){
            let checkData = selectedCategory.filter((dt) => dt !== data?.category);
            setSelectedCategory(checkData);
            console.log(checkData, 'ini cek data');
            // setSelectedCategory(data.category);
        }else if(data === undefined){
            // let checkData = selectedCategory.filter((dt) => dt !== data);
            // console.log('ga ada data', checkData);
            setSelectedCategory([]);
        }else{
            console.log('data yg berbeda dari yg di klik');
            setSelectedCategory([...selectedCategory, data?.category])
        
        }
        
    }


    useEffect(() => {
        filterItems();
    }, [selectedCategory])


    const filterItems = () => {
        if(selectedCategory.length > 0){
        let checkData = selectedCategory?.map((dt) => {
            let getSimilarData = itemProductService.filter((item) => item?.category?.title.includes(dt));
            return getSimilarData;
        })
        if(checkData){
            console.log('ada data sama', checkData);
            setItemProduct(checkData.flat());
        }
        }else{
            setItemProduct(itemProductService);
            console.log('ga ada data yg dipilih');
        }
    }


  return (
    <div>
      ini multi filter
      <div>ini category</div>
      <div onClick={() => getSelectedData()}>all category</div>
      <div>
        {itemCategory?.map((dt) => {
          return (
            <div key={dt.id} onClick={() => getSelectedData(dt)} className={`${selectedCategory?.includes(dt.category) && 'bg-yellow-700'}`}>
              {dt.category}
            </div>
          );
        })}
      </div>
      <div className="mt-20">
        {itemProduct.map((dt) => {
            return <div key={dt.id}>judul : {dt.title}</div>
        })}
      </div>
    </div>
  );
}
