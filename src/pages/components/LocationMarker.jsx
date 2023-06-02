/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import  { useEffect, useMemo, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";


const location = [-6.300641, 106.814095];
 const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/reverse?";


const CurrentLocation = ({ setData, currentLocation, setCurrentLocation, searchLocation, dataList, setDataList}) => {

  const markerRef = useRef(null);
  const [firstData, setFirstData] = useState(null);
    
  console.log(dataList, 'ini data list dari getdatapai');

  const getDataApi = (markdrag) => {
    console.log(markdrag, 'ini adalah markdag');
      const requestOptions = {
        method: "GET"
      };
      fetch(`${NOMINATIM_BASE_URL}format=geojson&lat=${markdrag?.lat}&lon=${markdrag?.lng}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          
          console.log(result.features[0].geometry.coordinates[0], 'ini data langsung dari api');
          setDataList(result.features[0].properties);
            setFirstData({
              lat: result.features[0].geometry.coordinates[1],
              lng: result.features[0].geometry.coordinates[0],
            });
         
            console.log(firstData, 'ini first data dari get api pertama kali render')
          // setData({
          //   lat: result.features[0].geometry.coordinates[1],
          //   lng: result.features[0].geometry.coordinates[0],
          // });
        })
        .catch((err) => {
          console.log("err: ", err);
          // alert('in catch block');
        });
  
  }



  const eventHandlers = useMemo(
   () => ({
      async dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const markdrag = marker.getLatLng();
          if(markdrag !== undefined){
            console.log(markdrag, "ini mark");
            setData(markdrag);
            setCurrentLocation(markdrag);
            const check = await getDataApi(markdrag);
            if (check) {
              console.log("berhasil");
            }
          }
          
        }
          
      },
    }),
    []
  );

    const map = useMapEvents({
      locationfound(e) {
        setData(e.latlng); //masuk ke display data
        setCurrentLocation(e.latlng);
        setFirstData(e.latlng); //masuk ke titik point marker
        console.log("jalankan");
      },
    });

     const getCurrentLocationAgain = () => {
       console.log("masukkk", firstData);
      map.locate().on("locationfound", async function () {
        map.flyTo(firstData, map.getZoom());
      });  
     };



    useEffect(() => {
      const getDataApiFetch = (data) => {
         console.log(data, 'ini current gedataapifetch');
         const requestOptions = {
           method: "GET",
         };
         fetch(
           `${NOMINATIM_BASE_URL}format=geojson&lat=${data?.lat }&lon=${data?.lng}`,
           requestOptions
         )
           .then((response) => response.json())
           .then((result) => {
             console.log(
               result.features[0].properties,
               "ini data langsung dari api search"
             );
            setData({
              lat: result.features[0].geometry.coordinates[1],
              lng: result.features[0].geometry.coordinates[0],
            });
             setDataList(result.features[0].properties);

           })
           .catch((err) => console.log("err: ", err));
  
      }


      if(searchLocation){
          const data = getDataApiFetch(searchLocation);
          if(data){
            console.log('berhasil di useeffect');
          }

           setCurrentLocation(searchLocation);
           setFirstData(searchLocation);
            map.setView(
              L.latLng(searchLocation?.lat, searchLocation?.lng),
              map.getZoom(),
                 {
                   animate: true,
                 }
            );
      }else{
       map.locate().on("locationfound", async function (e) {
        await getDataApi(e.latlng);
         map.flyTo(e.latlng, map.getZoom());
        // console.log(e.latlng, "ini gabung");
        //  map.flyTo(e.latlng, map.getZoom());
        
         
        });  
        
      }
  
    },[searchLocation]);



 
  return (
    <div className="relative">
 
      <div
        onClick={getCurrentLocationAgain}
        className="absolute z-[99999] bg-red-800 border border-black rounded-lg"
      >
        ini current loc
      </div>
      {firstData === null ? (
        <>
          <Marker
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
            position={currentLocation === null ? location : currentLocation}
          ></Marker>
        </>
      ) : (
        <>
          <Marker
            draggable={true}
            eventHandlers={eventHandlers}
            ref={markerRef}
            position={firstData}
          ></Marker>
        </>
      )}
    </div>
  );
};


const LocationMarker = (props) => {
  const [getData, setData] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [mode, setMode] = useState("");
  const {
    currentLocation,
    setCurrentLocation,
    searchLocation,
    setSearchLocation,
  } = props;

  console.log(getData?.lat, "ini data dri location marker");
  console.log(searchLocation, "ini search location");

  const requestOptions = {
    method: "GET",
  };
 

  //get data location from geolocation js
   const getMyLocation = () => {
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

               setDataList(result.features[0].properties);
               setData({
                 lat: position.coords.latitude,
                 lng: position.coords.longitude,
               });
               setCurrentLocation({
                 lat: position.coords.latitude,
                 lng: position.coords.longitude,
               });
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
   };

   const updateNetworkStatus = () => {
     if (navigator.onLine) {
       console.log("ini online update network");
       setMode("online");
       
     } else {
       console.log("ini offline update network");
       setMode("offline");
       
     }
   };

   useEffect(() => {
     if (!navigator.onLine) {
       console.log("offlinee mode");
      //  updateNetworkStatus();
       // setMode('offline');
     } else {
       console.log("online mode");
       // setMode('online');
     }

      console.log(mode, "ini mode di useffect dri update network");

     window.addEventListener("online", updateNetworkStatus, false);
     window.addEventListener("offline", updateNetworkStatus, false);
   }, []);


  return (
    <>
      {mode === "offline" ? (
        <div className="rounded-md bg-red-800">you are offline</div>
      ) : (
        <div>anda online</div>
      )}
      <MapContainer center={location} zoom={24} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CurrentLocation
          setData={setData}
          getData={getData}
          currentLocation={currentLocation}
          searchLocation={searchLocation}
          setSearchLocation={setSearchLocation}
          setCurrentLocation={setCurrentLocation}
          dataList={dataList}
          setDataList={setDataList}
        />
      </MapContainer>
      <div onClick={getMyLocation}>gunakan lokasi saat ini</div>
      <div>ini lat draggable {getData !== null && getData?.lat}</div>
      <div>ini lng draggable {getData !== null && getData?.lng}</div>
      {/* {getData && <div onClick={getCurrentLocationFirstTime}>click to get current location</div>} */}

      {dataList && (
        <div>
          lat lng untuk {dataList?.display_name} ini adalah alamat dari{" "}
          {dataList?.address?.village} - city {dataList?.address?.city} -
          provinsi {dataList?.address?.state}
        </div>
      )}
    </>
  );
};

export default LocationMarker;
