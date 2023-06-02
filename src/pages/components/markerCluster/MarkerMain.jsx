import MarkerCluster from "./MarkerCluster";
import MarkerList from "./MarkerList";

export default function MarkerMain() {
  return (
    <div className="border border-black flex flex-row justify-around mt-10"> 
      <MarkerCluster/>
      <MarkerList/>
    </div>
  )
}
