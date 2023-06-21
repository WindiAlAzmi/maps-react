/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PutToIDBDatabase from "../../../data/location-marker-idb";
// import { Helmet } from "react-helmet-async";

export default function PaymentDetail() {
    const {title} = useParams();
    const [dataIDB, setDataIDB] = useState({title:'', description:'',image:'', url:''});
  
    
    useEffect(() => {
        const fetchIDBDetail = async() => {
            const getUrlPaymentDetail = await PutToIDBDatabase.getData('url-preview');
             
                setDataIDB({title:getUrlPaymentDetail.title, description:getUrlPaymentDetail.description, image:getUrlPaymentDetail.img, url:`https://stellar-caramel-226f87.netlify.app/paymentNMW/${title}`});

        }
        fetchIDBDetail();
    },[])


  return (
    <div>
      {/* {dataIDB?.url && (
        <Helmet>
          <title>{dataIDB.title}</title>
          <meta name="description" content={dataIDB.description} />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link
            rel="canonical"
            href={`${dataIDB.url}`}
            data-react-helmet="true"
          />
          <meta
            property="og:title"
            content={dataIDB.title}
            data-react-helmet="true"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={dataIDB.description}
            data-react-helmet="true"
          />
          <meta
            property="og:image"
            content={"/assets" + dataIDB.image}
            data-react-helmet="true"
          />
          <meta
            property="og:url"
            content={dataIDB.url}
            data-react-helmet="true"
          />
        </Helmet>
      )} */}

      <main>
        <div>{title} dari params</div>
        <div>{dataIDB?.description}</div>
        <div>{dataIDB?.url}</div>
        <div className="h-40 w-40">
          <img src={dataIDB.image} alt="image ini" />
        </div>
      </main>
    </div>
  );
}
