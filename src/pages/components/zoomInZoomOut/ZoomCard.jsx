/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { DataService } from "../../../data/service-data";

const ImageMagnifier = ({
  src,
  width,
  height,
  magnifierHeight = 400,
  magnifierWidth = 500,
  zoomLevel = 2.5,
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  console.log(magnifierHeight, 'ii magnifier height');

  return (
    <div className="w-[500px]">
      <div>ini image yg dipilih</div>
      <div style={{ position: "relative", height: height, width: width }}>
        <img
          src={src}
          style={{ height: height, width: width }}
          onMouseEnter={(e) => {
            //update image size
            const getCurrent = e.currentTarget;
            const { width, height } = getCurrent.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
          }}
          onMouseMove={(e) => {
            //update cursor position
            const getCurrent = e.currentTarget;
            const { top, left } = getCurrent.getBoundingClientRect();

            //calculate cursor position on the image
            const x = e.pageX - left - window.pageXOffset;
            const y = e.pageY - top - window.pageYOffset;
            setXY([x, y]);
          }}
          onMouseLeave={() => {
            ///close magniefier
            setShowMagnifier(false);
          }}
          alt="gambar"
        />
        <div
          style={{
            display: showMagnifier ? "" : "none",
            position: "absolute",

            //prevent magnifier block mouse move
            pointerEvents: "none",
            //set size magnifier
            height: `${magnifierHeight}px`,
            width: `${magnifierWidth}px`,

            //move element center to cursor
            top: `${y - magnifierHeight / 2}px`,
            left: `${x - magnifierWidth / 2}px`,
            opacity: "1", // reduce opacity so you can verify position
            border: "1px solid lightgray",
            backgroundColor: "white",
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",

            //calculate zoomed image size
            backgroundSize: `${imgWidth * zoomLevel}px ${
              imgHeight * zoomLevel
            }px`,

            //calculete position of zoomed image.
            backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
            backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
          }}
        />
      </div>
    </div>
  );
};

export default function ZoomCard() {
  const [imgData, setImgData] = useState("");
  const [isImgData, setIsImgData] = useState(false);

  const dataProduct = DataService();

  const getUrlData = (data) => {
    console.log('data', data)
    setIsImgData(!isImgData);
    setImgData(data);
  };

  useEffect(() => {
    console.log("is img data", isImgData);
  }, [isImgData]);

  return (
    <div className="bg-white border border-green-800 p-10 flex flex-row justify-around">
      <div className="flex flex-col gap-40 justify-between">
        {dataProduct?.map((item, index) => {
          return (
            <div
              key={index}
              className="h-28 w-80"
              onClick={() => getUrlData(item.img)}
            >
              {item.title}
              <img src={item.img} alt={item.title} />
            </div>
          );
        })}
      </div>

      <div className="border border-black p-10">
        ini big picture
        {imgData && (
            <ImageMagnifier width="400px" height="300px" src={imgData}/>
        //   <div className="w-[60rem] overflow-hidden rounded-md">
        //     <img
        //       className="hover:scale-125 transition-all duration-500 cursor-pointer"
        //       src={imgData}
        //       alt=""
        //     />
        //   </div>
        )}
      </div>
    </div>
  );
}
