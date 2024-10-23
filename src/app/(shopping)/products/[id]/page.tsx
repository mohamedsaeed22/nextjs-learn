// "use client"
import Button from "@/components/Button";

import Image from "next/image";

interface IProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: IProps) => {
  // throw new Error("error");
  let data = await fetch(`https://dummyjson.com/products/${params.id}`);
  let product = await data.json();
 

  const clickBtn = () => {
    console.log("btn clicked");
  };
  return (
    <>
      <div>this is an product page {product.title}</div>
      <Image
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={200}
      />
      <Button text="hello btn" />
    </>
  );
};

export default ProductPage;
