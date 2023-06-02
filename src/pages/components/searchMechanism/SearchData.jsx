import { useEffect, useState } from "react";
import { DataService } from "../../../data/service-data";

export default function SearchData() {
  const [dataSearch, setDataSearch] = useState("");
  const [dataFilterSearch, setDataFilterSearch] = useState([]);
  const [messageAlert, setMessageAlert] = useState({
    status: "tidak ada",
    message: "",
  });

  const itemProduct = DataService();

  const searchHandler = (e) => {
    setDataSearch(e.target.value);
    console.log("ini search handler", e.target.value);
  };

  const filterSearchHandler = () => {
    console.log(dataSearch, "ini data search");

    if (itemProduct.length > 0) {
      //validasi 1 --> apakah ada data product
      console.log("ada data product");

      if (dataSearch !== "") {
  
        //validasi 2 --> apakah ada data search
        console.log("data search tidak kosong");

        const checkData = itemProduct.filter((item) =>
          item.title.toLowerCase().includes(dataSearch.toLowerCase())
        );
        console.log(checkData, "ini cek data");
        if (checkData.length > 0) {
          console.log("ad data", checkData);
              setMessageAlert({
                status: "ada",
                message: "mencari data",
              });
              setTimeout(() => {
                setMessageAlert({
                  status: "ada",
                  message: "",
                });
              }, 500);
          setDataFilterSearch(checkData);

        } else {
          setDataFilterSearch([]);

          setMessageAlert({

            status: "tidak ada sesuai search",
            message: "tidak ada data yg sama dgn keyword search",
          });
        
          setTimeout(() => {
            setMessageAlert({
              status: "tidak ada sesuai search",
              message: "",
            });
          }, 1000);
        
  
        }
      } else {
        console.log("tidak ada data");
        setDataFilterSearch(itemProduct);
        setMessageAlert({
          status: "tidak ada",
          message: "tidak ada data search",
        });
        setTimeout(() => {
          setMessageAlert({
            status: "tidak ada",
            message: "",
          });
        }, 1000);
      }
    } else {
      console.log("tidak ada data product");
    }
  };

  useEffect(() => {

  }, [dataFilterSearch])
  return (
    <div>
      <div>
        {messageAlert.status === "ada" ? (
          <div className="bg-green-800 text-white">{messageAlert.message}</div>
        ) : (
          <div className="bg-red-800 text-white">{messageAlert.message}</div>
        )}
      </div>
      <div>ini search : {dataSearch}</div>
      <div className="flex flex-row">
        <input
          type="text"
          value={dataSearch}
          placeholder="ini search data"
          onChange={searchHandler}
        />
        <div onClick={filterSearchHandler}>cari</div>
      </div>

      <div>
        {messageAlert.status === "tidak ada sesuai search" ? (
          <div>tidak ada data search</div>
        ) : (
          <div>
            {dataFilterSearch.length > 0 ? (
              <div>
                <div>
                  {dataFilterSearch?.map((item, index) => {
                    return <div key={index}>{item.title}</div>;
                  })}
                </div>
              </div>
            ) : (
              <div>
                {itemProduct?.map((item, index) => {
                  return <div key={index}>{item.title}</div>;
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
