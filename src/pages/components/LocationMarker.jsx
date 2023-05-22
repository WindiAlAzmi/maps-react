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


const CurrentLocation = (props) => {
  const { setData, currentLocation, setCurrentLocation, searchLocation, dataList, setDataList, getData} = props;
  const markerRef = useRef(null);

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
          // setData({
          //   lat: result.features[0].geometry.coordinates[1],
          //   lng: result.features[0].geometry.coordinates[0],
          // });
        })
        .catch((err) => console.log("err: ", err));
  
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
        setCurrentLocation(e.latlng); //masuk ke titik point marker
        console.log("jalankan");
      },
    });

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



// const requestOptions = {
//   method: "GET",
// };


//  const getMyLocation = () => {
//    if (navigator.geolocation) {
//      navigator.geolocation.getCurrentPosition(
//        (position) => {
//          fetch(
//            `${NOMINATIM_BASE_URL}format=geojson&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
//            requestOptions
//          )
//            .then((response) => response.json())
//            .then((result) => {
//              console.log(
//                result.features[0].properties,
//                "ini data langsung dari api"
//              );

//              setDataList(result.features[0].properties);
//              setData({
//                lat: position.coords.latitude,
//                lng: position.coords.longitude,
//              });
//              setCurrentLocation({
//                lat: position.coords.latitude,
//                lng: position.coords.longitude,
//              });
//            })
//            .catch((err) => console.log("err: ", err));
//        },
//        (err) => {
//          alert(err.message);
//        }
//      );
//    } else {
//      alert("Geolocation is not supported by your browser");
//    }
//  };


  return (
    <div className="relative">
      <Marker
        draggable={true}
        eventHandlers={eventHandlers}
        ref={markerRef}
        position={currentLocation === null ? location : currentLocation}
      ></Marker>
      {/* <div className="bg-red-800 absolute bottom-0 w-full h-40" onClick={getMyLocation}>gunakan lokasi saat ini</div> */}
    </div>
  );
};


const LocationMarker = (props) => {
  const [getData, setData] = useState(null);
  const [dataList, setDataList] = useState([]);
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

  return (
    <>
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
