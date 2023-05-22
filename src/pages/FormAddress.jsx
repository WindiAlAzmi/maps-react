import { useSelector, useDispatch } from "react-redux"
import { dataStateForms, removeAddress } from "../redux/getAddressSlice"
import { Link, useNavigate } from "react-router-dom";



export default function FormAddress() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


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


  return (
    <div>
      alamat 
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
