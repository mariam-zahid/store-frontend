import React from "react";

const data = [
  {
    header: "White Glace Cotton Satin Stripe/Plain Bedsheets",
    data: [
      {
        item: "Bedsheet (1+2)",
        size: "108*108",
        price: "495",
        packing: "100 pcs/bale",
        gst: "5%",
      },
      {
        item: "Bedsheet (1+2)",
        size: "90*108",
        price: "415",
        packing: "100 pcs/bale",
        gst: "5%",
      },
      {
        item: "Bedsheet (1+2)",
        size: "90*100",
        price: "385",
        packing: "100 pcs/bale",
        gst: "5%",
      },
      {
        item: "Bedsheet (1+2)",
        size: "60*90",
        price: "260",
        packing: "100 pcs/bale",
        gst: "5%",
      },
    ],
  },
  {
    header: "White Glace Cotton Satin Stripe/Plain Fitted Bedsheets",
    data: [
      {
        item: "King Size (1+2)",
        size: "80*80*10",
        price: "475",
        packing: "100 pcs/bale",
        gst: "5%",
      },
      {
        item: "Double Bed (1+2)",
        size: "72*80*10",
        price: "450",
        packing: "100 pcs/bale",
        gst: "5%",
      },
      {
        item: "Queen Size (1+2)",
        size: "72*60*10",
        price: "390",
        packing: "100 pcs/bale",
        gst: "5%",
      },
      {
        item: "Single (1+1)",
        size: "72*36*10",
        price: "320",
        packing: "100 pcs/bale",
        gst: "5%",
      },
    ],
  },
  {
    header: "White Duvet Covers Premium Quality",
    data: [
      {
        item: "Duvet Cover",
        size: "108*108",
        price: "890",
        packing: "100 pcs/bale",
        gst: "5%",
      },
      {
        item: "Duvet Cover",
        size: "90*100",
        price: "695",
        packing: "100 pcs/bale",
        gst: "5%",
      },
      {
        item: "Duvet Cover",
        size: "60*90",
        price: "460",
        packing: "100 pcs/bale",
        gst: "5%",
      },
    ],
  },
  {
    header: "White Comforters Premium Quality",
    data: [
      {
        item: "Comforter (2000 G approx)",
        size: "90*95",
        price: "935",
        packing: "15 pcs/bale",
        gst: "12%",
      },
      {
        item: "Comforter (1700 G approx)",
        size: "78*90",
        price: "830",
        packing: "20 pcs/bale",
        gst: "12%",
      },
    ],
  },
];

const PriceList = () => {
  return (
    <div>
      {data.map((item) => (
        <>
          <h2 className="text-center m-4 md:m-12">{item.header}</h2>
          <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
            <tr className="text-left border-b border-gray-300">
              <th className="px-4 py-3">Sr. No</th>
              <th className="px-4 py-3">Item</th>
              <th className="px-4 py-3">Size(inch)</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Packing</th>
              <th className="px-4 py-3">GST</th>
            </tr>
            {item.data.map((el, index) => (
              <tr className="bg-gray-700 border-b border-gray-600">
                <td className="px-4 py-3">{index}</td>
                <td className="px-4 py-3">{el.item}</td>
                <td className="px-4 py-3">{el.size}</td>
                <td className="px-4 py-3">{el.price} /-</td>
                <td className="px-4 py-3">{el.packing}</td>
                <td className="px-4 py-3">{el.gst}</td>
              </tr>
            ))}
          </table>
        </>
      ))}
    </div>
  );
};

export default PriceList;
