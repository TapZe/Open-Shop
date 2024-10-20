import ProductCard from "./cards/ProductCard";

const ProductHomeGrid = () => {
  return (
    <>
      <div className="grid grid-flow-row py-10 gap-5">
        <h2 className="text-xl">Cat 1</h2>
        <div className="grid md:grid-flow-col gap-x-4 md:overflow-x-scroll no-scrollbar p-5 mb-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default ProductHomeGrid;
