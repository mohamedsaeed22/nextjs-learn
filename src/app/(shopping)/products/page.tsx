import Link from "next/link";
import { Suspense } from "react";

interface IProps {}

const page = async ({}: IProps) => {
  const data = await fetch(`https://dummyjson.com/products`);
  const { products } = await data.json();
  return (
    <div>
      <Suspense fallback={"loading products"}>
        {products?.map((product: { id: number; title: string }) => {
          return (
            <div key={product.id}>
              <Link href={`/products/${product.id}`}>
                this is product id - {product.id} ----- this is product id -{" "}
                {product.title}
              </Link>
            </div>
          );
        })}
      </Suspense>
    </div>
  );
};

export default page;
