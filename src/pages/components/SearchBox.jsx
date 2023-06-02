/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PutToIDBDatabase from "../../data/location-marker-idb";


const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

// eslint-disable-next-line no-unused-vars
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};


export default function SearchBox(props) {
    const {searchLocation, setSearchLocation} = props;

    const [searchText, setSearchText] = useState("");
    const [listPlace, setListPlace] = useState([]);

  const getDataSearch = async(e) => {

    e.preventDefault();

    if(navigator.onLine){
      console.log('lagi online');
      let checkIDBSearch = await PutToIDBDatabase.setData("request", searchText);
      if(checkIDBSearch){
            let getIDBSearch = await PutToIDBDatabase.getData("request");
            const params = {
              q: getIDBSearch,
              format: "json",
              addressdetails: 1,
              polygon_geojson: 0,
            };
            const queryString = new URLSearchParams(params).toString();
            const requestOptions = {
              method: "GET",
              redirect: "follow",
            };
            fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
              .then((response) => response.text())
              .then(async (result) => {
                let setIDBPlace = await PutToIDBDatabase.setData("list place", JSON.parse(result));
                if (setIDBPlace) {
                  let getIDBPlace = await PutToIDBDatabase.getData("list place");
                  setListPlace(getIDBPlace);
                  
                }
              })

              .catch(async () => {
                let checkIDB = await PutToIDBDatabase.setData(
                  "request",
                  searchText
                );
                console.log(checkIDB, "ini offline sudah dimasukkin ke idb");
              });

      }
  
    }else {
      console.log('lagi offline');
        let checkIDB = await PutToIDBDatabase.getData("request");
        if(checkIDB){
          const params = {
            q: checkIDB,
            format: "json",
            addressdetails: 1,
            polygon_geojson: 0,
          };
          const queryString = new URLSearchParams(params).toString();
          const requestOptions = {
            method: "GET",
            redirect: "follow",
          };
          fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
            .then((response) => response.text())
            .then(async (result) => {
              let checkIDBPlace = await PutToIDBDatabase.setData("list place", JSON.parse(result));
              if (checkIDBPlace) {
                let getIDBPlace = await PutToIDBDatabase.getData("list place");
                setListPlace(getIDBPlace);
             }

            })
            .catch(async () => {
              let checkIDB = await PutToIDBDatabase.setData("request",searchText );
              console.log(checkIDB, "ini cek idb jika offline");
            });
        }
      }
         

  }

  
  const getDataApi = async() => {
     const userAgent = navigator.userAgent;
     console.log(userAgent, 'ini user agent dari useEffect');

      let getIDB = await PutToIDBDatabase.getData("request");
      console.log(getIDB, 'ini idb');
     if(getIDB){
       console.log('lolos validasi check');
          const params = {
            q: getIDB,
            format: "json",
            addressdetails: 1,
            polygon_geojson: 0,
          };

          const queryString = new URLSearchParams(params).toString();
          const requestOptions = {
            method: "GET",
            redirect: "follow",
          };
          fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
            .then((response) => response.text())
            .then(async(result) => {
              let checkIDBPlace = await PutToIDBDatabase.setData("list place", JSON.parse(result));
              if (checkIDBPlace) {
                let getIDBPlace = await PutToIDBDatabase.getData("list place");
                setListPlace(getIDBPlace);
             }

            })
            .catch(async() => {
                let checkIDB = await PutToIDBDatabase.setData("request",searchText);
              console.log(checkIDB, "ini cek use effect");
            });
     }
  
  }


  useEffect(() => {

     window.addEventListener("online", getDataApi, false);
     
  }, [])



  return (
    <div>
      <form onSubmit={getDataSearch}>
        ini SearchBox
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit">cari</button>
      </form>
      <div>ini list</div>
      <ul>
        {listPlace?.map((lp, index) => <div key={index} 
        onClick={() => setSearchLocation({lat:lp?.lat, lng:lp?.lon})}
        
        >{lp?.display_name}</div>)}
      </ul>
    </div>
  );
}
