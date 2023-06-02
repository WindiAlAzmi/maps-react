import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { DataService } from "../../../data/service-data";
import { useState } from "react";

export default function ZoomPinch() {
  const [imgData, setImgData] = useState("");

const dataProduct = DataService();

      console.log(imgData, "get data LUAR   ");


  const getUrlData = (data) => {
 
   setImgData(data);
      console.log(data, "get data");
      
  };

  return (
    <div>
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
      {imgData && (
         <><img src={imgData} alt="test" />
        <TransformWrapper
          initialScale={1}
          initialPositionX={200}
          initialPositionY={100}
        >
          <TransformComponent>
            <img src={imgData} alt="test" />
          </TransformComponent>
        </TransformWrapper>
        </>
      )}
    </div>
  );
}
