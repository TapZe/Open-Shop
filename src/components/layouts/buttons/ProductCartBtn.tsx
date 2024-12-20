import { Link, NavLink } from "react-router-dom";
import useGetCartTotal from "../../../hooks/useGetCartTotal";

const CartBtn = () => {
  const { totalItems, totalPrice } = useGetCartTotal();

  return (
    <>
      <div className="dropdown dropdown-end">
        <div className="tooltip tooltip-bottom" data-tip="Shopping Cart">
          <NavLink
            to={`/product/cart`}
            tabIndex={0}
            role="button"
            className={({ isActive }) =>
              isActive
                ? "btn btn-circle btn-ghost text-primary"
                : "btn btn-circle btn-ghost"
            }
            onClick={(event) => {
              if (totalItems && totalItems > 0) {
                event.preventDefault();
              }
            }}
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-secondary badge-sm indicator-item">
                {totalItems || 0}
              </span>
            </div>
          </NavLink>
        </div>
        <div
          tabIndex={0}
          className={`card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow ${
            !(totalItems && totalItems > 0) && "hidden"
          }`}
        >
          <div className="card-body">
            <span className="text-lg font-bold">{totalItems || 0} Items</span>
            <span className="text-info">Subtotal: ${totalPrice}</span>
            <div className="card-actions">
              <Link to={`/product/cart`} className="btn btn-primary btn-block">
                View cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartBtn;
