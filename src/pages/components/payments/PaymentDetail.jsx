/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PutToIDBDatabase from "../../../data/location-marker-idb";
import { Helmet } from "react-helmet";

export default function PaymentDetail() {
    const {title} = useParams();
    const [dataIDB, setDataIDB] = useState({title:'', description:'',image:'', url:''});
    console.log('title');

    
    

    useEffect(() => {
        const fetchIDBDetail = async() => {
            const getUrlPaymentDetail = await PutToIDBDatabase.getData('url-preview');
                console.log(getUrlPaymentDetail, 'ini payment');
                setDataIDB({title:getUrlPaymentDetail.title, description:getUrlPaymentDetail.description, image:getUrlPaymentDetail.img, url:`https://stellar-caramel-226f87.netlify.app/paymentNMW/${title}`});

        }
        fetchIDBDetail();
    },[])

  return (
    <div>
      {dataIDB?.url && (
        <Helmet>
          <meta
            httpEquiv="content-type"
            content="text/html; charset=iso-8859-1"
          />
          <link rel="canonical" href={`${dataIDB.url}`}></link>
          <meta name="description" content={dataIDB.description} />
          <meta name="title" content={dataIDB.title} />
          <title>{dataIDB.title}</title>
        </Helmet>
      )}

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
