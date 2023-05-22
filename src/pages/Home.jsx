
import LocationMarker from "./components/LocationMarker";
import { useState } from "react";
import SearchBox from "./components/SearchBox";

export default function Home() {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [searchLocation, setSerchLocation] = useState(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ width: "50vw", height: "100%" }}>
        <LocationMarker
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
          searchLocation={searchLocation}
          setSearchLocation={setSerchLocation}
        />
      </div>
      <div style={{ width: "50vw" }}>
        <SearchBox
          searchLocation={searchLocation}
          setSearchLocation={setSerchLocation}
        />
      </div>
    </div>
  );
}
