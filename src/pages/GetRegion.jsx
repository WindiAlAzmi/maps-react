/* eslint-disable react/prop-types */
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataStateCity, dataStateKecamatan, dataStateProvinces, fetchDataKecamatan, fetchDataKota, removeAllStateRegion } from "../redux/getAllProvinceSlice";
import { putAllInOne, putCityToLocalStorage, putDistrictToLocalStorage, putProvinceToLocalStorage } from "../redux/getAddressSlice";

export default function GetRegion({resultsProvinsi}) {
    console.log(resultsProvinsi, 'ini result provinsi')


    const dispatch = useDispatch();

    const [dataUser, setDataUser] = useState([]);
    const [getOneData, setOneData] = useState([]);
    const [getOneCity, setOneCity] = useState([]);
    const [getOneDistrict, setOneDistrict] = useState([]);
    const [dataCurrentLocation, setDataCurrentLocation] = useState([]);


    console.log(dataUser?.address?.city.toString().toLowerCase(), 'ini data user yg sudah di lowercase');

    const dataProvinsiFromRedux = useSelector(dataStateProvinces);
    console.log(dataProvinsiFromRedux, 'data dari state ada di get region')

    const dataCityFromRedux = useSelector(dataStateCity);
    console.log(dataCityFromRedux, "data state city ada di get region");


    const dataDistrictFromRedux = useSelector(dataStateKecamatan);
    console.log(dataDistrictFromRedux, 'data state district');


  
  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/reverse?";

  const requestOptions = {
      method: "GET",
  };

  const getUserLocation = async() => {
    console.log('jalankan getuserlocation');
    setOneData("");
    setOneCity("");
    setOneDistrict("");
    const data = await dispatch(removeAllStateRegion());
    if(data){
       if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(
           (position) => {
             fetch(
               `${NOMINATIM_BASE_URL}format=geojson&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
               requestOptions
             )
               .then((response) => response.json())
               .then((result) => {
                 console.log(
                   result.features[0].properties,
                   "ini data langsung dari api"
                 );

                 setDataUser(result.features[0].properties);
                 setDataCurrentLocation({
                   lat: position.coords.latitude,
                   lng: position.coords.longitude,
                 });
                  dispatch(
                    putAllInOne({
                      province:
                        result.features[0].properties.address?.state ||
                        result.features[0].properties.address?.city,
                      city: result.features[0].properties.address
                        ?.city_district ||  result.features[0].properties.address
                        ?.city ,
                      district: result.features[0].properties.address?.suburb || result.features[0].properties.address?.village,
                    })
                  );
               })
               .catch((err) => console.log("err: ", err));
           },
           (err) => {
             alert(err.message);
           }
         );
       } else {
         alert("Geolocation is not supported by your browser");
       }
    }
    console.log(dataProvinsiFromRedux, "data dari state ada di get region");
    
  }
;

  const fetchDataAll = (data) => {
    console.log('jalan fetch kota', data);
    setOneData(data.name);
    dispatch(putProvinceToLocalStorage(data.name));
    dispatch(fetchDataKota(data.id));
  
  }

   const fetchCityData = (data) => {
     console.log("jalan fetch city", data);
     setOneCity(data.name);
     dispatch(putCityToLocalStorage(data.name));
     dispatch(fetchDataKecamatan(data.id));
   };



  const fetchDistrictData = (data) => {
     console.log("jalan fetch district", data);
     dispatch(putDistrictToLocalStorage(data.name));
     setOneDistrict(data.name);
   
     
  }


  return (
    <div>
      <div>
        ini lat {dataCurrentLocation.lat} dan ini lng {dataCurrentLocation.lng}
      </div>
      {dataUser.length === 0 ? (
        <div>
          <div className="border border-black w-40">
            <button onClick={getUserLocation}>gunakan lokasi saat ini</button>
          </div>
          <div>
            ini all provinsi:
            <ul>
              <li>provinsi : {getOneData}</li>
              <li>kota : {getOneCity !== undefined && getOneCity} </li>
              <li>
                kecamatan: {getOneDistrict !== undefined && getOneDistrict}
              </li>
            </ul>
            <ul className="border border-black">
              <li>ini </li>
              {dataDistrictFromRedux.length === 0 ? (
                <>
                  {dataCityFromRedux.length === 0 ? (
                    <>
                      {/* {dataProvinsiFromRedux.map((dt) => {
                        return (
                          <li
                            key={dt.id}
                            className="border border-green-800 text-black"
                          >
                            <button onClick={() => fetchDataAll(dt)}>
                              {dt.name}
                            </button>
                          </li>
                        );
                      })} */}
                      {resultsProvinsi?.length !== 0
                        ? resultsProvinsi?.map((dt) => {
                            return (
                              <li
                                key={dt.id}
                                className="border border-green-800 text-black"
                              >
                                <button onClick={() => fetchDataAll(dt)}>
                                  {dt.name}
                                </button>
                              </li>
                            );
                          })
                        : dataProvinsiFromRedux.map((dt) => {
                            return (
                              <li
                                key={dt.id}
                                className="border border-green-800 text-black"
                              >
                                <button onClick={() => fetchDataAll(dt)}>
                                  {dt.name}
                                </button>
                              </li>
                            );
                          })}
                    </>
                  ) : (
                    <>
                      {dataCityFromRedux.map((dt) => {
                        return (
                          <li
                            key={dt.id}
                            className="border border-green-800 text-black"
                          >
                            <button onClick={() => fetchCityData(dt)}>
                              {dt.name}
                            </button>
                          </li>
                        );
                      })}
                    </>
                  )}
                </>
              ) : (
                <>
                  {dataDistrictFromRedux.map((dt) => {
                    return (
                      <li
                        key={dt.id}
                        className="border border-green-800 text-black"
                      >
                        <button onClick={() => fetchDistrictData(dt)}>
                          {dt.name}
                        </button>
                      </li>
                    );
                  })}
                </>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <>
          <div>
            <div>provinsi : {getOneData ? getOneData : dataUser?.address?.state || dataUser?.address?.city} </div>
            <div>city : {getOneCity ? getOneCity : dataUser?.address?.city_district || dataUser?.address?.city} </div>
            <div>kec: {getOneDistrict ? getOneDistrict : dataUser?.address?.suburb || dataUser?.address?.village} </div>
          </div>
          <div>
            {dataDistrictFromRedux.length === 0 ? (
              <>
                {dataCityFromRedux.length === 0 ? (
                  <>
                    {resultsProvinsi?.length !== 0 
                      ? resultsProvinsi?.map((dt) => {

                          return (
                            <li
                              key={dt.id}
                              className={`border border-green-800 text-black`}
                            >
                              <button onClick={() => fetchDataAll(dt)}>
                                {dt.name}
                              </button>
                            </li>
                          );
                        })
                      : dataProvinsiFromRedux.map((dt) => {
                              return (
                                <li
                                  key={dt.id}
                                  className="border border-green-800 text-black"
                                >
                                  <button onClick={() => fetchDataAll(dt)}>
                                    {dt.name}
                                  </button>
                                </li>
                              );
                        })}
                  </>
                ) : (
                  <>
                    {dataCityFromRedux.map((dt) => {
                      return (
                        <li
                          key={dt.id}
                          className="border border-green-800 text-black"
                        >
                          <button onClick={() => fetchCityData(dt)}>
                            {dt.name}
                          </button>
                        </li>
                      );
                    })}
                  </>
                )}
              </>
            ) : (
              <>
                {dataDistrictFromRedux.map((dt) => {
                  return (
                    <li
                      key={dt.id}
                      className="border border-green-800 text-black"
                    >
                      <button onClick={() => fetchDistrictData(dt)}>
                        {dt.name}
                      </button>
                    </li>
                  );
                })}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
