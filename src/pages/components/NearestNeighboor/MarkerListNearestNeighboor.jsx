/* eslint-disable react/prop-types */
import { useEffect } from "react";
import markerData from "./markerData.json";
import PutToIDBDatabase from "../../../data/location-marker-idb.js";

export default function MarkerListNearestNeighboor({findIdKKN, setFindLocationKKN, findLocationKKN}) {
//  const { findIdKKN } = props;
 console.log(findIdKKN, 'ini langsung dari id kkn');
 console.log(findLocationKKN, 'ini data dari idb yg dimasukkin ke state')


  const isDifferentData = async(previousData) => {
     console.log(previousData, 'ini previous data');
     console.log(isDifferentData, 'cek data yg berbeda');
     let getDataLocalIDB = await PutToIDBDatabase.getData("find location kkn");
     console.log(getDataLocalIDB, 'ini data local di function is different data');
    if(getDataLocalIDB.lat === previousData){
      return true;
    }else {
      return false;
    }
     
    //  getDataLocalIDB.filter((data) => {
    //   if(data !== previousData){
    //     previousData = data;
    //     return true;
    //   }

    //   return false;
    //  })
  }


  const getAnotherLocationAgain = async(data) => {
    console.log("masukkk another location", data);
    let putIDB = await PutToIDBDatabase.setData('find location kkn', data);
    console.log(putIDB, 'cek idb');
     let getDataLocalIDB = await PutToIDBDatabase.getData("find location kkn");
     console.log(getDataLocalIDB, 'ini local idb');
    setFindLocationKKN(getDataLocalIDB);
    let checkDifferenceData = await isDifferentData(findLocationKKN.lat);
    console.log(checkDifferenceData, 'dapet get hasil cek')
    if(checkDifferenceData){
      console.log('data yang tadi');
    }else {
      console.log('bukan data yg tadi');
    }
    

  };


 useEffect(() => {

 }, [findIdKKN, findLocationKKN])


//  const getLocal = (data) => {
//    if(findLocationKKN){
//      console.log('find location kkn')
//    }else{
//     if(findIdKKN === data){ 
//       console.log(data, 'ini data brti ga ada find location');
//     }
//    }
//  }


  return (
    <div>
      <h3>ini list data lokasi nmw: {findIdKKN}</h3>
      <div className="flex flex-col gap-4">
        {findLocationKKN.length !== 0 ? (
          <div>
            {markerData?.data.map((dt, index) => (
              <div
                key={index}
                onClick={() =>
                  getAnotherLocationAgain({
                    lat: dt.latitude,
                    lng: dt.longitude,
                  })
                }
                className={`border border-black gap-4 flex justify-center p-3 ${
                  findLocationKKN.lat === dt.latitude
                    ? "border-red-600 border-4"
                    : "border-blue-400 border-4"
                }`}
              >
                <div>find location point kkn {dt.name}</div>
                <a
                  className="rounded-lg border border-black"
                  href={dt.googleMap}
                >
                  arahkan saya
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {markerData?.data.map((dt, index) => (
              <div
                key={index}
                onClick={() =>
                  getAnotherLocationAgain({
                    lat: dt.latitude,
                    lng: dt.longitude,
                  })
                }
                className={`border border-black gap-4 flex justify-center p-3 ${
                  findIdKKN === dt.id
                    ? "border-red-600 border-4"
                    : "border-blue-400 border-4"
                }`}
              >
                <div>id kkn first fetch {dt.name}</div>
                <a
                  className="rounded-lg border border-black"
                  href={dt.googleMap}
                >
                  arahkan saya
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
