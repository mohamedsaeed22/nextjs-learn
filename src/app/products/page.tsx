import Link from "next/link";

interface IProps {}

const page = async ({}: IProps) => {
  let data = await fetch(`https://dummyjson.com/products`);
  let { products } = await data.json();
   return (
    <div>
      {products?.map((product: { id: number; title: string }) => {
        return (
          <div key={product.id}>
            <Link href={`/products/${product.id}`}>
              this is product id - {product.id}  ----- 
              this is product id - {product.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default page;
