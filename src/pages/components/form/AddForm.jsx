import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addAddress, dataStateForms, clearAllinOne } from "../../../redux/getAddressSlice";

export default function AddForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
   const [street, setStreet] = useState("");
    const [detail, setDetail] = useState("");
    const [dataMessage, setDataMessage] = useState({status:false, alert:""})
    const dataForms = useSelector(dataStateForms);

    console.log(dataForms, 'ini data forms');

    const getDataProvince = localStorage.getItem("province");
    const getDataDistrict = localStorage.getItem("district");
    const getDataCity = localStorage.getItem('city');

    const randomId = function(length = 6) {
      return Math.random().toString(36).substring(2, length+2);
    };


  const handleSubmit = (event) => {
    event.preventDefault();
    if(!name || !number || !street){
      setDataMessage({status:true, alert:'isi terlebih dahulu!'});
    }

    dispatch(
      addAddress({
        id: randomId(1),
        name: name,
        telephone: number,
        district: getDataDistrict,
        city: getDataCity,
        province: getDataProvince,
        street: street,
        detail: "",
      })
    );
    dispatch(clearAllinOne());
    navigate('/FormAddress');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
  );
}

