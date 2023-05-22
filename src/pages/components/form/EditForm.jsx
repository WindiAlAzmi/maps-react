import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import {  useDispatch, useSelector } from "react-redux"
import {Link, useNavigate} from "react-router-dom";
import { dataStateOneForms, selectOneData, selectDataFormsById, clearAllinOne, changeAddress } from "../../../redux/getAddressSlice"


export default function EditForm() {
    const {postId} = useParams();
 
     
    let getDataDetail = useSelector((state) => selectDataFormsById(state, Number(postId)));

    // console.log(getDataDetail?.id, 'ini data one dri redux');
    // let getDataDetail = useSelector(dataStateOneForms);
    console.log(getDataDetail, 'ini dispatch data');
       const dispatch = useDispatch();
       const navigate = useNavigate();

    const [name, setName] = useState(getDataDetail?.name);
  const [number, setNumber] = useState(getDataDetail?.telephone);
   const [street, setStreet] = useState(getDataDetail?.street);
    const [detail, setDetail] = useState(getDataDetail?.detail);
    const [dataMessage, setDataMessage] = useState({status:false, alert:""});


    // const fetchData = () => {
    //    dispatch(selectOneData(postId));
    // }

    // useEffect(() => {
    //   fetchData();

    
    // }, [postId]);


    
    const getDataProvince = localStorage.getItem("province");
    const getDataDistrict = localStorage.getItem("district");
    const getDataCity = localStorage.getItem('city');

    if(!getDataDetail){
      return <div>data not found</div>;
    }

  const handlerEditForm = (e) => {
        console.log("jalann");
    e.preventDefault();
    if(!name || !number || !street){
      setDataMessage({status:true, alert:'isi terlebih dahulu!'});
    }
    console.log('street', street);
    dispatch(
      changeAddress({
        id: getDataDetail.id,
        name: name,
        telephone: number,
        district: getDataDistrict,
        city: getDataCity,
        province: getDataProvince,
        street: street,
        detail: detail,
      })
    );
    dispatch(clearAllinOne());
    navigate('/FormAddress');
  };




  return (
    <div>
      <p>{postId} id data</p>
      <h3>name : {getDataDetail?.name}</h3>
      <form onSubmit={handlerEditForm} className="flex flex-col gap-4">
        <div className="w-[600px] flex flex-row gap-2">
          <label>Enter your name:</label>
          <input
            type="text"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="w-[600px] flex flex-row gap-2">
          <label>Enter your nomer:</label>
          <input
            type="number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>

        <Link to="/SearchRegionCustomer">
          {getDataDetail?.province ? <>
          {!getDataProvince && !getDataCity && !getDataDistrict && (
            <div>
              <h4>provinsi, kota, kecamatan</h4>
            </div>
          )}
          {getDataProvince && getDataCity && getDataDistrict && (
            <div>
              <div>{getDataProvince}</div>
              <div>{getDataCity}</div>
              <div>{getDataDistrict}</div>
            </div>
            
          )}
          </>
           :
            <> 
              <div>{getDataDetail?.province}</div>
            </>
          }
        </Link>

        {getDataProvince && getDataCity && getDataDistrict ? (
          <>
            <label>
              Enter your street
              <input
                type="text"
                name="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </label>

            <label>
              Enter your detail
              <input
                type="text"
                name="detail"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              />
            </label>
          </>
        ) : (
          <>
            <div>untuk mengisi jalan dan patokan, dimohon pilih provinsi, kota dan kec dulu!</div>
          
          </>
        )}

        <button type="submit" className="w-40">kirimkan</button>
      </form>
    </div>
  )
}
