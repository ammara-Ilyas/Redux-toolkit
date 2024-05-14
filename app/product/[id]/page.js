"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  console.log(router);
  // const { id } = router.query; // This will give you the value of id from the URL

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Page;
