import markerData from "./markerData.json";


export default function MarkerList() {
  return (
    <div>
      <h3>ini list data lokasi nmw:</h3>
      <div className="flex flex-col gap-4">
        {markerData.data.map((dt, index) => (
           <div key={index} className="border border-black gap-4 flex justify-center p-3">
             <div>{dt.name}</div>
             <a className="rounded-lg border border-black" href={dt.googleMap}>arahkan saya</a>
           </div>
        ))}
      </div>
    </div>
  );
}
