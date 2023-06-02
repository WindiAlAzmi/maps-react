/* eslint-disable no-undef */
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
// import L from "leaflet";
import markerData from "./markerData.json";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";



const location = [-6.300641, 106.814095];

// create custom icon
const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [38, 38] // size of the icon
});


export default function MarkerCluster() {
    console.log(markerData.data, 'ini data marker');

  return (
    <div>
      <MapContainer center={location} zoom={8} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {markerData.data.map((md, index) => (
            <Marker
              key={index}
              position={[
                md.latitude,
                md.longitude
              ]}
              icon={customIcon}
            >
              <Popup>
                {md.name}
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}
