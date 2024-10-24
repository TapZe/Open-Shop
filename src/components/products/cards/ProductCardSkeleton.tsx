const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 w-72 shadow-xl">
      <div className="tooltip absolute top-2 right-2">
        <button className="btn btn-sm btn-primary btn-outline skeleton"></button>
      </div>
      <figure className="px-10 pt-10">
        <div className="skeleton h-40 rounded-xl aspect-video"></div>
      </figure>
      <div className="card-body">
        <h2 className="skeleton h-6 w-3/4"></h2>
        <p className="skeleton h-4 w-full"></p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary skeleton"></button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
