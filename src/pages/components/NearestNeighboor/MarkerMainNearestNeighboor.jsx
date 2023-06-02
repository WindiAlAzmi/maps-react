
import MarkerNearestNeighboor from "./MarkerNearestNeighboor";
import MarkerListNearestNeighboor from "./MarkerListNearestNeighboor";
import {  useEffect, useState } from "react";

export default function MarkerMainNearestNeighboor() {
  const [findIdKKN, setFindIdKKN] = useState(0);
  const [findLocationKKN, setFindLocationKKN] = useState([]);

  useEffect(() => {
  
  }, [findIdKKN, findLocationKKN]);

  return (
    <div className="border border-black flex flex-row justify-around mt-10">
      <MarkerNearestNeighboor
        findIdKKN={findIdKKN}
        setFindIdKKN={setFindIdKKN}
        findLocationKKN={findLocationKKN}
        setFindLocationKKN={setFindLocationKKN}
      />
      <MarkerListNearestNeighboor
        findIdKKN={findIdKKN}
        setFindIdKKN={setFindIdKKN}
        findLocationKKN={findLocationKKN}
        setFindLocationKKN={setFindLocationKKN}
      />
    </div>
  );
}
