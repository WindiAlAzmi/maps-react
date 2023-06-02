/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
// import L from "leaflet";
import markerData from "./markerData.json";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import PutToIDBDatabase from "../../../data/location-marker-idb.js";


const location = [-6.300641, 106.814095];
const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/reverse?";

// create custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [38, 38], // size of the icon
});

const CurrentLocation = ({
  findIdKKN,
  setFindIdKKN,
  findLocationKKN,
  setFindLocationKKN,
}) => {
  // const { findIdKKN, setFindIdKKN, findLocationKKN } = props;

  //  console.log(findLocationKKN,"ini data di CURRENt location dari idb yg dimasukkin ke state");

  const [getData, setData] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);
  // console.log(dataList, 'ini data list');
  // console.log(currentLocation, 'ini current location');
  // const [ setDataList] = useState([]);
  // const [ setCurrentLocation] = useState(null);
  const [dataKNN, setDataKNN] = useState([]);
  const [latLongKKN, setLatLongKKN] = useState([]);
  // const [findIdKKN, setFindIdKKN] = useState(0);
  // const [chooseData, setChooseData] = useState([]);

  // console.log(latLongKKN, "ini lat long kkn");

  console.log(dataList, 'ini data list');
  console.log(currentLocation, 'ini data current location');
  console.log(dataKNN, 'ini data kkn');
  console.log(latLongKKN, 'ini data latlong kkn');

  
  // Fungsi untuk menghitung jarak Euclidean antara dua titik
  function calculateDistance(p1, p2) {
    // console.log(p1.latitude, "ini p1");
    // console.log(p2, "ini p2");
    const squaredDiffLatitude = Math.pow(p2.lat - p1.latitude, 2);
    const squaredDiffLongitude = Math.pow(p2.lng - p1.longitude, 2);
    return Math.sqrt(squaredDiffLatitude + squaredDiffLongitude);
  }

  //memasukkan id ke rumus mencari toko yg terdekat
  const predict = async (data) => {
    // console.log(data, 'ini data diambil dari current location ask user')
    const dataBaru = { lat: data.lat, lng: data.lng };

    const distances = markerData.data.map((dt) => ({
      dt,
      distance: calculateDistance(dt, dataBaru),
    }));

    distances.sort((a, b) => a.distance - b.distance);

    const kNearest = distances.slice(0, 3);
    setDataKNN(kNearest);

    const smallestNumber = kNearest.reduce((min, current) => {
      return current < min ? current : min;
    });

    // console.log(smallestNumber.dt.id, "ini nomer terkecil");
    // let checkDataIDB = await PutToIDBDatabase.del("find location kkn");
    // console.log(checkDataIDB, "hapus");

    let checkGetIDB = await PutToIDBDatabase.getData("find location kkn");
    console.log(checkGetIDB, "get data idb");
    let dataSmallest = {
      lat: smallestNumber.dt.latitude,
      lng: smallestNumber.dt.longitude,
    }
    let checkCurrentUserIDB = await PutToIDBDatabase.setData("current user idb", dataSmallest);
    console.log(checkCurrentUserIDB, "cek current user");

    setFindIdKKN(smallestNumber.dt.id);
    setFindLocationKKN({
      lat: smallestNumber.dt.latitude,
      lng: smallestNumber.dt.longitude,
    });
    console.log(findLocationKKN, "ini loc setelah di predict");
    setLatLongKKN({
      lat: smallestNumber.dt.latitude,
      lng: smallestNumber.dt.longitude,
    });

    // PutToIDBDatabase.del("find location kkn");
    // console.log(findIdKKN, "ini smallest id");
    //  map.flyTo(latLongKKN, map.getZoom());
    // map.locate().on("locationfound", async function () {
    //        map.flyTo(latLongKKN, map.getZoom());
    //   });
  };

  const map = useMapEvents({
    locationfound(e) {
      setData(e.latlng); //masuk ke display data
      setCurrentLocation(e.latlng);
    },
  });

  const getDataApi = (markdrag) => {
    const requestOptions = {
      method: "GET",
    };
    fetch(
      `${NOMINATIM_BASE_URL}format=geojson&lat=${markdrag?.lat}&lon=${markdrag?.lng}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(
        //   result.features[0].geometry.coordinates[0],
        //   "ini data langsung dari api"
        // );
        setDataList(result.features[0].properties);
        setData({
          lat: result.features[0].geometry.coordinates[1],
          lng: result.features[0].geometry.coordinates[0],
        });
      })
      .catch((err) => console.log("err: ", err));
  };

  const getCurrentLocationAgain = async() => {
    // console.log('masukkk');
    let getDataUserIDB = await PutToIDBDatabase.getData(
             "current user idb"
    );
 
     let putIDB = await PutToIDBDatabase.setData("find location kkn", getDataUserIDB);
     console.log(putIDB, "cek idb current location");

        let getDataLocalIDB = await PutToIDBDatabase.getData(
          "find location kkn"
        );
        console.log(getDataLocalIDB, "ini local idb current location");
        setFindLocationKKN(getDataLocalIDB);

    console.log(getDataUserIDB, "ini curr ent user idb");
    map.setView(L.latLng(getDataUserIDB?.lat, getDataUserIDB?.lng), map.getZoom(), {
      animate : true,
    });
  };

  const getDataIDB = async () => {
    if (navigator.onLine) {
      console.log("sedang online");
      let getDataLocalIDB = await PutToIDBDatabase.getData("find location kkn");
      console.log(getDataLocalIDB, "ini local store idb use effect");

      map.setView(
          L.latLng(getDataLocalIDB?.lat, getDataLocalIDB?.lng),
          map.getZoom(),
          {
            animate: true,
          }
        );
    } else {
      console.log("tidak sedang online");
           let getDataLocalIDB = await PutToIDBDatabase.getData(
             "find location kkn"
           );
           console.log(getDataLocalIDB, "ini local store idb use effect");

           map.setView(
             L.latLng(getDataLocalIDB?.lat, getDataLocalIDB?.lng),
             map.getZoom(),
             {
               animate: true,
             }
           );
    }
  };

  useEffect(() => {
    map.locate().on("locationfound", async function (e) {
      await getDataApi(e.latlng);
      await predict(e.latlng);
      // if(checkPredict){
      //   console.log('jalankan predict');
      //   map.flyTo(e.latLng, map.getZoom());
      // }
    });
  }, []);

  useEffect(() => {
    if (findLocationKKN) {
      getDataIDB();
      console.log("dapat findlocationkkn");
    } else {
      console.log("ga dapat findlocationkkn");
    }
  }, [findLocationKKN]);

  return (
    <div>
      <div
        onClick={getCurrentLocationAgain}
        className="absolute z-[99999] bg-red-800 border border-black rounded-lg"
      >
        ini current loc
      </div>
      {getData !== null && (
        <MarkerClusterGroup>
          {findIdKKN !== 0 ? (
            <>
              {markerData.data.map((md, index) => {
                if (md.id === findIdKKN) {
                  // console.log("sama", md.id);
                  return (
                    <Marker
                      key={index}
                      position={[md.latitude, md.longitude]}
                      icon={customIcon}
                      eventHandlers={{
                        click: async () => {
                          console.log("jalankan marker yg sama");
                          setFindIdKKN(md.id);
                          setFindLocationKKN({
                            lat: md.latitude,
                            lng: md.longitude,
                          });
                          if (navigator.onLine) {
                            console.log("online");
                          } else {
                            let data = {
                              lat: md.latitude,
                              lng: md.longitude,
                            };
                            console.log(data, "ini data lat and long");
                            await PutToIDBDatabase.setData(
                              "find location kkn",
                              data
                            );
                            let getDataLocalIDB =
                              await PutToIDBDatabase.getData(
                                "find location kkn"
                              );
                            console.log(getDataLocalIDB, "ini local store idb");

                            console.log("offline");
                          }
                        },
                      }}
                    >
                      <Popup>nearest</Popup>
                    </Marker>
                  );
                } else {
                  // console.log("ga sama", md.id);
                  return (
                    <Marker
                      key={index}
                      position={[md.latitude, md.longitude]}
                      icon={customIcon}
                      eventHandlers={{
                        click: async () => {
                          console.log("jalankan marker yg ga sama");
                          setFindIdKKN(md.id);
                          setFindLocationKKN({
                            lat: md.latitude,
                            lng: md.longitude,
                          });
                          if (navigator.onLine) {
                            console.log("online");
                          } else {
                            let data = {
                              lat: md.latitude,
                              lng: md.longitude,
                            };
                            console.log(
                              data,
                              "ini data lat and long yg jauh locationnya"
                            );
                            await PutToIDBDatabase.setData(
                              "find location kkn",
                              data
                            );
                            let getDataLocalIDB =
                              await PutToIDBDatabase.getData(
                                "find location kkn jauh"
                              );
                            console.log(
                              getDataLocalIDB,
                              "ini local store idb jauh"
                            );

                            console.log("offline");
                          }
                        },
                      }}
                    >
                      {/* <Popup>{md.name}</Popup> */}
                    </Marker>
                  );
                }
              })}
            </>
          ) : (
            <>
              {markerData.data.map((md, index) => (
                <Marker
                  key={index}
                  position={[md.latitude, md.longitude]}
                  icon={customIcon}
                >
                  {/* <Popup>
                    {md.name}- lat: {md.latitude} - longi: {md.longitude}
                  </Popup> */}
                </Marker>
              ))}
            </>
          )}
        </MarkerClusterGroup>
      )}

      {/* <Marker
        position={currentLocation === null ? location : currentLocation}
        eventHandlers={{
          click: (e) => {
            console.log("jalankan marker");
            console.log(e.latlng, "ini dari marker");
            predict(e.latlng);
          },
        }}
      ></Marker> */}
    </div>
  );
};
export default function MarkerNearestNeighboor(props) {
  const { findIdKKN, setFindIdKKN, findLocationKKN, setFindLocationKKN } =
    props;

  return (
    <div>
      <MapContainer
        className="relative"
        center={location}
        zoom={12}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CurrentLocation
          findIdKKN={findIdKKN}
          setFindIdKKN={setFindIdKKN}
          findLocationKKN={findLocationKKN}
          setFindLocationKKN={setFindLocationKKN}
        />
      </MapContainer>
    </div>
  );
}
