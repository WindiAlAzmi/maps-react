/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from "react-redux"
import { dataStateForms, getDataLocalAddress, removeAddress } from "../redux/getAddressSlice"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



export default function FormAddress() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mode, setMode] = useState('');
 


  const dataAllForms = useSelector(dataStateForms);
  console.log(dataAllForms, 'INI DATA FORM');

  const goToAddForm = () => {
    console.log('pergi ke add form')
      navigate("/TambahAddress");
  }

  const deleteOneData = (dt) => {
    console.log(dt, 'ini id yg mau di hapus')
    dispatch(removeAddress(dt));
  }

  const getLocal = () => {
    dispatch(getDataLocalAddress());
  }


  const updateNetworkStatus = () => {
     if(navigator.onLine){
       console.log('ini online update network')
       setMode('online');
     }else{
       console.log("ini offline update network");
       setMode('offline');
     }

  
  }


 useEffect(() => {
    getLocal();
    if(!navigator.onLine){
      console.log('offlinee mode');
      updateNetworkStatus()
      // setMode('offline');
    }else{
      console.log("online mode");
      // setMode('online');
    }

    window.addEventListener('online', updateNetworkStatus, false);
     window.addEventListener('offline', updateNetworkStatus, false);
 },[])

  return (
    <div>
      <h1 className="text-yellow-800 text-2xl">alamat </h1>
      {mode === "offline" ? <div className="rounded-md bg-red-800">you are offline</div>  : <div>anda online</div>} 
      <div>
        {dataAllForms?.map((dt) => {
          return (
            <div key={dt.id} className="border border-black mb-10">
              <div>
                {dt.name} - {dt.city} - {dt.street}
              </div>
              <div><Link to={`/EditAddress/${dt.id}`}>edit address</Link></div>
              <div onClick={() => deleteOneData(dt.id)}>hapus address</div>
            </div>
          ); 
        })}
      </div>

      <button onClick={goToAddForm}>tambah data</button>
    </div>
  )
}
