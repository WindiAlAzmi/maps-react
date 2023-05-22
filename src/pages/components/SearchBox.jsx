import { useState } from "react";


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





  const getDataSearch = (e) => {
    e.preventDefault();
    // Search
    const params = {
      q: searchText,
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
      .then((result) => {
        console.log(JSON.parse(result));
        setListPlace(JSON.parse(result));
      })
      .catch((err) => console.log("err: ", err));
  }


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
        {listPlace.map((lp, index) => <div key={index} 
        onClick={() => setSearchLocation({lat:lp?.lat, lng:lp?.lon})}
        
        >{lp?.display_name}</div>)}
      </ul>
    </div>
  );
}
