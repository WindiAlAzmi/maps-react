import { useState } from "react";
import { useSelector } from "react-redux";
import { dataStateProvinces } from "../../redux/getAllProvinceSlice";
import GetRegion from "../GetRegion";
import { Link } from "react-router-dom";

export default function SearchRegion() {
        const [search, setSearch] = useState("");
        // const [resultsProvinsi, setResultsProvinsi] = useState([]);

        // console.log(resultsProvinsi, "ini results search");
    const dataProvinsiFromRedux = useSelector(dataStateProvinces);
    console.log(dataProvinsiFromRedux, "data dari state ada di get region");

      const handleSearch = (e) => {
        console.log('jalann');
        setSearch(e.target.value);
      }

        // const filteredResults = dataProvinsiFromRedux.filter((item) =>
        //   item.toString().toLowerCase().includes(q.toString().toLowerCase())
        // );
      

     const resultsProvinsi = dataProvinsiFromRedux.filter((dt) =>
     {
        return  search.toString().toLowerCase() === "" ? dt : dt.name.toString().toLowerCase().includes(search.toString().toLowerCase());
     })
       

  return (
    <div>
      <div>
        <Link to="/FormAddress">go back ke all addres</Link>
      </div>
      <div>
        <h3>ini search:</h3>
        <input
          type="text"
          value={search || ""}
          onChange={(e) => handleSearch(e)}
          placeholder="search data"
        />
      </div>
      <GetRegion resultsProvinsi={resultsProvinsi}/>
    </div>
  );
}
