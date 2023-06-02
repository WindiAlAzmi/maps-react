/* eslint-disable no-unused-vars */
import { useState } from "react";

import { Helmet } from "react-helmet";
import { DataService } from "../../../data/service-data";

const products = [
  {
    id: 1,
    title: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Black",
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];
const deliveryMethods = [
  {
    id: 1,
    title: "Standard",
    turnaround: "4–10 business days",
    price: "$5.00",
  },
  { id: 2, title: "Express", turnaround: "2–5 business days", price: "$16.00" },
];
const paymentMethods = [
  { id: "credit-card", title: "Credit card" },
  { id: "paypal", title: "PayPal" },
  { id: "etransfer", title: "eTransfer" },
];
const footerNavigation = {
  products: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  customerService: [
    { name: "Contact", href: "#" },
    { name: "Shipping", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Secure Payments", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Find a store", href: "#" },
  ],
};


export default function PaymentNMW() {


  const [nameCustomer, setNameCustomer] = useState("");
  const [descCustomer, setDescCustomer] = useState([]);

  const itemProduct = DataService();


    const metaHTML = {
      title: `pembayaran atas  ${nameCustomer}`,
      description: `nama barang ${descCustomer?.title}`,
      image: `${descCustomer?.img}`,
      url: window.location.href,
    };
    

    const getDataProduct = (data) => {
       console.log(data, 'ini data')
       setDescCustomer(data);
    }

  
  return (
    <div>
      <Helmet>
        <title>{metaHTML.title}</title>
        <meta name="title" content={metaHTML.title} data-react-helmet="true" />
        <meta
          name="description"
          content={metaHTML.description}
          data-react-helmet="true"
        />
        <meta
          property="og:title"
          content={metaHTML.title}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={metaHTML.description}
          data-react-helmet="true"
        />
        <meta
          property="og:image"
          content={"%PUBLIC_URL%" + metaHTML.image}
          data-react-helmet="true"
        />
        <meta
          property="og:url"
          content={metaHTML.url}
          data-react-helmet="true"
        />
      </Helmet>
      <main>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700"
          >
            Last name {nameCustomer}
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="last-name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={(e)=> setNameCustomer(e.target.value)}
            />
          </div>
        </div>

        <div>
            {itemProduct?.map((item, index) => {
                return <div key={index} onClick={() => getDataProduct(item)}>{item.title}</div>
            })}
        </div>

     
      </main>
    </div>
  );
}
